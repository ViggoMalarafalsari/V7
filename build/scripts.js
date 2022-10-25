/**
 * Bolti falinn undir bolla
 * spilað gegnum console
 */



/** Lágmark bolla sem má velja. */
const MIN_NUM_OF_CUPS = 2;

/** Hámark bolla sem má velja. */
const MAX_NUM_OF_CUPS = 10;

/** Fjöldi spilaðra leikja. */
let played = 0;

/** Fjöldi unnra leikja. */
let won = 0;

/** Fjöldi stiga. */
let points = 0;

/**
 * Athugar hvort gefin tala sé á bilinu [min, max].
 *
 * @param {string | number} numAsString Tala sem á að athuga.
 * @param {number} min Lágmark sem tala má vera.
 * @param {number} max Hámark sem tala má vera.
 * @returns `true` ef tala er innan bils, annars `false`.
 */


function isValidNum(numAsString, min, max) {
  let numAsInt = Number(numAsString);
  if (numAsInt >= min && numAsInt <= max) {
    return true;
  } 
  else {
    return false;
  }
}

/**
 * Nær í gisk frá notanda.
 *
 * @param {number} numOfCups Heildar fjöldi bolla.
 * @returns `null` ef notandi hætti við, annars vali notanda sem tölu.
 */
function getChoice(numOfCups) {
  let cups = prompt(`Þú valdir ${numOfCups}`);

  return cups;
}

/**
 * Skilar tölu af handahófi á bilinu [min, max].
 *
 * @param {number} min Lágmark bils.
 * @param {number} max Hámark bils.
 * @returns Tala af handahófi á bili [min, max].
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Spilum leik.
 */
function play() {
  do {
    const numOfCups = prompt(`Hve marga bolla?
Verður að vera gildi á bilinu [${MIN_NUM_OF_CUPS}, ${MAX_NUM_OF_CUPS}].
Þú færð N-1 fyrir að finna bolta í N bollum.
Ýttu á cancel eða ESC til að hætta.`);

    // Ýtt á ESC/Cancel
    if (numOfCups === null) {
      return;
    }
    else if (isValidNum(numOfCups, MIN_NUM_OF_CUPS, MAX_NUM_OF_CUPS)) {
      let cups = getChoice(numOfCups);
      let rightcup = randomNumber(1, Number(numOfCups));

      if (Number(cups) === rightcup) {
        alert(`Þú valdir réttan bolla`)
        let stig = Number(numOfCups) - 1
        points += stig;
        won += 1;
      }
      else {
        alert(`Þú valdir rangan bolla. Rétti bollinn var ${rightcup}`)
      }
      confirm(`Viltu halda leik áfram?`)
      played += 1;
    } 
    else {
      console.error(`Ekki löglegt gildi`);
      return;
    }
    
    
  /* TODO útfæra */
  } while (true)
}

/**
 * Birtir stöðu spilara.
 */
function games() {
  console.log(`Þú hefur spilað ${played}`) 
  console.log(`Þú hefur unnið ${won}`)
  console.log(`þú hefur ${points} stig`)
  }

