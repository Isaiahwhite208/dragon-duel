import Player from "../models/Player.js";
import Dragon from "../models/Dragon.js";

function dragonUrl(url) {
  return 'https://dragon-duel.herokuapp.com/api/dragons' + encodeURIComponent(url)
}

let dragons = {}

export default class DuelService {
  getDragon(draw, drawError) {
    fetch(dragonUrl("https://dragon-duel.herokuapp.com/api/dragons"))
      .then(res => res.json())
      .then(res => draw(res.results))
  }
}