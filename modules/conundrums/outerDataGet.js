const Schema = require('./Model');


module.exports = async function outerDataGet() {
    const mongoHasDatas = await Schema.find();
    if (!!mongoHasDatas[0] === false) {
    const converterRiddles = (text) => {
        return text.split(/(\d)/).filter(el => el.includes("Answer")).map(el1 => [(el1.slice(el1.indexOf(":") + 2, el1.indexOf("Answer"))).trimEnd(), (el1.slice(el1.lastIndexOf(":") + 2).trimEnd())]);
    }

    const model = new Schema({
        riddles: {
            easy: converterRiddles(`1. Riddle: What has to be broken before you can use it?
Answer: An egg

2. Riddle: I’m tall when I’m young, and I’m short when I’m old. What am I?
Answer: A candle

3. Riddle: What month of the year has 28 days?
Answer: All of them

4. Riddle: What is full of holes but still holds water?
Answer: A sponge

5. Riddle: What question can you never answer yes to?
Answer: Are you asleep yet?

6. Riddle: What is always in front of you but can’t be seen?
Answer: The future

7. Riddle: There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?
Answer: There aren’t any—it’s a one-story house.

8. Riddle. What can you break, even if you never pick it up or touch it?
Answer: A promise

9. Riddle: What goes up but never comes down?
Answer: Your age

10. Riddle: A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?
Answer: He was bald.

11. Riddle: What gets wet while drying?
Answer: A towel

12. Riddle: What can you keep after giving to someone?
Answer: Your word

13. Riddle: I shave every day, but my beard stays the same. What am I?
Answer: A barber

14. Riddle: You see a boat filled with people, yet there isn’t a single person on board. How is that possible?
Answer: All the people on the boat are married.

15. Riddle: You walk into a room that contains a match, a kerosene lamp, a candle and a fireplace. What would you light first?
Answer: The match

16. Riddle: A man dies of old age on his 25 birthday. How is this possible?
Answer: He was born on February 29.

17. Riddle: I have branches, but no fruit, trunk or leaves. What am I?
Answer: A bank

18. Riddle: What can’t talk but will reply when spoken to?
Answer: An echo

19. Riddle: The more of this there is, the less you see. What is it?
Answer: Darkness

Riddles for Kids
20. Riddle: David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?
Answer: David

21. Riddle: I follow you all the time and copy your every move, but you can’t touch me or catch me. What am I?
Answer: Your shadow

22. Riddle: What has many keys but can’t open a single lock?
Answer: A piano

23. Riddle: What can you hold in your left hand but not in your right?
Answer: Your right elbow

24. Riddle: What is black when it’s clean and white when it’s dirty?
Answer: A chalkboard

25. Riddle: What gets bigger when more is taken away?
Answer: A hole

26. Riddle: I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?
Answer: Your breath

27. Riddle: I’m found in socks, scarves and mittens; and often in the paws of playful kittens. What am I?
Answer: Yarn

28. Riddle: Where does today come before yesterday?
Answer: The dictionary

29. Riddle: What invention lets you look right through a wall?
Answer: A window

30. Riddle: If you’ve got me, you want to share me; if you share me, you haven’t kept me. What am I?
Answer: A secret

31. Riddle: What can’t be put in a saucepan?
Answer: It’s lid

32. Riddle: What goes up and down but doesn’t move?
Answer: A staircase

33. Riddle: If you’re running in a race and you pass the person in second place, what place are you in?
Answer: Second place

34. Riddle: It belongs to you, but other people use it more than you do. What is it?
Answer: Your name`),
            kids: converterRiddles(`20. Riddle: David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?
Answer: David

21. Riddle: I follow you all the time and copy your every move, but you can’t touch me or catch me. What am I?
Answer: Your shadow

22. Riddle: What has many keys but can’t open a single lock?
Answer: A piano

23. Riddle: What can you hold in your left hand but not in your right?
Answer: Your right elbow

24. Riddle: What is black when it’s clean and white when it’s dirty?
Answer: A chalkboard

25. Riddle: What gets bigger when more is taken away?
Answer: A hole

26. Riddle: I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?
Answer: Your breath

27. Riddle: I’m found in socks, scarves and mittens; and often in the paws of playful kittens. What am I?
Answer: Yarn

28. Riddle: Where does today come before yesterday?
Answer: The dictionary

29. Riddle: What invention lets you look right through a wall?
Answer: A window

30. Riddle: If you’ve got me, you want to share me; if you share me, you haven’t kept me. What am I?
Answer: A secret

31. Riddle: What can’t be put in a saucepan?
Answer: It’s lid

32. Riddle: What goes up and down but doesn’t move?
Answer: A staircase

33. Riddle: If you’re running in a race and you pass the person in second place, what place are you in?
Answer: Second place

34. Riddle: It belongs to you, but other people use it more than you do. What is it?
Answer: Your name
`),
            funny: converterRiddles(`35. Riddle: What has lots of eyes, but can’t see?
Answer: A potato

36. Riddle: What has one eye, but can’t see?
Answer: A needle

37. Riddle: What has many needles, but doesn’t sew?
Answer: A Christmas tree

38. Riddle: What has hands, but can’t clap?
Answer: A clock

39. Riddle: What has legs, but doesn’t walk?
Answer: A table

40. Riddle: What has one head, one foot and four legs?
Answer: A bed

41. Riddle: What can you catch, but not throw?
Answer: A cold

42. Riddle: What kind of band never plays music?
Answer: A rubber band

43. Riddle: What has many teeth, but can’t bite?
Answer: A comb

44. Riddle: What is cut on a table, but is never eaten?
Answer: A deck of cards

45. Riddle: What has words, but never speaks?
Answer: A book

Related: 75 Halloween Riddles

46. Riddle: What runs all around a backyard, yet never moves?
Answer: A fence

47. Riddle: What can travel all around the world without leaving its corner?
Answer: A stamp

48. Riddle: What has a thumb and four fingers, but is not a hand?
Answer: A glove

49. Riddle: What has a head and a tail but no body?
Answer: A coin

50. Riddle: Where does one wall meet the other wall?
Answer: On the corner

51. Riddle: What building has the most stories?
Answer: The library

52. Riddle: What tastes better than it smells?
Answer: Your tongue

53. Riddle: What has 13 hearts, but no other organs?
Answer: A deck of cards

54. Riddle: It stalks the countryside with ears that can’t hear. What is it?
Answer: Corn

55. Riddle: What kind of coat is best put on wet?
Answer: A coat of paint

56. Riddle: What has a bottom at the top?
Answer: Your legs

57. Riddle: What has four wheels and flies?
Answer: A garbage truck`),
            math: converterRiddles(`58. Riddle: I am an odd number. Take away a letter and I become even. What number am I?
Answer: Seven

59. Riddle: If two’s company, and three’s a crowd, what are four and five?
Answer: Nine

60. Riddle: What three numbers, none of which is zero, give the same result whether they’re added or multiplied?
Answer: One, two and three

61. Riddle: Mary has four daughters, and each of her daughters has a brother. How many children does Mary have?
Answer: Five—each daughter has the same brother.

62. Riddle: Which is heavier: a ton of bricks or a ton of feathers?
Answer: Neither—they both weigh a ton.

63. Riddle: Three doctors said that Bill was their brother. Bill says he has no brothers. How many brothers does Bill actually have?
Answer: None. He has three sisters.

64. Riddle: Two fathers and two sons are in a car, yet there are only three people in the car. How?
Answer: They are a grandfather, father and son.

65. Riddle: The day before yesterday I was 21, and next year I will be 24. When is my birthday?
Answer: December 31; today is January 1.

66. Riddle: A little girl goes to the store and buys one dozen eggs. As she is going home, all but three break. How many eggs are left unbroken?
Answer: Three

67. Riddle: A man describes his daughters, saying, “They are all blonde, but two; all brunette but two; and all redheaded but two.” How many daughters does he have?
Answer: Three: A blonde, a brunette and a redhead

68. Riddle: If there are three apples and you take away two, how many apples do you have?
Answer: You have two apples.

69. Riddle: A girl has as many brothers as sisters, but each brother has only half as many brothers as sisters. How many brothers and sisters are there in the family?
Answer: Four sisters and three brothers`),
            word: converterRiddles(`70. Riddle: What five-letter word becomes shorter when you add two letters to it?
Answer: Short

71. Riddle: What begins with an "e" and only contains one letter?
Answer: An envelope

72. Riddle: A word I know, six letters it contains, remove one letter and 12 remains. What is it?
Answer: Dozens

73. Riddle: What would you find in the middle of Toronto?
Answer: The letter “o”

74. Riddle: You see me once in June, twice in November and not at all in May. What am I?
Answer: The letter “e”

75. Riddle: Two in a corner, one in a room, zero in a house, but one in a shelter. What is it?
Answer: The letter “r”

Related: Would You Rather Questions

76. Riddle: I am the beginning of everything, the end of everywhere. I'm the beginning of eternity, the end of time and space. What am I?
Answer: Also the letter “e”

77. Riddle: What 4-letter word can be written forward, backward or upside down, and can still be read from left to right?
Answer: NOON

78. Riddle: Forward I am heavy, but backward I am not. What am I?
Answer: The word “not”

79. Riddle: What is 3/7 chicken, 2/3 cat and 2/4 goat?
Answer: Chicago

80. Riddle: I am a word of letters three; add two and fewer there will be. What word am I?
Answer: Few

81. Riddle: What word of five letters has one left when two are removed?Answer: Stone

82. Riddle: What is the end of everything?
Answer: The letter “g”

83. Riddle: What word is pronounced the same if you take away four of its five letters?
Answer: Queue

84. Riddle: I am a word that begins with the letter “i.” If you add the letter “a” to me, I become a new word with a different meaning, but that sounds exactly the same. What word am I?
Answer: Isle (add “a” to make “aisle”)

85. Riddle: What word in the English language does the following: The first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?
Answer: Heroine`),
            hard: converterRiddles(`86. Riddle: What is so fragile that saying its name breaks it?
Answer: Silence.

87. Riddle: What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?
Answer: A river

88. Riddle: Speaking of rivers, a man calls his dog from the opposite side of the river. The dog crosses the river without getting wet, and without using a bridge or boat. How?
Answer: The river was frozen.

89. Riddle: What can fill a room but takes up no space?
Answer: Light

90. Riddle: If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I?
Answer: A mirror

91. Riddle: The more you take, the more you leave behind. What are they?Answer: Footsteps

92. Riddle: I turn once, what is out will not get in. I turn again, what is in will not get out. What am I?
Answer: A key

93. Riddle: People make me, save me, change me, raise me. What am I?Answer: Money

94. Riddle: What breaks yet never falls, and what falls yet never breaks?
Answer: Day, and night

95. Riddle: What goes through cities and fields, but never moves?
Answer: A road

96. Riddle: I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?
Answer: Fire

97. Riddle: The person who makes it has no need of it; the person who buys it has no use for it. The person who uses it can neither see nor feel it. What is it?
Answer: A coffin

98. Riddle: A man looks at a painting in a museum and says, “Brothers and sisters I have none, but that man’s father is my father’s son.” Who is in the painting?
Answer: The man’s son

99. Riddle: With pointed fangs I sit and wait; with piercing force I crunch out fate; grabbing victims, proclaiming might; physically joining with a single bite. What am I?
Answer: A stapler

100. Riddle: I have lakes with no water, mountains with no stone and cities with no buildings. What am I?
Answer: A map

101. Riddle: What does man love more than life, hate more than death or mortal strife; that which contented men desire; the poor have, the rich require; the miser spends, the spendthrift saves, and all men carry to their graves?
Answer: Nothing`)
        },
        schoolPrg: [
            [
                "How many ocean out there on Earth?",
                ["4", "5", "6"],
                "5",
                "There are 5 oceans. But there used to be 4: The Pacific, Atlantic, Indian, amd Arctic. In 2000, the International Hydrographic Organization united parts of the Atlantic, Indian, and Pacific to make the new Southern Ocean",
                false
            ],
            [
                "The unit of measurement for strength of an electric current is?",
                ["Ampere", "Volt", "Watt"],
                "Ampere",
                "The unit of measurement for the strength of an electric current is ampere. It was named after the French physicist Andre-Marie Ampere",
                false
            ],
            [
                "How far is Saturn from Earth?",
                ["6th", "3th", "9th"],
                "6th",
                "Saturn is the 6th planet from the sun. Like Jupiter, Uranus, and Neptune, Saturn is a gas giant and doesn't have a solid surface",
                false
            ],
            [
                "What element of yhe periodic table is referred to as Ag?",
                ["Gold", "Silver", "Argon"],
                "Ag",
                "It is silver or Argentum in Latin. Im Mendeleev's periodic table it is refereed to as Ag.",
                false
            ],
            [
                "How many decimeters are in 0.2 km?",
                ["20,000 dm", "2,000 dm", "200 dm"],
                "200 dm",
                "0.2 is 200 meters; each meter is 10 decimetres; therefore, we multiply 200 by 10 and get 2,000 dm.",
                false
            ],
            [
                "The longest river in the world is",
                ["The Amazon River", "The Nile", "The Yangtze"],
                "The Amazon River",
                "The longest river in the world is the Amazon River at 4,345 miles. The Nile is in 2nd place at 4,258 miles. The Yangtze (3,964 miles) and the Mississippi River (2,320 miles) come next.",
                false
            ],
            [
                "What is the value of the Roman numeral LXXVII?",
                ["56", "77", "112"],
                "77",
                "it's 77. Lis 50, X is 10, Vis 5, and Tis 1.",
                false
            ],
            [
                "The green pigment in a leaf is called",
                ["Chlorophyllin", "Chloroplast", "Chlorophyll"],
                "Chlorophyll",
                "The green pigment is called chlorophyll and can be found in the chloroplast (cell structures within leaves).",
                false
            ],
            [
                "We all know the prefix \"kilo\"\n" +
                "What about \"hecto\"?\n" +
                "How much is it?",
                ["1.000", "100", "10"],
                "100",
                "\"Hecto\" is the prefix used in the International System of Units that means multiplying by 100.\n" +
                "For example, hectare = 100 are.",
                false
            ],
            [
                "The bile is produced in",
                ["gallbladder", "pancreas", "liver"],
                "gallbladder",
                "Bile is produced by the liver cells called hepatocytes.\n" +
                "Then the bile goes to the gallbladder and duodenum where it takes part in the digestive processes.",
                false
            ],
            [
                "Why do seasons change?",
                ["Because Earth moves closer and further from the sun", "Because of the incline of the Earth's axis", "Because of the rotation of Earth around its axis"],
                "Because of the incline of the Earth's axis",
                "We experience changing seasons because of the incline of the Earth's axis.\n" +
                "In different seasons the sun's rays reach Earth at different angles: straight rays are hotter and inclined ones deliver less heat to the surface.",
                false
            ],
            [
                "How many chromosomes are there in the human genome?",
                ["42", "44", "46"],
                "46",
                "The human genome\n" +
                "(the set of memory material in a single cell) contains 23 chromosome pairs or 46 chromosomes.",
                false
            ]
        ]
    })
    await model
        .save()
        .then(() => {
            console.log("Riddles and school program is updated");
        })
        .catch((err) => {
            console.log(err);
        })
    } else console.log("All newsAndProducts already updated!")
}