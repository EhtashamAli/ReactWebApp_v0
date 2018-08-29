import React , {Component} from 'react';
//import classes from './Layout.css';
import Aux from '../../hoc/Wrapper/Wrapper';
import Toolbar from '../../Components/Toolbar/Toolbar';
import Modal from '../../Components/UI/Modal/Modal';
import Forcast from '../../Components/Forcast/Forcast';
import axios from 'axios';
import CurrentWeather from '../../Components/CurrentWeather/CurrentWeather';
import Spinner from '../../Components/Spinner/Spinner';


class Layout extends Component {

    state = {
        showModal : false,
        cityName : "karachi",
        temp : null,
        country: null,
        weatherDescription : null,
        iconId : null,
        apiKey : "99c08380f0254726912743ee5b47a5ea",
        forcast : [
            {id : 0 , time : null , temp : null , iconId : null},
            {id : 1 , time : null , temp : null , iconId : null},
            {id : 2 , time : null , temp : null , iconId : null},
            {id : 3 , time : null , temp : null , iconId : null}
        ],
        loading : false
    };

    componentDidMount () {
        this.setState({
            loading : true
        })
        const ApiKey = this.state.apiKey;
        const city = this.state.cityName;
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&mode=json&appid=${ApiKey}`
    )
        .then(res => {
            console.log(res.data.list);
            const fetchForcast = res.data.list.filter(( _ , i) => (i > 0 && i < 5) === true );
            const forcast = fetchForcast.map((key , i)=> {
                return {
                    id : i,
                    temp : key.main.temp,
                    time : key.dt_txt.slice(11 , 16),
                    iconId : key.weather[0].icon
                }
            });
            
            this.setState({
                showModal : false,
                weatherDescription :res.data.list[0].weather[0].description,
                temp : res.data.list[0].main.temp,
                cityName : res.data.city.name,
                iconId : res.data.list[0].weather[0].icon,
                forcast : forcast,
                loading: false
            });

        })
        .catch(err => {
                this.setState ({
                    showModal : false,
                    weatherDescription : "POSSIBLE NETWORK ERROR!",
                    cityName : null,
                    temp : null,
                    iconId : null,
                    loading : false
                });
        });
    }
    ShowModalHandler = () => {
        this.setState({
            showModal : true
        });
    };

    CloseModalHandler = () => {
        this.setState({
            showModal : false
        });
    };

    cityNameHandler = (event) => {
        this.setState({
            cityName : event.target.value
        });
    };
    fetchWeather = () => {
        this.setState({
            loading : true,
            showModal : false
        })
        const ApiKey = this.state.apiKey;
        const city = this.state.cityName;
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&mode=json&appid=${ApiKey}`
    )
        .then(res => {
            console.log(res.data.list);
            const fetchForcast = res.data.list.filter(( _ , i) => (i > 0 && i < 5) === true );
            const forcast = fetchForcast.map((key , i)=> {
                return {
                    id : i,
                    temp : key.main.temp,
                    time : key.dt_txt,
                    iconId : key.weather[0].icon
                }
            });
            
            this.setState({
                showModal : false,
                weatherDescription :res.data.list[0].weather[0].description,
                temp : res.data.list[0].main.temp,
                cityName : res.data.city.name,
                iconId : res.data.list[0].weather[0].icon,
                forcast : forcast,
                loading: false
            });

        })
        .catch(err => {
                this.setState ({
                    showModal : false,
                    weatherDescription : "POSSIBLE NETWORK ERROR!",
                    cityName : null,
                    temp : null,
                    iconId : null,
                    loading : false
                });
        });
    }
    render () {
        let  currentWeather = <CurrentWeather desc = "Something Went Wrong"/>
        if(this.state.loading) {
            currentWeather = <Spinner/>
        }
        if (this.state.temp){
            currentWeather = <CurrentWeather iconId = {this.state.iconId} temp = {this.state.temp} cityName = {this.state.cityName} desc = {this.state.weatherDescription}/>
        }
       
        return (
            <Aux>
                <Toolbar clicked = {this.ShowModalHandler}/>
                <Modal click = {this.fetchWeather}show = {this.state.showModal} disableModal = {this.CloseModalHandler} cityName = {this.cityNameHandler}/>
                {currentWeather}
                <Forcast forcast = {this.state.forcast}/>
                
             </Aux>    
        );
    }
} 
export default Layout;