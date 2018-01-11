import rollDice from "roll-dice";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {

  const d = new rollDice();
  var diceType = event.pathParameters.dice;
  var result = d.roll(diceType);


  try {
    callback(null, success(result));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
