const schemaNonGames = require('./ModelOfNewsOrConsOrAccess.js');
const schemaOfGames = require('./ModelOfGames.js');
const mongoose = require('mongoose');
const jsdom = require("jsdom");

const cnls = mongoose.model('CONSOLES', schemaNonGames);
const aces = mongoose.model('ACCESSORIES', schemaNonGames);
const gms = mongoose.model('GAMES', schemaOfGames);

module.exports = async function () {
    class consolesOrAccessTemplateWithoutColors {
        constructor(mCover, dImgs, rDate, pText, tms, mText, wBox, prc) {
            this.mainCover = mCover;
            this.descriptionImgs = dImgs;
            this.realiseDate = rDate;
            this.previewText = pText;
            this.terms = tms;
            this.mainText = mText;
            this.whatInTheBox = wBox;
            this.price = prc;
        }
    }

    class consolesOrAccessTemplateWithColors {
        constructor(aIAT, rDate, pText, tms, mText, prc) {
            this.allImgsAndTitles = aIAT;
            this.realiseDate = rDate;
            this.previewText = pText;
            this.terms = tms;
            this.mainText = mText;
            this.price = prc;
        }
    }

    const consoleList = {
        ['PlayStation®5 Console – Marvel’s Spider-Man 2 Bundle']: new consolesOrAccessTemplateWithoutColors(
            'https://media.direct.playstation.com/is/image/sierialto/ps5-spider-man-2-standard-bundle-box-esrb-us-hero1.jpg?$Background_Large$',
            [
                'https://media.direct.playstation.com/is/image/sierialto/ps5-spider-man-2-standard-bundle-box-esrb-us-hero1.jpg?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/ps5-marvel-spider-man2-miles-combat?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/ps5-marvel-spider-man2-symbiote-slam?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/ps5-marvel-spider-man2-kraven?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/whats-in-the-box-ps5-MSM2?$Background_Large$'
            ],
            'October 20, 2023',
            'Swing your way through Marvel’s New York with the PlayStation®5 Console – Marvel’s Spider-Man 2 Bundle. Experience Marvel’s Spider-Man 2 with PS5 innovations. Feel the force of web-swinging with adaptive triggers, while haptic feedback responds to Peter Parker’s new symbiote abilities and Miles Morales’ evolved bio-electric skills.',
            [
                'Spider-Man 2 Console Bundle will be available to ship now, therefore your payment method will be charged at checkout.',
                'Due to high demand, there is a limit of 1 console bundle per household.',
                'This console has a disc drive.',
                'Game requires download before it can be played. Voucher code supplied within box, redeemable on PlayStation™Store.',
                'Only 1 DualSense included.',
                '1 Player.'
            ],
            [
                {
                    title: 'PlayStation®5 Console Features',
                    descript: [
                        'Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation® console can do. ',
                        'Stunning Games - Marvel at incredible graphics and experience new PS5™ features. Play a back catalog of supported PS4™ games. ',
                        'Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio*** technology.'
                    ]
                },
                {
                    title: 'Game Features',
                    descript: [
                        'Experience an original Marvel’s Spider-Man single player story. Switch between two playable Spider-Men, Peter Parker and Miles Morales, while exploring Marvel’s New York. Wield Peter Parker’s new symbiote abilities and Miles Morales’ explosive bio-electric venom powers. Fight a rogues’ gallery of Marvel’s Super Villains – including Kraven the Hunter, Lizard, an original take on Venom, and many more!',
                        'Explore the expanded open world of Marvel’s New York, featuring new environments and locations. Discover a range of new and in-depth accessibility features for players of different abilities. Feel the true power of Spider-Man in your hands with deeply immersive adaptive triggers and haptic feedback features.'
                    ]
                }
            ],
            [
                'PlayStation®5 console',
                'DualSense™ wireless controller',
                'Base',
                'HDMI® cable',
                'AC power cord',
                'USB cable',
                'Printed materials',
                'Marvel’s Spider-Man 2 full game voucher*',
                'ASTRO’s PLAYROOM (Pre-installed game)**'
            ],
            "599.99"
        ),
        ['PlayStation®5 Console – Call of Duty® Modern Warfare® III Bundle (model group – slim)']: new consolesOrAccessTemplateWithoutColors(
            'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-CODMWIII-Hero-1-EN-US?$Background_Large$',
            [
                'https://media.direct.playstation.com/is/image/sierialto/PS5Slim-Model-Group-Hero?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-CODMWIII-Hero-2-EN-US?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/CODMWIII-Hero-4?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/CODMWIII-Hero-5?$Background_Large$'
            ],
            '10 November, 2023',
            'Squad up with the PlayStation®5 Console – Call of Duty®: Modern Warfare® III Bundle and fight alongside Task Force 141 like never before on PS5®.*\n' +
            '\n' +
            'Enjoy innovations including 4K and HDR visuals**, DualSense™ wireless controller adaptive triggers and haptic feedback, Tempest 3D AudioTech when using stereo headphones (analogue or USB) and more.',
            [
                'This console has a disc drive.',
                'Game requires download before it can be played. Voucher code supplied within box, redeemable on PlayStation™Store.',
                'Only 1 DualSense included.',
                '1 - 2 players.',
                'Supports up to 64 players online with PS Plus.',
                'Paid for PlayStation®Plus subscription required for online multiplayer. Sold separately. See Additional Terms for details.',
                'Vertical stand sold separately.',
                'PS5 consoles will ship separately.',
                'A signature will be required upon delivery for this product.',
            ],
            [
                {
                    title: 'Fight like never before on PS5',
                    descript: [
                        'ADAPT OR DIE IN A FIGHT AGAINST THE ULTIMATE THREAT\n' +
                        '\n' +
                        '\n' +
                        'In the direct sequel to the record-breaking Call of Duty®: Modern Warfare® II, Captain Price and Task Force 141 face off against the ultimate threat. The ultranationalist war criminal Vladimir Makarov is extending his grasp across the world causing Task Force 141 to fight like never before.\n' +
                        '\n' +
                        'IT’S TIME TO SETTLE OLD SCORES AND START NEW ONES\n' +
                        '\n' +
                        '\n' +
                        'Modern Warfare® III celebrates the 20th anniversary of Call of Duty® with one of the greatest collections of Multiplayer maps ever assembled – both fan favorites and all new ones. All 16 launch maps from the original Modern Warfare® 2 (2009) have been modernized with new modes and gameplay features and will be available at launch to get everyone started, while over 12 all-new core 6v6 maps will fuel post-launch live seasons.\n' +
                        '\n' +
                        'ALL NEW OPEN WORLD ZOMBIES\n' +
                        '\n' +
                        '\n' +
                        'For the first time, team up with other squads to survive and fight massive hordes of the undead in the largest Call of Duty® Zombies map ever. Modern Warfare® Zombies (MWZ) tells a new Treyarch Zombies story with missions, core Zombies features, and secrets to discover.'
                    ]
                },
                {
                    title: 'Key Features',
                    descript: [
                        'With PS5 you can enjoy:\n' +
                        '\n' +
                        'Adaptive Triggers\n' +
                        'Enjoy a greater level of immersion as each in-game weapon feels unique in your hands. Adaptive Triggers vary the level of pressure and tension as you interact with the variety of weapons in-game.\n' +
                        '\n' +
                        'Haptic Feedback\n' +
                        'Get closer to the action with the DualSense™ wireless controller’s haptic feedback. Feel the impact of every blast and move in-game.\n' +
                        '\n' +
                        'Faster Loading\n' +
                        'Get into the action almost instantly with the PlayStation 5 console’s ultra-high-speed SSD and faster load times.\n' +
                        '\n' +
                        '3D Audio***\n' +
                        'Your surroundings come to life around you with 3D Audio, from approaching footsteps to enemy gunfire.'
                    ]
                }
            ],
            [
                'PlayStation®5 console',
                'DualSense™ wireless controller',
                '1TB SSD',
                '2 Horizontal stand feet',
                'HDMI® cable',
                'AC power cord',
                'USB cable',
                'Printed materials',
                'Call of Duty®: Modern Warfare® III and Lockpick Operator Pack voucher',
                'ASTRO\'s PLAYROOM (Pre-installed game)'
            ],
            "599.99",
        ),
        ['PlayStation®5 Console (model group - slim)']: new consolesOrAccessTemplateWithoutColors(
            'https://media.direct.playstation.com/is/image/sierialto/PS5-Disc-Slim-New-Hero-1?$Background_Large$',
            [
                'https://media.direct.playstation.com/is/image/sierialto/PS5-Hero-1?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/ps5-slim-model-hero-new?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/PS5-Hero-3?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/PS5-SLIM-Hero-Box-US-V2?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/PS5-SLIM-Hero-Box-and-Console-US-V2?$Background_Large$'
            ],
            '20 November, 2023',
            'The PS5® console* unleashes new gaming possibilities that you never anticipated.\n' +
            '\n' +
            'Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio**, and an all-new generation of incredible PlayStation® games.',
            [
                'Due to high demand, there is a limit of 1 console per order.',
                'Only 1 DualSense included.',
                'Vertical stand sold separately.',
                'Paid for PlayStation®Plus subscription required for online multiplayer. Sold separately. See Additional Terms for details.',
                'PS5 consoles will ship separately.',
                'A signature will be required upon delivery for this product.',
            ],
            [
                {
                    title: 'Key Features',
                    descript: [
                        'Slim Design\n' +
                        'With PS5®, players get powerful gaming technology packed inside a sleek and compact console design.\n' +
                        '\n' +
                        '1TB of Storage\n' +
                        'Keep your favorite games ready and waiting for you to jump in and play with 1TB of SSD storage built in.***\n' +
                        '\n' +
                        'Ultra-High Speed SSD\n' +
                        'Maximize your play sessions with near instant load times for installed PS5® games.\n' +
                        '\n' +
                        'Integrated I/O\n' +
                        'The custom integration of the PS5® console\'s systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible.' +
                        'Ray Tracing\n' +
                        'Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5® games.\n' +
                        '\n' +
                        '4K-TV Gaming\n' +
                        'Play your favorite PS5® games on your stunning 4K TV.\n' +
                        '\n' +
                        'Up to 120fps with 120Hz output\n' +
                        'Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays.\n' +
                        '\n' +
                        'HDR Technology\n' +
                        'With an HDR TV, supported PS5® games display an unbelievably vibrant and lifelike range of colors.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        'Tempest 3D AudioTech\n' +
                        'Immerse yourself in soundscapes where it feels as if the sound comes from every direction. Your surroundings truly come alive with Tempest 3D AudioTech** in supported games.' +
                        'Haptic Feedback\n' +
                        'Experience haptic feedback via the DualSense® wireless controller in select PS5® titles and feel the effects and impact of your in-game actions through dynamic sensory feedback.\n' +
                        '\n' +
                        'Adaptive Triggers\n' +
                        'Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5® games.\n' +
                        '\n' +
                        'Includes ASTRO’S Playroom\n' +
                        'Explore four worlds, each one showcasing innovative gameplay using the versatile features of the DualSense® wireless controller, in this game included for all PS5® console users.\n' +
                        '\n' +
                        'Backwards Compatibility & Game Boost\n' +
                        'The PS5® console can play over 4,000 PS4® games. With the Game Boost feature, you can even enjoy faster and smoother frame rates in some of the PS4® console’s greatest games.'
                    ]
                },
            ],
            [
                'PlayStation®5 console',
                'DualSense™ wireless controller',
                '1TB SSD',
                '2 Horizontal stand feet',
                'HDMI® cable',
                'AC power cord',
                'USB cable',
                'Printed materials',
                'ASTRO\'s PLAYROOM (Pre-installed game)'
            ],
            "499.99",
        ),
        ['PlayStation®5 Digital Edition Console']: new consolesOrAccessTemplateWithoutColors(
            'https://media.direct.playstation.com/is/image/sierialto/PS5-digital-edition-front-with-dualsense?$Background_Large$',
            [
                'https://media.direct.playstation.com/is/image/sierialto/PS5-digital-edition-angle-shot?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/PS5-digital-edition-laying-down-flat?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/PS5-digital-edition-box-shot?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/playstation-5-digital-box-contents?$Background_Large$',
            ],
            '19 November, 2020',
            'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D audio, and an all-new generation of incredible PlayStation® games.\n' +
            '\n' +
            'PS5™ Digital Edition is an all-digital version of the PS5™ console with no disc drive. Sign into your account for PlayStation™Network and go to PlayStation™Store to buy and download games.',
            [
                '*DISC-FREE CONSOLE - Internet connection and an account for PlayStation™Network required',
                'Select PS4 games may be eligible for upgrade to digital PS5 versions. Only digital copies of eligible PS4 games can be upgraded via this disc-free console.',
                'Broadband Internet access, account for PlayStation™Network and PlayStation®Plus membership (sold separately) required to access online multiplayer and some features.',
                'PS5 consoles will ship separately.',
                'A signature will be required upon delivery for this product.',
            ],
            [
                {
                    title: 'Key Features',
                    descript: [
                        'Ultra-High Speed SSD - Maximize your play sessions with near instant load times for installed PS5™ games. \n' +
                        '4K-TV Gaming - Play your favorite PS5™ games on your stunning 4K TV.\n' +
                        'Ray Tracing - Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5™ games.\n' +
                        'Haptic Feedback - Experience haptic feedback via the DualSense wireless controller in select PS5 titles and feel the effects and impact of your in-game actions through dynamic sensory feedback.\n' +
                        'Adaptive Triggers - Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5 games.\n' +
                        'Tempest 3D AudioTech - Immerse yourself in soundscapes where it feels as if the sound comes from every direction. Through your compatible headphones your surroundings truly come alive with Tempest 3D AudioTech* in supported games.'
                    ]
                },
            ],
            [
                'PlayStation®5 Digital Edition Console',
                'DualSense™ Wireless Controller',
                'DualSense™ USB charging cable',
                'ASTROs PLAYROOM (Pre-installed game)',
                'Base',
                'HDMI® cable',
                'AC power cord',
                'Printed materials'
            ],
            "399.99",
        ),
        ['PlayStation®5 Digital Edition Console (model group - slim)']: new consolesOrAccessTemplateWithoutColors(
            'https://media.direct.playstation.com/is/image/sierialto/PS5-Digital-Slim-New-Hero-1-v2?$Background_Large$',
            [
                'https://media.direct.playstation.com/is/image/sierialto/PS5-Digital-Hero1?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/PS5-Digital-Hero2?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/PS5-Digital-Hero3?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/PS5-Digital-Slim-Hero-Box-US-V2?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/PS5-Digital-Slim-Hero-Box-and-console-US-V2?$Background_Large$'
            ],
            '19 November, 2023',
            'The PS5® Digital Edition* unleashes new gaming possibilities that you never anticipated.\n' +
            '\n' +
            'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio** and an all-new generation of incredible PlayStation® games.\n' +
            '\n' +
            'PS5 Digital Edition is an all-digital version of the PS5 console with no disc drive. Sign into your account for PlayStation Network and go to PlayStation®Store to buy and download games',
            [
                'Due to high demand, there is a limit of 1 console per order.',
                'Vertical stand sold separately.',
                '*DISC-FREE CONSOLE - Internet connection and an account for PlayStation™Network required',
                'Only 1 DualSense included.',
                'PS5 consoles will ship separately.',
                'A signature will be required upon delivery for this product.',
            ],
            [
                {
                    title: 'Key Features',
                    descript: [
                        'Slim Design\n' +
                        'With PS5® Digital Edition, players get powerful gaming technology packed inside a sleek and compact console design.\n' +
                        '\n' +
                        '1TB of Storage\n' +
                        'Keep your favorite games ready and waiting for you to jump in and play with 1TB of SSD storage built in.****\n' +
                        '\n' +
                        'Ultra-High Speed SSD\n' +
                        'Maximize your play sessions with near instant load times for installed PS5® games.\n' +
                        '\n' +
                        'Integrated I/O\n' +
                        'The custom integration of the PS5® console\'s systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible.' +
                        'Ray Tracing\n' +
                        'Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5® games.\n' +
                        '\n' +
                        '4K-TV Gaming\n' +
                        'Play your favorite PS5® games on your stunning 4K TV.\n' +
                        '\n' +
                        'Up to 120fps with 120Hz output\n' +
                        'Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays.\n' +
                        '\n' +
                        'HDR Technology\n' +
                        'With an HDR TV, supported PS5® games display an unbelievably vibrant and lifelike range of colors.\n' +
                        '\n' +
                        'Tempest 3D AudioTech\n' +
                        'Immerse yourself in soundscapes where it feels as if the sound comes from every direction. Your surroundings truly come alive with Tempest 3D AudioTech*** in supported games.' +
                        'Haptic Feedback\n' +
                        'Experience haptic feedback via the DualSense® wireless controller in select PS5® titles and feel the effects and impact of your in-game actions through dynamic sensory feedback.\n' +
                        '\n' +
                        'Adaptive Triggers\n' +
                        'Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5® games.\n' +
                        '\n' +
                        'Includes ASTRO’S Playroom\n' +
                        'Explore four worlds, each one showcasing innovative gameplay using the versatile features of the DualSense® wireless controller, in this game included for all PS5® console users.\n' +
                        '\n' +
                        'Backwards Compatibility & Game Boost\n' +
                        'The PS5® console can play over 4,000 PS4® games. With the Game Boost feature, you can even enjoy faster and smoother frame rates in some of the PS4® console’s greatest games.' +
                        'Apple Music\n' +
                        '\n' +
                        'Get up to six months of Apple Music at no extra cost with your PS5® console and play millions of songs and thousands of playlists, ad-free'
                    ]
                },
            ],
            [
                'PlayStation®5 Digital Edition',
                'DualSense™ Wireless Controller',
                '1TB SSD',
                'DualSense™ USB charging cable',
                'ASTROs PLAYROOM (Pre-installed game)',
                'HDMI® cable',
                'AC power cord',
                'Printed materials'
            ],
            "449.99",
        ),
        ['PlayStation®4 Console – Call of Duty® Modern Warfare II Bundle']: {
            mainCover: 'https://media.direct.playstation.com/is/image/sierialto/PS4-COD-MW2-bundle-box-front?$Hero_Desktop$',
            descriptionImgs: [
                'https://media.direct.playstation.com/is/image/sierialto/PS4-COD-MW2-slim-console-standing-with-dualshock4-hero-2?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/CoD%20MW2%20Screen%202?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/CoD%20MW2%20Screen%209?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/CoD%20MW2%20Screen%206?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/CoD%20MW2%20Screen%207?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/CoD%20MW2%20Screen%205?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/CoD%20MW2%20Screen%203?$Background_Large$',
                'https://media.direct.playstation.com/is/image/sierialto/CoD%20MW2%20Screen%204?$Background_Large$'
            ],
            realiseDate: '16 September, 2016',
            previewText: 'Fight alongside the iconic operators of Task Force 141 with the PlayStation®4 Console – Call of Duty®: Modern Warfare® II Bundle.',
            terms: [
                'Broadband Internet access, account for PlayStation™Network and PlayStation®Plus membership (sold separately) required to access online multiplayer and some features.',
                'Includes voucher code to download Call of Duty® Modern Warfare® II game. Account for PlayStation™Network and broadband Internet required to download.',
                'Vertical Standard sold separately.',
                'A signature will be required upon delivery for this product.'
            ],
            price: '239.00',
        }

    };
    const accessoriesList = {
        ['DualSense™ Wireless Controller']: new consolesOrAccessTemplateWithColors(
            {
                'White': [
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-white-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-accessory-top-left?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-accessory-top?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-accessory-bottom?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-accessory-package?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-Controller-White?$Background_Large$',
                ],
                'Midnight Black': [
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-black-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-black-accessory-top-left?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-black-accessory-top?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-black-accessory-bottom?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-black-accessory-package?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-Controller-MidnightBlack?$Background_Large$',
                ],
                'LeBron James Limited Edition': [
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-LebronJames-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-LebronJames-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-LebronJames-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-LebronJames-Hero-4?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-LebronJames-Hero-5?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-LebronJames-Hero-6-US?$Background_Large$',
                ],
                'Sterling Silver': [
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-SterlingSilver-Controller-Hero-1-NEW?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-SterlingSilver-Controller-Hero-2-NEW?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-SterlingSilver-Controller-Hero-3-NEW?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-SterlingSilver-Controller-Hero-4-NEW?$Background_Large$',
                ],
                'Volcanic Red': [
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-VolcanicRed-Hero-1-NEW?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-VolcanicRed-Controller-Hero-2--NEW?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-VolcanicRed-Controller-Hero-3-new?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-VolcanicRed-Controller-Hero-4--NEW?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-VolcanicRed-Controller-Hero-5?$Background_Large$',
                ],
                'Cobalt Blue': [
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-CobaltBlue-Hero-1-new?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-CobaltBlue-Controller-Hero-2-new?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-CobaltBlue-Controller-Hero-3-NEW?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-CobaltBlue-Controller-Hero-4-new?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-CobaltBlue-Controller-Hero-5?$Background_Large$',
                ],
                'Cosmic Red': [
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-red-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-red-accessory-top-left?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-red-accessory-top?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-red-accessory-package?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-Controller-CosmicRed?$Background_Large$',
                ],
                'Starlight Blue': [
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-starlight-blue-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-starlight-blue-accessory-front-right?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-starlight-blue-accessory-top-left?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-starlight-blue-accessory-top?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-starlight-blue-accessory-package?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-Controller-StarlightBlue?$Background_Large$'
                ],
                'Nova Pink': [
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-nova-pink-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-nova-pink-accessory-front-right?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-nova-pink-accessory-top-left?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-nova-pink-accessory-top?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-nova-pink-accessory-package?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-Controller-NovaPink?$Background_Large$'
                ],
                'Galactic Purple': [
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-galactic-purple-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-galactic-purple-accessory-front-right?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-galactic-purple-accessory-top-left?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-galactic-purple-accessory-top?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-galactic-purple-accessory-package?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSense-Controller-GalacticPurple?$Background_Large$'
                ],
            },
            '19 November, 2020',
            'Energize all your PlayStation®5 gaming expeditions with the DualSense™ <<COLOR HERE>> wireless controller. Discover a deeper, highly immersive gaming experience* that brings all the action bursting to life in the palms of your hands.',
            ['Cable not included. To connect or charge the controller, use the USB cable supplied with the PS5™ console.'],
            [
                {
                    title: 'Heighten Your Senses™',
                    descript: [
                        'Bring gaming worlds to life',
                        'Feel your in-game actions and environment simulated through haptic feedback.**',
                        'Experience varying force and tension at your fingertips with adaptive triggers.**',
                        'Find your voice, share your passion',
                        'Chat online through the built-in microphone.***',
                        'Connect a headset directly via the 3.5mm jack.',
                        'Switch voice capture on and off using the dedicated mute button.',
                        'Record and broadcast your epic gaming moments with the create button.**',
                        'A gaming icon in your hands',
                        'Enjoy a comfortable, evolved design with an iconic layout and enhanced sticks.',
                        'Charge and play with a built-in battery and USB Type-C****.',
                        'Intuitively interact with select games using the integrated motion sensor.',
                        'Hear higher-fidelity* sound effects through the built-in speaker in supported games.'
                    ]
                },
                {
                    title: 'Raise your game on Apple devices',
                    descript: [
                        'Pair the controller with your compatible iPad, iPhone, Mac or Apple TV***** via Bluetooth®.',
                        'Play thousands of controller-supported games, including those on Apple Arcade.',
                        'Stream compatible games from your PS4™ or PS5™ console to your iPad, iPhone, or Mac and play using the PS Remote Play App******.',
                        'Bring intuitive control to compatible games with touch pad and motion sensor support.',
                    ]
                },
                {
                    title: 'Great local multiplayer games built for PS5',
                    descript: [
                        'Grab an extra DualSense wireless controller for PS5 and play with (or challenge) your friends in an collection of exhilarating multiplayer games.',
                        'Learn how the DualSense wireless controller brings these experiences to life here.',
                    ]
                }
            ],
            '74.99'
        ),
        ['DUALSHOCK®4 Wireless Controller for PS4™']: new consolesOrAccessTemplateWithColors(
            {
                'Jet Black': [
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-black-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-black-accessory-front-right?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-black-accessory-top-left?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-black-accessory-top?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-black-accessory-right?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-black-accessory-back?$Background_Large$'

                ],
                'Midnight Blue': [
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-blue-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-blue-accessory-front-right?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-blue-accessory-top-left?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-blue-accessory-top?$Background_Large$',

                ],
                'Magma Red': [
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-red-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-red-accessory-front-right?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-red-accessory-top-left?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-red-accessory-top?$Background_Large$',

                ],
                'Gold': [
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-gold-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-gold-accessory-front-right?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-gold-accessory-top-left?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-gold-accessory-top?$Background_Large$',

                ],
                'Green Camouflage': [
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-green-camo-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-green-camo-accessory-front-right?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-green-camo-accessory-top-left?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-green-camo-accessory-top?$Background_Large$',

                ]
            },
            '16 November, 2016',
            'Take charge of every moment with the sleek <<COLOR HERE>> DUALSHOCK®4 wireless controller for PS4™ consoles.\n' +
            '\n' +
            'Buy the iconic, official PlayStation®4 controller – designed for precision control and comfort, and available in a range of stylish colors, including classic <<COLOR HERE>>. \n' +
            '\n' +
            'With an extra controller you can style your set-up and share the fun with friends in a wide range of couch co-op games.',
            ['A micro USB cable is required to connect or charge the controller (sold separately).'],
            [
                {
                    title: 'DUALSHOCK®4 Key Features',
                    descript: [
                        'Enjoy comfortable wireless control with textured grips, precision sticks and a built-in rechargeable battery.',
                        'Interact with your games in different intuitive ways using the touch pad, motion sensor, integrated light bar and built-in speaker.*',
                        'Use the SHARE button to upload your gameplay videos and screenshots, or livestream your games to the world.**',

                    ]
                },
            ],
            '49.99'
        ),
        ['PS5™ Console Covers']: new consolesOrAccessTemplateWithColors(
            {
                'Midnight Black': [
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-MidnightBlack-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-MidnightBlack-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/console-cover-ps5-midnight-black-flat?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/console-cover-and-dualsense-controller-midnight-black-hero-4?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Console-Covers-Midnight-Black-Box?$Background_Large$',
                ],
                'LeBron James Limited Edition': [
                    'https://media.direct.playstation.com/is/image/sierialto/consoleCover-Disc-LeBronJames-Hero1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/consoleCover-disc-LeBronJames-Hero2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/consoleCover-Disc-LeBronJames-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/consoleCover-Disc-LeBronJames-Hero-4?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/ConsoleCover-Disc-LeBronJames-Hero-5-US?$Background_Large$',
                ],
                'Sterling Silver': [
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-SterlingSilver-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-SterlingSilver-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-SterlingSilver-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-SterlingSilver-Hero-4?$Background_Large$',
                ],
                'Volcanic Red': [
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-VolcanicRed-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-VolcanicRed-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-VolcanicRed-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-VolcanicRed-Hero-4?$Background_Large$',
                ],
                'Cobalt Blue': [
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-CobaltBlue-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-CobaltBlue-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-CobaltBlue-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-CobaltBlue-Hero-4?$Background_Large$',
                ],
                'Cosmic Red': [
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-CosmicRed-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-CosmicRed-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-CosmicRed-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-CosmicRed-Hero-4?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Console-Covers-Cosmic-Red-Box?$Background_Large$'
                ],
                'Starlight Blue': [
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-StarlightBlue-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-StarlightBlue-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-StarlightBlue-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-StarlightBlue-Hero-4?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Console-Covers-Starlight-Blue-Box?$Background_Large$'
                ],
                'Nova Pink': [
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-NovaPink-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-NovaPink-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-NovaPink-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-NovaPink-Hero-4?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Console-Covers-Nova-Pink-Box?$Background_Large$'
                ],
                'Galactic Purple': [
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-GalacticPurple-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-GalacticPurple-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-GalacticPurple-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-GalacticPurple-Hero-4?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Console-Covers-Galactic-Purple-Box?$Background_Large$'
                ],
                'Gray Camouflage': [
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-CAMO-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-Camo-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/console-cover-ps5-gray-camouflage-flat?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS5-Console-Covers-Camo-Hero-5?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Console-Covers-Grey-Camo-Box?$Background_Large$'
                ],
            },
            '14 October, 2022',
            'Explore exciting gaming frontiers with new covers for your PlayStation®5 console.* Pair them with a matching DualSense™ wireless controller to complete the look.**',
            [
                'These covers are compatible with PS5 consoles with a disc drive only.',
                'PS5 console, console covers, and DualSense wireless controller sold separately.'
            ],
            [
                {
                    title: 'PS5 Console Covers Key Features',
                    descript: [
                        'Made by PlayStation: The only console covers made by PlayStation for PS5 that are designed to deliver the quality level you know and trust.',
                        'Easy to Use: Just remove your white PlayStation 5 console covers and click your new covers into place.',
                        'Complete the Look: Pair your new PlayStation 5 console covers with a matching DualSense™ wireless controller color to create a stunningly vivid set.**'
                    ]
                }
            ],
            '49.99'
        ),
        ['PS5™ Console Covers (model group - slim)']: new consolesOrAccessTemplateWithColors(
            {
                'Midnight Black': [
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-PS5-Console-Covers-Black-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-Console-Covers-Black-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-Console-Covers-Black-Hero-3-US?$Background_Large$'
                ],
                'Sterling Silver': [
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-Console-Covers-Silver-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-Console-Cover-Silver-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-Console-Cover-Silver-Hero-3-US?$Background_Large$',
                ],
                'Volcanic Red': [
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-Console-Cover-VolcanicRed-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-Console-Cover-VolcanicRed-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-Console-Cover-VolcanicRed-Hero-3-US?$Background_Large$',
                ],
                'Cobalt Blue': [
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-Console-Covers-Cobaltblue-Hero-1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-Console-Covers-Cobaltblue-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Slim-Console-Covers-Cobaltblue-Hero-3-US?$Background_Large$',
                ]
            },
            '14 October, 2023',
            'Explore exciting gaming frontiers with new covers for your PlayStation®5 console.* Pair them with a matching DualSense™ wireless controller to complete the look.**Restyle your gaming setup with the alluring metallic Cobalt Blue PS5® console cover*. Easy to install onto PS5 consoles, the covers are inspired by the powerful hues found in the depths of our planet and then elevated with a metallic finish for a touch of sophistication. Complete the look with a matching DualSense™ wireless controller** or contrast it with the fiery Volcanic Red or sleek Sterling Silver.',
            [
                'These covers are compatible with PS5 consoles with a disc drive only.',
                'These covers are compatible with PS5 consoles (model group - slim)* and PlayStation®5 Digital Edition Console (model group - slim)*',
                'PS5 console, vertical stand, console covers, and DualSense wireless controller sold separately.'
            ],
            [
                {
                    title: 'PS5 Console Covers Key Features',
                    descript: [
                       'Made by PlayStation: The only console covers made by PlayStation for PS5 that are designed to deliver the quality level you know and trust.\n' +
                       '\n' +
                       ' \n' +
                       '\n' +
                       'Easy to Use: Just remove your white PlayStation 5 console covers and click your new covers into place.\n' +
                       '\n' +
                       ' \n' +
                       '\n' +
                       'Complete the Look: Pair your new PlayStation 5 console covers with a matching DualSense™ wireless controller color to create a stunningly vivid set.**'
                    ]
                }
            ],
            '59.99'
        ),
        ['WD BLACK™ SN850P NVMe™ SSD for PS5™ consoles']: new consolesOrAccessTemplateWithColors(
            {
                '1TB': [
                    'https://media.direct.playstation.com/is/image/sierialto/WD-2TB-Storage-Hero1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-2TB-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-2TB-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-StoraGE-1TB-Hero-4?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-4TB-Minor1?$Minor_Section_Desktop$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-4TB-Minor2?$Minor_Section_Desktop$'
                ],
                '2TB': [
                    'https://media.direct.playstation.com/is/image/sierialto/WD-2TB-Storage-Hero1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-2TB-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-2TB-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-2TB-Hero-4?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-4TB-Minor1?$Minor_Section_Desktop$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-4TB-Minor2?$Minor_Section_Desktop$'
                ],
                '4TB': [
                    'https://media.direct.playstation.com/is/image/sierialto/WD-2TB-Storage-Hero1?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-2TB-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-2TB-Hero-3?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-4TB-Hero-4?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-4TB-Minor1?$Minor_Section_Desktop$',
                    'https://media.direct.playstation.com/is/image/sierialto/WD-Storage-4TB-Minor2?$Minor_Section_Desktop$'
                ],
            },
            '7 June, 2023',
            'Expand your PS5™ storage and Play On.\n' +
            '\n' +
            'Officially licensed for the PlayStation®5 console, the WD_BLACK™ SN850P NVMe™ SSD for PS5™ consoles allows you to store more titles with worry free installation. Instantly expand up to 4TB of storage to hold more of your favorite games. With an optimized heatsink built specifically for the PS5™ M.2 slot, you won’t need to worry about compatibility.',
            [
                'Compatible with PlayStation 5 Consoles.',
            ],
            [
                {
                    title: '4TB WD_BLACK™ SN850P NVMe™ SSD for PS5™ consoles key features',
                    descript: [
                        'Officially Licensed for Your PS5™ Console\n' +
                        'Store and play more titles on the drive that’s officially tested and licensed for your PS5™ console so you can keep gaming with confidence.',
                        'Exclusive Heatsink Design\n' +
                        'With an exclusive heatsink design featuring the PlayStation® logo and optimized for the PlayStation®5 console’s M.2 slot, installation and setup is worry-free.',
                        'Store More, Play More, Fast\n' +
                        'With up to 4TB* capacity, your PlayStation®5 console has the additional space to store up to 100 games*** so you still have room for the next big title.',
                        'Get the Ultimate Gaming Edge over your Competition\n' +
                        'Take advantage of irrational PCIe® Gen4 NVMe™ speeds up to 7,300MB/s read and 6,600MB/s** write for a responsive and seamless gaming experience.',
                        'Never Stop Playing\n' +
                        'Experience uninterrupted gameplay with a heatsink that keeps your WD_BLACK™ drive running cool and reliability that you can only get from a brand you trust',
                        'No Compromises\n' +
                        'Play directly from the drive and eliminate the need to transfer or delete games from your console with tested and approved storage for your PS5™ console.'
                    ]
                }
            ],
            ['139.99', '209.99', '389.99'],
        ),
        ['PULSE Elite™ wireless headset - PS5']:
            new consolesOrAccessTemplateWithoutColors(
                'https://media.direct.playstation.com/is/image/sierialto/Elite-Hero-1-new?$Background_Large$',
                [
                    'https://media.direct.playstation.com/is/image/sierialto/Elite-Hero-2-new?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Elite-Hero-3-new?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Elite-Hero-4-new?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PulseElite-Hero-packshot-us-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PulseElite-Hero-packshot-us?$Background_Large$'
                ],
                'February 21, 2024',
                'Enter a new era in gaming audio with the PULSE Elite™ wireless headset. Enjoy extraordinary lifelike sound in your favorite games with planar magnetic drivers, and hear every detail with a lossless and lightning-fast PlayStation Link™ wireless connection.\n' +
                '\n' +
                'Let your squad hear you loud and clear through a fully retractable microphone equipped with AI-enhanced noise rejection. Plus, with up to 30 hours of battery life and quick charging, you can stick by your teammates through extended gaming sessions.',
                [
                    'Due to high demand, this product is limited to 1 per order.',
                    'Compatible with PlayStation®5 console, PlayStation Portal™ remote player, PC, Mac® and mobile devices.',
                ],
                [
                    {
                        title: 'Next Generation Gaming Audio',
                        descript: [
                            'How Games Were Made to Sound™',
                            'Enjoy extraordinary lifelike sound in your favorite games.',
                            'Planar Magnetic Drivers - Studio-inspired drivers reproduce soundscapes with ultra-low distortion to deliver rich details and deep clear bass so you can hear exactly what the game developers intended.',
                            'PlayStation Link™ Technology - Enjoy a lossless and lightning-fast ultra-low latency wireless connection to your PS5® console, PC, Mac® and PlayStation Portal™ remote player.',
                            'AI-enhanced Noise Rejection - Be heard loud and clear with microphone noise-rejection technology powered by artificial intelligence.'
                        ]
                    },
                    {
                        title: 'Multi-Device Connectivity',
                        descript: [
                            'Go where adventure takes you with the ability to wirelessly connect to a range of devices.',
                            'Bluetooth® - Go mobile by directly connecting your earbuds to a phone or tablet.',
                            'Dual Device Connectivity - Listen to audio from a PlayStation Link™ and Bluetooth® device simultaneously to stay in play as you answer calls or enjoy music from a mobile device.'
                        ]
                    },
                    {
                        title: 'Command and Control',
                        descript: [
                            'Lead your squad to victory with crystal-clear voice capture and easy-access controls.',
                            'Retractable Microphone - Fully retract the integrated mic when not in use.',
                            'Intuitive Controls - Keep your head in the game with easy-access volume and mic mute buttons.'
                        ]
                    },
                    {
                        title: 'Always Be Ready for Great Play',
                        descript: [
                            'Enjoy epic gaming sessions with up to 30 hours of battery life and quick charging.',
                            'Long Battery - Stay in play with up to 30 hours of battery life.',
                            'Quick Charging - Get back into the action with up to 2 hours of battery life from a 10 minute charge.',
                            'Charging Hanger - Charge and display your headset with the included hanger* so it’s ready whenever you are.',
                            'Play in Comfort - Refined plush ear cups enable a wide range of motion while the headband strap suspension keeps the headset feeling light.',
                            'PlayStation Portal™ Remote Player Ready - Directly connect to the remote player with PlayStation Link™ technology to enjoy lifelike, lightning-fast audio wherever you have Wi-Fi** in your house.'
                        ]
                    }
                ],
                [
                    'PULSE Elite™ wireless headset',
                    'PlayStation Link™ USB adapter',
                    'PULSE Elite™ charging hanger',
                    'Mounting plate*',
                    'USB cable',
                    'Printed materials',
                ],
                '149.99'
            ),
        ['PULSE Explore™ wireless earbuds - PS5']:
            new consolesOrAccessTemplateWithoutColors(
                'https://media.direct.playstation.com/is/image/sierialto/Explore-Hero-1-new?$Background_Large$',
                [
                    'https://media.direct.playstation.com/is/image/sierialto/Explore-Hero-2-new?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Explore-Hero-3-new?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Explore-Hero-4-new?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Explore-Hero-5-new?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Explore-Hero-packshot-2-US?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Explore-Hero-packshot-us?$Background_Large$'
                ],
                'December 6, 2023',
                'Not in stock? We are regularly restocking this item on site, please check back later.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Experience a new era in gaming audio at home and on the go with the PULSE Explore™ wireless earbuds. Enjoy extraordinary lifelike sound in your favorite games with planar magnetic drivers, and hear every detail with a lossless and lightning-fast PlayStation Link™ wireless connection.\n' +
                '\n' +
                'Ensure friends hear you loud and clear through two hidden microphones equipped with AI-enhanced noise rejection. Plus, with up to 5 hours of battery life from the earbuds and up to 10 more via the charging case, you can take the PULSE Explore wireless earbuds with you on your adventures.',
                [
                    'Due to high demand, this product is limited to 1 per order.',
                    'Compatible with PlayStation®5 console, PlayStation Portal™ remote player, PC, Mac® and mobile devices.',
                ],
                [
                    {
                        title: 'Next Generation Gaming Audio',
                        descript: [
                            'How Games Were Made to Sound™',
                            'Enjoy extraordinary lifelike sound in your favorite games.',
                            'Planar Magnetic Drivers - Studio-inspired drivers reproduce soundscapes with ultra-low distortion to deliver rich details and deep clear bass so you can hear exactly what the game developers intended.',
                            'PlayStation Link™ Technology - Enjoy a lossless and lightning-fast ultra-low latency wireless connection to your PS5® console, PC, Mac® and PlayStation Portal™ remote player.',
                            'AI-enhanced Noise Rejection - Be heard loud and clear with microphone noise-rejection technology powered by artificial intelligence.'
                        ]
                    },
                    {
                        title: 'Multi-Device Connectivity',
                        descript: [
                            'Go where adventure takes you with the ability to wirelessly connect to a range of devices.',
                            'Bluetooth® - Go mobile by directly connecting your earbuds to a phone or tablet.',
                            'Dual Device Connectivity - Listen to audio from a PlayStation Link™ and Bluetooth® device simultaneously to stay in play as you answer calls or enjoy music from a mobile device.'
                        ]
                    },
                    {
                        title: 'Command and Control',
                        descript: [
                            'Lead your squad to victory with crystal-clear voice capture and easy-access controls.',
                            'Integrated Microphones - Take calls and chat with teammates through two hidden mics.',
                            'Intuitive Controls - Keep your head in the game with easy-access volume and mic mute buttons.'
                        ]
                    },
                    {
                        title: 'Built for Adventure',
                        descript: [
                            'Enjoy lifelike sound wherever you go with a portable design and charging case.',
                            'Portable Form Factor - Go wherever play takes you with a lightweight, comfortable design packed full of cutting-edge features.',
                            'Built-in Battery and Charging Case - Stay in play with up to 5 hours of battery life and up to an additional 10 hours via the included charging case.',
                            'Multiple Earbud Tips - Choose between three extra pairs of included earbud tips to find the best fit for you.',
                            'PlayStation Portal™ Remote Player Ready - Directly connect to the remote player with PlayStation Link™ technology to enjoy lifelike, lightning-fast audio wherever you have Wi-Fi* in your house.'
                        ]
                    }
                ],
                [
                    'PULSE Explore™ wireless earbuds',
                    'PlayStation Link™ USB adapter',
                    'Charging case',
                    '6 Earbud tips',
                    'USB cable',
                    'Printed materials',
                ],
                '199.00'
            ),
        ['PlayStation Link™ USB adapter']:
            new consolesOrAccessTemplateWithoutColors(
                'https://media.direct.playstation.com/is/image/sierialto/LinkAdapter-Hero-v3?$Background_Large$',
                [
                    'https://media.direct.playstation.com/is/image/sierialto/LinkAdapter-Hero-2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Link-Packshot-2-US?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/Link-Packshot-1-US?$Background_Large$'
                ],
                'December 6, 2023',
                'Multiple PlayStation Link™ USB adapters make it easier for players to enjoy a lightning-fast, lossless audio connection on more of their devices.\n' +
                '\n' +
                'Simply pair your PULSE Elite™ wireless headset or PULSE Explore™ wireless earbuds to both USB adapters and then insert one into your PS5® console and the other into your PC or Mac®. Once set up you can effortlessly switch between compatible devices without having to unplug and move the adapters.',
                [
                    'Compatible with PlayStation®5 console, PlayStation Portal™ remote player, PC, Mac® and mobile devices.',
                    'Due to high demand, this product is limited to 1 per order.'
                ],
                [
                    {
                        title: 'PlayStation Link™ USB adapter key features',
                        descript: [
                            'Never Miss a Beat',
                            'Multiple PlayStation Link™ USB adapters make it easier for players to enjoy a lightning-fast, lossless connection on more of their devices.',
                            'Seamless Switching\n' +
                            'Switch between compatible devices with ease.',
                            'Lightning-Fast Speed\n' +
                            'Secure a stable, ultra-low latency connection so your audio keeps up with even the most fast paced on-screen action.',
                            'Lossless Audio\n' +
                            'Thanks to lossless technology, players can enjoy the convenience of a wireless connection without missing a single audible detail. Surround yourself in atmosphere shaping subtle sound effects and pick-up on crucial audio cues that warn you of approaching enemies.',
                            'Simple Setup\n' +
                            'Get gaming by simply inserting the adapter and pairing your headset or earbuds. No need to download any specific PlayStation Link™ software or drivers.'
                        ]
                    }
                ],
                [],
                '24.99'
            ),
        ['Sony 27” INZONE M9 4K HDR 144Hz Gaming Monitor']:
            new consolesOrAccessTemplateWithoutColors(
                'https://media.direct.playstation.com/is/image/sierialto/sony-inzone-m9-4k-monitor-front-inset-logos?$Background_Large$',
                [
                    'https://media.direct.playstation.com/is/image/sierialto/sony-inzone-m9-4k-monitor-angle?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/sony-inzone-m9-4k-monitor-back?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/sony-inzone-m9-4k-monitor-top?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/sony-inzone-m9-4k-monitor-bottom?$Background_Small$',
                    'https://media.direct.playstation.com/is/image/sierialto/sony-inzone-m9-monitor-ps5-h9-setup?$Background_Small$',
                    'https://media.direct.playstation.com/is/image/sierialto/sony-inzone-m9-monitor-pc-layout?$Background_Small$'
                ],
                'Aug 19, 2022',
                'Feel the action with 4K1 HDR visuals, ultra-fast 144Hz refresh rate, and Full Array Local Dimming contrast that makes game worlds come alive with detail and vibrance. Built for extraordinary gaming performance with support for Nvidia® G-SYNC®2 and HDMI 2.1 VRR3 compatibility, the INZONE™ M9 is your path to victory.',
                [
                    'Due to high demand, this product is limited to 1 per order.'
                ],
                [
                    {
                        title: '27" INZONE M9 Gaming Monitor key features',
                        descript: [
                            'Perfect for PlayStation® 5 – Auto HDR Tone Mapping4 and Auto Genre Picture Mode5 creates a fantastic PS5™ console gaming experience.',
                            'See enhanced contrast with more detail in shadows and highlights from precisely controlled Full Array Local Dimming backlighting technology.',
                            'With four times the pixels of Full HD monitors, enjoy crystal-clear detailed images with 4K resolution.1',
                            'Get the split-second advantage that makes all the difference with ultra-fast 144Hz refresh rate.',
                            'Virtually eliminate screen tearing and stuttering with compatibility for Nvidia® G-SYNC®2 and HDMI 2.1 VRR.3',
                            'DisplayHDR™ 600 certification allows you to experience all your content in vivid HDR contrast with high peak brightness of 600 nits.',
                            'With over 95% coverage of DCI-P3 spectrum, discover an extended range of over a billion vibrant colors for breathtaking immersive gaming.',
                            'Less ghosting and blur with 1ms GtG response time ensures you see what’s happening with absolute clarity for immediate reaction.',
                            '\n' +
                            'The unique height and tilt adjustable tripod stand provides total gaming comfort for all your peripherals while optimizing desk space.6',
                            'Variety of inputs – Two HDMI 2.1 ports, DisplayPort™ 1.4, and USB Type-C (DisplayPort Alternate Mode)',
                            'Quickly and easily adjust monitor settings and assign specific picture modes to individual applications and games using the INZONE Hub PC software.7'
                        ]
                    }
                ],
                [
                    'Sony 27” INZONE M9 4K HDR 144Hz gaming monitor',
                    'AC power adapter',
                    'AC power cord',
                    'Color calibration factory report',
                    'INZONE sticker',
                    'Printed materials'
                ],
                '699.99'
            ),
        ['Sony 27” INZONE M3 Full HD HDR 240Hz Gaming Monitor']:
            new consolesOrAccessTemplateWithoutColors(
                'https://media.direct.playstation.com/is/image/sierialto/sony-inzone-m3-hd-monitor-front-inset-logos?$Background_Large$',
                [
                    'https://media.direct.playstation.com/is/image/sierialto/sony-inzone-m3-hd-monitor-angle?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/sony-inzone-m3-hd-monitor-back?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/sony-inzone-m3-hd-monitor-bottom?$Background_Large$',
                ],
                '',
                'React faster with super smooth 240Hz refresh rate and be a step ahead of your competitors. Fill your games with a wide range of rich, vibrant colors with DisplayHDR™ 400 certification and over 99% sRGB color spectrum coverage. With support for Nvidia® G-SYNC®1 and HDMI 2.1 VRR2 compatibility, the INZONE™ M3 is built for next-level gaming.',
                [
                    'A signature will be required upon delivery for this product.'
                ],
                [
                    {
                        title: '27" INZONE M3 Gaming Monitor key features',
                        descript: [
                            'Features for PlayStation® 5 – Exclusive features – Auto HDR Tone Mapping3 and Auto Genre Picture Mode4 – creates a fantastic PS5™ console gaming experience.',
                            '\n' +
                            '240Hz refresh rate – Get the split-second advantage that makes all the difference with lightning-fast refresh rate.',
                            'Nvidia® G-SYNC®1 and HDMI 2.1 VRR2 compatible – Display refresh rate is dynamically adjusted virtually eliminating screen tearing and stuttering for smoother gameplay.',
                            'DisplayHDR™ 400 Certified – Experience all your content in vivid HDR color with accurate contrast and peak brightness of 400 nits.',
                            '\n' +
                            'Over 99% sRGB coverage – Fill your games with a wide range of rich, vibrant colors with more shades of hues for breathtaking immersive gaming.',
                            'IPS display with 1ms GtG response time – Less ghosting and blur ensures you see what’s happening with absolute clarity for immediate reaction.',
                            'Versatile, adjustable design – The unique height and tilt adjustable tripod stand provides total gaming comfort for all your peripherals while optimizing desk space.5',
                            'Variety of inputs – Two HDMI 2.1 ports, DisplayPort™ 1.4, and USB Type-C (DP Alternate Mode)',
                            'PC Software – Quickly and easily adjust monitor settings and assign specific picture modes to individual applications and games using the INZONE Hub PC software.6'
                        ]
                    }
                ],
                [
                    'Sony 27” INZONE M3 Full HD HDR 240Hz gaming monitor',
                    'AC power adapter',
                    'AC power cord',
                    'DisplayPort cable',
                    'Color calibration factory report',
                    'INZONE sticker',
                    'Printed materials'
                ],
                '499.99'
            ),
        ['DualSense™ Charging Station']:
            new consolesOrAccessTemplateWithoutColors(
                'https://media.direct.playstation.com/is/image/sierialto/DualSense-Charging-Station-Hero-1?$Background_Large$',
                [
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-charging-station-ps5-accessory-front?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/dualsense-charging-station-ps5-accessory-package?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/DualSenseChargingStation-Lifestyle?$Background_Large$',
                ],
                '',
                'Charge up to two DualSense™ or DualSense Edge™ wireless controllers at the same time without having to connect them to your PlayStation®5 console.',
                [
                    'DualSense™ and DualSense Edge™ wireless controllers sold separately.'
                ],
                [
                    {
                        title: 'DualSense Charging Station key features',
                        descript: [
                            'Click. Charge. Play.',
                            'Click-in design: Dock up to two DualSense™ or DualSense Edge™ wireless controllers effortlessly with the charging station’s click-in design – and leave them to charge at your convenience.',
                            'Free up USB ports: Your controllers charge as quickly as when connected to your PS5™ console – so you can free up USB ports without reducing performance.'
                        ]
                    }
                ],
                [],
                '29.99'
            ),
        ['PlayStation VR2 Sense™ Controller Charging Station']:
            new consolesOrAccessTemplateWithoutColors(
                'https://media.direct.playstation.com/is/image/sierialto/PSVR2-Charging-Station-Hero-1?$Background_Large$',
                [
                    'https://media.direct.playstation.com/is/image/sierialto/PS-VR2-Sense-ChargingStation?$Background_Large$',
                ],
                'Feb 22, 2023',
                'Always be ready for your next adventure into thrilling new virtual reality worlds with the PlayStation VR2 Sense™ controller charging station. Quickly and easily charge your PlayStation VR2 Sense controller set through a simple click-in design  without having to connect them to your PlayStation®5 console, freeing up your USB ports.',
                [
                    'PlayStation VR2 Sense controllers sold separately.',
                    'FREE Standard Shipping. Conditions apply. See shipping FAQ to learn more.'
                ],
                [
                    {
                        title: 'Click. Charge. Play.',
                        descript: [
                            'Charge left and right controllers simultaneously - Be ready for your next gaming session.',
                            'Free up USB ports - Controllers charge as quickly as when connected to your PS5™ console.',
                            'Click-in design - Simply dock your controllers to the charging station via the supplied charging adaptors.'
                        ]
                    }
                ],
                [
                    'PlayStation VR2 Sense™ controller charging station',
                    'AC adaptor',
                    'AC power cord',
                    'Charging adaptors x2',
                    'Instruction manual'
                ],
                '49.99'
            ),
        ['PlayStation®VR2']:
            new consolesOrAccessTemplateWithoutColors(
                'https://media.direct.playstation.com/is/image/sierialto/PS-VR2-Hero?$Background_Large$',
                [
                    'https://media.direct.playstation.com/is/image/sierialto/PS-VR2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/ps-vr2-headset-controllers-angle?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/ps-vr2-headset?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/ps-vr2-headphones?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS-VR2-Box-US?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS-VR2-Box-US?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/VR2-Lifestyle?$Background_Large$'
                ],
                'Feb 22, 2023',
                'Escape into thrilling new worlds that feel, look and sound truly real as virtual reality gaming takes a huge generational leap forward with PlayStation®VR2.\n' +
                '\n' +
                'The Telegraph: 5/5\n' +
                'IGN: 9/10\n' +
                'GamesRadar+: 4.5/5',
                [
                    'PS5™ console required to play PS VR2.',
                    'PS VR2 will ship separately when additional items are in the order.',
                    'A signature will be required upon delivery for this product.',
                    'Change your mind? Free 30-day return available.'
                ],
                [
                    {
                        title: 'Feel a New Real™',
                        descript: [
                            'Cutting edge performance - Enjoy 4K HDR visuals1, a 110º field of view and advanced graphical rendering.2',
                            'PlayStation VR2 Sense™ technology - Feel real sensations and emotions with eye tracking, headset feedback, 3D Audio and highly intuitive controls.2',
                            'Quick setup - Jump straight into the action with a simple one-cable connection to your PS5™ console.',
                            'Thrilling new worlds - Surround yourself in a new generation of genre-defining VR games.',
                            '30+ games in launch window lineup - We are currently tracking more than 30 games for the launch window through March, including titles from popular IP like Horizon Call of the Mountain, No Man’s Sky, and Resident Evil Village.'
                        ]
                    }
                ],
                [
                    'VR headset',
                    'PlayStation VR2 Sense™ controller',
                    'USB cable (for controller pairing and charging)',
                    'Stereo headphones',
                    'Three pairs of earpieces',
                    'Printed materials'
                ],
                '549.99'
            ),
        ['PlayStation®VR2 Horizon Call of the Mountain™ Bundle']:
            new consolesOrAccessTemplateWithoutColors(
                'https://media.direct.playstation.com/is/image/sierialto/PS-VR2-Horizon-Bundle-Hero-ESRB-US?$Background_Large$',
                [
                    'https://media.direct.playstation.com/is/image/sierialto/PS-VR2-Horizon-bundle-main-angle?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS-VR2?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/ps-vr2-headset-controllers-angle?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/ps-vr2-headset?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/ps-vr2-headphones?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS-VR2-Box-US?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/PS-VR2-Box-US?$Background_Large$',
                    'https://media.direct.playstation.com/is/image/sierialto/VR2-Lifestyle?$Background_Large$'
                ],
                'Feb 22, 2023',
                'Conquer colossal peaks, overcome fearsome machines and uncover a hidden danger to the world of Horizon in the PlayStation®VR2 Horizon Call of the Mountain™ bundle.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Experience the sensations of height and wonder as you explore and interact with the world around you in an immersive adventure through the eyes of new character, Ryas.\n' +
                '\n' +
                'The Telegraph: 5/5\n' +
                'IGN: 9/10\n' +
                'GamesRadar+: 4.5/5',
                [
                    'PS5™ console required to play PS VR2.',
                    'PS VR2 will ship separately when additional items are in the order.',
                    'Includes voucher code to download Horizon Call of the Mountain game. Account for PlayStation™Network and broadband Internet required to download.',
                    'A signature will be required upon delivery for this product.',
                    'Change your mind? Free 30-day return available.'
                ],
                [
                    {
                        title: 'Climb to New Heights',
                        descript: [
                            'Play from a new perspective – experience the sensations of height and wonder as you take in stunning vistas across the Carja and Nora homelands through the eyes of new character, Ryas.',
                            'View the breathtaking natural world of Horizon in 360 degrees and interact with your surroundings using two PlayStation®VR2 Sense™ controllers.',
                            'Enjoy immersive action – use intuitive movements to climb mountains, hunt machines, shoot your bow and craft items from raw materials.',
                            'Brave a new adventure – enter a living, breathing world of dangerous machines, tribal lore, exciting quests and new and returning characters.',
                            'Share the experience – feel the adrenaline rush in a riverboat ride filled with surprises, that offers the chance to show off PS VR2 to your friends and family.',
                            '30+ games in launch window lineup - We are currently tracking more than 30 games for the launch window through March, including titles from popular IP like Horizon Call of the Mountain, No Man’s Sky, and Resident Evil Village.'
                        ]
                    }
                ],
                [
                    'VR headset',
                    'PlayStation VR2 Sense™ controller',
                    'Horizon Call of the Mountain™ voucher code',
                    'USB cable (for controller pairing and charging)',
                    'Stereo headphones',
                    'Three pairs of earpieces',
                    'Printed materials'
                ],
                '599.99'
            ),
    };


    const mongoHasDatas2 = await cnls.find();
    if (!!mongoHasDatas2[0] === false) {
        for (let consoleKey in consoleList) {
            const console = new cnls({
                title: consoleKey,
                img: consoleList[consoleKey].mainCover,
                page: "1",
                value: consoleList[consoleKey]
            })
            await console
                .save()
                .then(() => {
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    const mongoHasDatas3 = await aces.find();
    if (!!mongoHasDatas3[0] === false) {
        for (let accessKey in accessoriesList) {
            const a = accessKey.includes("DualSense") ? "White"
                : accessKey.includes("DUALSHOCK") ? "Jet Black"
                    : accessKey.includes("Covers") ? "Midnight Black"
                        : accessKey.includes("NVMe") ? "1TB"
                            : null;
            const access = new aces({
                title: accessKey,
                img: accessoriesList[accessKey]["mainCover"] ? accessoriesList[accessKey]["mainCover"] : accessoriesList[accessKey]["allImgsAndTitles"][a][0],
                page: "1",
                value: accessoriesList[accessKey]
            })

            await access
                .save()
                .then(() => {
                    console.log(accessKey + " is added")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    const {JSDOM} = jsdom;

    const mongoHasDatas = await gms.find();
    if (!!mongoHasDatas[0] === false) {

        for (let i = 1; i < 2; i++) {
            const firstTake = await fetch('https://store.playstation.com/en-us/pages/browse/' + i);
            const htmlText = await firstTake.text();
            const dom = await new JSDOM(htmlText).window.document;
            console.log(i);
            const titles = dom.getElementsByClassName("psw-t-body psw-c-t-1 psw-t-truncate-2 psw-m-b-2");
            const images = dom.getElementsByClassName("psw-media-frame psw-fill-x psw-image psw-media psw-media-interactive psw-aspect-1-1");
            const domens = dom.getElementsByClassName("psw-link psw-content-link");

            for (let j = 0; j < titles.length; j++) {
                const inTheGame = await (await fetch('https://store.playstation.com' + domens[j].href)).text(); //
                const domInTheGame = await new JSDOM(inTheGame).window.document;
                const agedNode = domInTheGame.getElementsByClassName("psw-c-bg-0 psw-t-subtitle")[0].firstChild;
                const keysToGameInfo = [...domInTheGame.getElementsByClassName("psw-p-l-6 psw-p-l-0@tablet-s psw-l-w-1/2 psw-l-w-1/6@tablet-s psw-l-w-1/6@tablet-l psw-l-w-1/24@laptop psw-l-w-1/12@desktop psw-l-w-1/12@max")];
                const valuesToGameInfo = [...domInTheGame.getElementsByClassName("psw-p-r-6 psw-p-r-0@tablet-s psw-t-bold psw-l-w-1/2 psw-l-w-1/6@tablet-s psw-l-w-1/6@tablet-l psw-l-w-1/8@laptop psw-l-w-1/6@desktop psw-l-w-1/6@max")];
                const background = domInTheGame.getElementsByClassName("psw-media-frame psw-fill-x psw-image psw-media psw-aspect-16-9")[0];
                const rating = domInTheGame.getElementsByClassName("psw-t-subtitle psw-t-bold psw-l-line-center")[0];
                const readyImg = images[j].firstChild.src.replace('54&thumb', '620&thumb').replace('true', 'false')
                keysToGameInfo.pop();
                valuesToGameInfo.pop();
                const priceReady = domInTheGame.getElementsByClassName("psw-t-title-m")[0].textContent.replace(/\$/, "");
                const prepareAditInfoKeys = keysToGameInfo.map(el => el.textContent);
                const prepareAditInfoValues = valuesToGameInfo.map(el => el.textContent);

                const games = new gms({
                    title: titles[j].textContent,
                    img: readyImg,
                    page: i + "",
                    Cover: readyImg,
                    BackgroundImg: background ? background.firstChild.src.replace('54&thumb', '5000&thumb').replace('true', 'false') : "",
                    Developer: domInTheGame.getElementsByClassName("psw-t-overline psw-t-bold")[0].textContent,
                    Rating: rating ? Number(rating.textContent) : null,
                    Price: priceReady === "Free" ? 0 : Number(priceReady),
                    Compatibility: [...domInTheGame
                        .getElementsByClassName("psw-l-columns psw-l-max-3 psw-t-secondary psw-l-space-y-1 psw-p-0 psw-m-0 psw-list-style-none")[0]
                        .getElementsByClassName("psw-l-line-none psw-l-space-x-xs psw-l-shrink-wrap")].map(el => el.textContent),
                    Age: {
                        "ESRBImg": agedNode.firstChild.firstChild.lastChild.firstChild.src,
                        "TopDescipt": agedNode.lastChild.firstChild.textContent,
                        "BottomDescipt": agedNode.length > 2 ? agedNode.lastChild.lastChild.textContent : "",
                    },
                    GameInfo: [...domInTheGame.getElementsByClassName("psw-c-t-2 psw-p-x-7 psw-p-y-6 psw-p-x-6@below-tablet-s psw-m-sub-x-7 psw-m-auto@below-tablet-s psw-c-bg-card-1")[0].childNodes].filter(el => el.textContent).map(el => el.textContent),
                    AdditionalInfo: {
                        keys: prepareAditInfoKeys,
                        values: prepareAditInfoValues
                    },
                    Genre: prepareAditInfoValues[prepareAditInfoKeys.indexOf("Genres:")],
                    Platform: prepareAditInfoValues[prepareAditInfoKeys.indexOf("Platform:")]
                })

                await games
                    .save()
                    .then(() => {
                        console.log(titles[j].textContent);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }
    } else console.log("Products is already updated")
}
