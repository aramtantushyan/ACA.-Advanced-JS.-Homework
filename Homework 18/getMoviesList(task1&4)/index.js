console.log('hello')
import { doGet } from "../requestHelper/request.helper.js";

doGet('https://ghibliapi.herokuapp.com/films').catch((e)=> console.log(e));
