export const confidants = [
  {
    id: 'Chariot',
    name: 'Ryuji Sakamoto',
    availabilities: [
      ['Monday', 'Day', true],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', true],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', true],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', true],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', true],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', true],
      ['Saturday', 'Night', false],
      ['Sunday', 'Day', true],
      ['Sunday', 'Night', false],
      ['Rainy', 'Day', true],
      ['Rainy', 'Night', true],
    ],
    benefits: [
      {
        rank: '2',
        label: 'Punk Talk',
        description:
          'If negotiations with an upbeat Shadow fails, you can try again.',
      },
      {
        rank: '3',
        label: 'Follow Up',
        description:
          'Chance to perform a follow-up attack if Joker’s attack does not down the enemy.',
      },
      {
        rank: '4',
        label: 'Stealth Dash',
        description:
          'Makes you less likely to be found in the Metaverse while dashing.',
      },
      {
        rank: '6',
        label: 'Harisen Recovery',
        description:
          'Chance to cure status ailments inflicted upon party members.',
      },
      {
        rank: '7',
        label: 'Insta-kill',
        description:
          'When encountering a weak Shadow, you may destroy it immediately.',
      },
      {
        rank: '8',
        label: 'Endure',
        description:
          'Chance to withstand an otherwise fatal attack with 1 HP remaining.',
      },
      {
        rank: '9',
        label: 'Protect',
        description: 'Chance to shield Joker from an otherwise fatal attack.',
      },
      {
        rank: 'MAX',
        label: 'Second Awakening',
        description: 'Transforms his Persona into a mythological trickster.',
      },
      {
        rank: 'ROYAL',
        label: 'Second Awakening R',
        description:
          'Fuse with the mythological Trickster, awakening its true power.',
      },
    ],
    conversations: [
      {
        label: 'Rank 2',
        note: '',
        responses: [
          [
            'I’m counting on you. +3',
            'You seem pretty excited. +3',
            '…Help with what? +2',
          ],
          ['What about them? +0', 'And then you punched him? +0'],
          ['Do you want to go back? +2', 'Do you regret it? +2'],
          [
            'You’re already fast enough. +2',
            'Are your legs okay? +2',
            'It’s never too late, man. +2',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          [
            'Let’s not fight. +2',
            'Want to train with us? +0',
            'It’s nice to meet you. +0',
          ],
          [
            'Calm down, Ryuji. +3',
            'Just endure it. +2',
            'I’ll shut them up. +0',
          ],
          [
            'I can’t exactly blame you. +2',
            'Violence is not the answer. +0',
            'Yeah, that’d be best. +0',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'Nakaoka? +0',
            'Are you worried about him? +2',
            'Just leave him be. +0',
          ],
          [
            'But you’re doing great. +3',
            'It’s not so bad. +2',
            'I know how you feel. +3',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          ['A towel? +2', 'Protein powder? +3'],
          [
            'You seem conflicted. +2',
            'Do you want to rejoin? +2',
            'You’re done with them, right? +0',
          ],
          ['So he’s short? +2', 'So he’s an asshole? +3'],
          [
            'Don’t worry. I gotcha. +2',
            'I haven’t agreed to anything.',
            'Fine, but you’re buying ramen. +0',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'Let’s stay here. +2',
            'How about Protein Lovers? +2',
            'We can train at my place. +3',
          ],
          [
            'You guys should trust Nakaoka. +3',
            'This is no time for arguing. +3',
          ],
          ['Absolutely. +3', 'More or less. +3', 'Not in the slightest. +0'],
          ['I don’t get it. +0', 'Can you explain that? +0'],
          ['…Huh? +0', 'I really don’t understand. +0'],
          [
            'Sounds like you two were close. +0',
            'Just like you.',
            'So he should’ve punched back? +2',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          ['Should we change his heart? +0', 'Let’s talk to Takeishi. +3'],
          ['I think it’s cool, Ryuji. +3', 'Wait, what? +2'],
          [
            'Never know until you try +2',
            'It’s out of our hands. +0',
            'We’ll use force if we have to. +0',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'What if they start fighting? +0',
            'I doubt they’ll believe you. +0',
          ],
          ['Things turned out for the best. +3', 'You deserved it. +3'],
          ['All I did was watch. +3', 'Are you gonna pay me back? +2'],
          ['But I was just standing here… +2', 'You weren’t cool though. +3'],
          [
            'You did a great job. +0',
            'So. Closed case? +2',
            'We make a good team too. +0',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          ['Are you satisfied now? +3', 'Not Running? +2'],
          [
            'What did you say? +2',
            'Do you have any time for that? +2',
            'Don’t do it. +3',
          ],
          ['You’re Right. +3', 'I never realized that. +3'],
          [
            'I agree. +2',
            'Be more specific. +0',
            'And where is this place? +0',
          ],
          [
            'Congratulations. +2',
            'Got him under control, how? +0',
            'Better watch out for them. +2',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          ['I’m looking forward to it. +3', 'We can’t lose either. +3'],
          ['You’re welcome. +0', 'It’s all because of you. +0'],
        ],
      },
    ],
  },
  {
    id: 'Councillor',
    name: 'Takuto Maruki',
    availabilities: [
      ['Monday', 'Day', true],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', false],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', false],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', false],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', true],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', false],
      ['Saturday', 'Night', false],
      ['Sunday', 'Day', false],
      ['Sunday', 'Night', false],
      ['Rainy', 'Day', false],
      ['Rainy', 'Night', false],
    ],
    benefits: [
      {
        rank: '2',
        label: 'Detox X',
        description:
          'When Joker is inflicted with an ailment, he may recover immediately.',
      },
      {
        rank: '3',
        label: 'Flow',
        description:
          'Chance to receive the effects of Charge and Concentrate at the start of battle.',
      },
      {
        rank: '5',
        label: 'Mindfulness',
        description: 'Chance to restore Joker’s SP when it is low.',
      },
      {
        rank: '7',
        label: 'Flow Boost',
        description: 'Raises the chance of Flow succeeding.',
      },
      {
        rank: '9',
        label: 'Detox DX',
        description: 'Raises the chance of Detox X succeeding.',
      },
    ],
    conversations: [
      {
        label: 'Rank 2',
        note: '',
        responses: [
          [
            'Didn’t have much choice. +0',
            'We made a deal. +2',
            'I’m a little nervous. +2',
          ],
          [
            'It’s in the past. +0',
            'I’m doing okay now. +0',
            'So much for privacy. +0',
          ],
          [
            'But it sounds right. +3',
            'Yep. +2',
            'Kinda creeping me out here. +0',
          ],
          ['So… what? +0', 'I’ll need more details. +0', 'Uh… +0'],
          [
            'Well, okay. +2',
            'Better make it worth it. +0',
            'Why me, though? +0',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          [
            'So they have, huh? +2',
            'You worry too much. +0',
            'Thanks to you, probably. +2',
          ],
          ['Of course. +2', 'Yeah, for our deal. +2', 'I forgot. +0'],
          [
            'When someone betrays me. +0',
            'When I lie. +0',
            'When I get punched. +0',
          ],
          [
            'That one seems necessary +2',
            'We’d be better off without it. +0',
            'It’s a seed for new loves. +2',
          ],
          ['Did that help? +2', 'Don’t worry about it. +2'],
          [
            'Good work over there. +2',
            'So you’re actually working? +0',
            'Getting to your research now? +0',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          ['Where’s this coming from? +0', 'What are you talking about? +0'],
          [
            'I know, right…? +3',
            'It’s not the worst. +0',
            'Talk about a reward. +2',
          ],
          [
            'That’d be great. +2',
            'Is that possible? +0',
            'Is that what you’re researching? +3',
          ],
          ['…… +0', 'Are you okay? +0'],
          ['That’s a grand plan. +2', 'You’re so kind. +2'],
          [
            'That sounds fun. +3',
            'I’m not the “free labor” type. +0',
            'Nope. +0',
          ],
          [
            'I’m completely fine. +2',
            'It’s part of our deal, so… +2',
            'I’m struggling, to be honest. +0',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'This looks great! +3',
            'How old do you think I am? +0',
            'I could just take cash… +2',
          ],
          [
            'The one-cookie container. +0',
            'The ten-cookie container. +0',
            'It was a tie. +0',
          ],
          [
            'I never considered that. +0',
            'They’re getting played. +2',
            'You know, you’re right. +3',
          ],
          [
            'My senses lied to me! +2',
            'Hey, as long as it tastes good. +2',
            'It’s a little scary.  +0',
          ],
          ['Not “truth” exactly… +0', 'I guess so. +2', 'I don’t know. +0'],
          [
            'I really don’t mind. +2',
            'Come on, man. +0',
            'It was thought-provoking. +2',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'You wanted to talk? +0',
            'Another cup? +2',
            'We’ve got curry, too. +2',
          ],
          ['I can do that. +3', 'It’s a deal. +2', 'I’m not up for this… +0'],
          ['Isn’t that enough? +0', 'You need more than that? +0'],
          [
            'So what CAN we do? +0',
            'It’s a hard question… +0',
            'So give up. +2',
          ],
          ['All hearts share some things. +0', 'What if they’re connected? +0'],
          [
            'Calm down. +0',
            'Where’s this coming from? +0',
            'Cognitive pscience? +0',
          ],
          [
            'Calm down. +2',
            'What’s going on? +2',
            'Heavy breathing? Pervert. +0',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          [
            'You really are dedicated. +3',
            'Are they even relevant? +3',
            'Are you a fan? +3',
          ],
          [
            'No idea. +3',
            'As in, removing them? +3',
            'How about you Maruki? +3',
          ],
          ['The change of heart…? +3', '…… +3'],
          [
            'I have no clue. +3',
            'Sounds pretty far-fetched. +3',
            'It’s intriguing. +3',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'I’m good on cookies, thanks. +2',
            'What do you mean? +3',
            'Thanks, but I should get going. +0',
          ],
          [
            'Ooh, really? +3',
            'Can you afford that? +2',
            'Sorry, I prefer sushi. +2',
          ],
          [
            'Thanks for the food! +3',
            'Self-control much? +0',
            'This is quite the spread. +2',
          ],
          [
            'I’m his pupil. +2',
            'It’s complicated. +0',
            'We’ve made a deal. +3',
          ],
          ['Congratulations. +3', 'Way to go. +3'],
          ['I sure do. +3', 'Let’s celebrate. +3'],
          [
            'She’s a girlfriend of yours? +0',
            'Who’s Rumi? +0',
            'Should I leave you two to talk? +0',
          ],
          [
            'He’s a good friend. +2',
            'Learn some independence. +0',
            'You’ll get the tab next time. +0',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          ['Yeah. +0', 'Kind of. +0'],
          [
            'Kind of sad… +3',
            'Is our deal over? +2',
            'Well… take care of yourself. +2',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: 'Story Progression',
        responses: [],
      },
    ],
  },
  {
    id: 'Death',
    name: 'Tae Takemi',
    availabilities: [
      ['Monday', 'Day', true],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', true],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', true],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', true],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', true],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', true],
      ['Saturday', 'Night', false],
      ['Sunday', 'Day', true],
      ['Sunday', 'Night', false],
      ['Rainy', 'Day', true],
      ['Rainy', 'Night', true],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Rejuvenation',
        description: 'Increases the selection of healing items at the clinic.',
      },
      {
        rank: '3',
        label: 'Sterilization',
        description: 'Adds more healing items to the clinic.',
      },
      {
        rank: '5',
        label: 'Immunization',
        description: 'Adds support items to the inventory at the clinic.',
      },
      {
        rank: '7',
        label: 'Discount',
        description: 'Decreases the price for all items sold at the clinic.',
      },
      {
        rank: 'MAX',
        label: 'Resuscitation',
        description: 'Increase the selection of revival items at the clinic.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note: '',
        responses: [
          [
            'Fine by me. +1',
            'Please go easy on me. +3',
            'So many pretty lights… +1',
          ],
        ],
      },
      {
        label: 'Rank 2',
        note: 'Level 2 Courage Required',
        responses: [
          [
            'I have a bad heart. +2',
            'We’re on a date. +0',
            'I know my rights. +0',
          ],
          ['I agree. +2', 'Harassment? +0', 'The Plague? +0'],
          [
            'I’m totally fine. +2',
            'I feel lightheaded +0',
            'I think I have superpowers +2',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          ['What was that about? +0', 'Was that an emergency? +0'],
          ['A medical error? +0', 'What do you mean? +0'],
          ['I don’t mind. +2', 'Is it true? +0', 'I need the medicine. +2'],
          ['Of course not. +2', 'I don’t think I did… +0', 'Have you? +0'],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          ['You’ll be OK. +0', 'Dr. Takemi will help. +2'],
          ['You seem happy. +3', 'You’re so kind. +2', 'Why free? +2'],
          [
            'I’ll reflect on my mistakes +2',
            'But she ended up okay. +0',
            'Punish me more. +0',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          ['They trust you. +0', 'Was it really your fault? +0'],
          ['I had no idea. +0', 'It’s not too late. +0'],
          ['That’s good. +3', 'When will it be done? +2', '… “Probably”? +0'],
          [
            'About Miwa-chan? +2',
            'About Oyamada? +0',
            'About Crawford-Ende’s? +0',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'Well, someone’s popular. +0',
            'You seem annoyed. +0',
            'Did something happen? +0',
          ],
          ['Having fun? +0', 'You ARE a genius. +0'],
          [
            'You’re a masochist. +0',
            'It suits you. +3',
            'You’re not honest. +2',
          ],
          [
            'You can count on me. +2',
            'I think I’m at my limit… +0',
            'Anything for you. +2',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          [
            'This is harassment. +2',
            'She’s a great doctor. +2',
            'Please be quiet. +2',
          ],
          ['Don’t lose hope. +0', 'Let’s ask for details. +0', '…… +0'],
          [
            'Just rest for today. +2',
            'Anything I can do? +2',
            'Let’s retaliate. +0',
          ],
          [
            'It was inevitable. +0',
            'We all do sometimes. +3',
            'I’m glad you did. +2',
          ],
        ],
      },
      {
        label: 'Rank 7.5',
        note: 'Level 4 Charm Required',
        responses: [
          ['What about Miwa-chan? +0', 'You OK with this? +0'],
          ['Don’t give up. +0', 'Anything you can do? +0', 'I’m your ally. +2'],
          ['You gonna run away? +0', 'And your patients? +0'],
          ['What’s his full name? +0', 'Tell me about him. +0'],
          ['I won’t do anything. +0', 'It’s for my research. +0'],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          ['Miwa-chan is alive. +0', 'Oyamada lied to you. +0'],
          [
            'You should hurry. +2',
            'Let’s get to work, doctor. +3',
            'It’s not over yet. +3',
          ],
          [
            'It’s for Miwa-chan +3',
            'It’s for my exams. +2',
            'It’s for you. +3',
          ],
          [
            'I’ll be cheering you on. +2',
            'Don’t burn yourself out. +0',
            'Anything else I can do. +2',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          [
            'Don’t worry about it. +2',
            'It was for my exams. +2',
            'It was rough. +3',
          ],
          ['That’s troubling. +0', 'And your patients? +0'],
          ['I wanted to see you. +0 (ROMANCE)', 'It was for my exams. +0 END'],
          ['I love you. +2 (ROMANCE)', 'What do you think? +0 END'],
          ['It isn’t a joke. +3 (ROMANCE)', 'That sounds good. +0'],
          ['It’s true love. +0', 'So did you. +2', 'I’ve always loved you. +0'],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          ['Uh, what? +0', 'Is that a joke? +0'],
          [
            'It’s a coincidence. +0',
            'I wonder… +2',
            'So what if it’s true? +0',
          ],
          ['What kind? +2', 'Yes, please. +3'],
        ],
      },
    ],
  },
  {
    id: 'Devil',
    name: 'Ichiko Ohya',
    availabilities: [
      ['Monday', 'Day', false],
      ['Monday', 'Night', true],
      ['Tuesday', 'Day', false],
      ['Tuesday', 'Night', true],
      ['Wednesday', 'Day', false],
      ['Wednesday', 'Night', true],
      ['Thursday', 'Day', false],
      ['Thursday', 'Night', true],
      ['Friday', 'Day', false],
      ['Friday', 'Night', true],
      ['Saturday', 'Day', false],
      ['Saturday', 'Night', true],
      ['Sunday', 'Day', false],
      ['Sunday', 'Night', true],
      ['Rainy', 'Day', true],
      ['Rainy', 'Night', true],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Rumor-filled Scoop',
        description:
          'Decreases the Security Level when you find a new Safe Room.',
      },
      {
        rank: '4',
        label: 'Shocking Scoop',
        description:
          'Security Level raises slowly, and lowers upon defeating an ambushed enemy.',
      },
      {
        rank: '5',
        label: 'Unprecedented Scoop',
        description:
          'Allows you to begin with a low Security Level when infiltrating a Palace.',
      },
      {
        rank: '7',
        label: 'Outrageous Scoop',
        description:
          'Allows you to begin with an even lower Security Level when infiltrating a Palace.',
      },
      {
        rank: 'MAX',
        label: 'Legendary Scoop',
        description:
          'Makes it easier to ambush the enemy, regardless of Security Level.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note: '',
        responses: [
          ['Thanks +0', 'Sounds like a good time. +0', 'Doing what? +0'],
        ],
      },
      {
        label: 'Rank 2',
        note: '',
        responses: [
          ['Why do you ask? +0', 'I don’t. +0', 'Mishima might… +2'],
          ['Worth…? +0', 'What about their justice? +0'],
          [
            'I like the atmosphere. +0',
            'It’s for the article. +2',
            'Tell me about that incident. +0',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          [
            'Minors couldn’t do that stuff. +0',
            'You might be right. +0',
            'You shouldn’t make assumptions. +2',
          ],
          ['What’s the difference? +0', 'I’m sure you are. +0'],
          ['Why not change careers? +0', 'Maybe you should quit. +0'],
          [
            'What was she accused of? +0',
            'What happened? +0',
            'She was falsely accused? +2',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          ['What’s this about? +0', 'She hasn’t done anything wrong. +0'],
          ['Of course we are. +2', 'Don’t tell anybody. +2'],
          [
            'Our movie is about to start. +0',
            'That’s enough. +0',
            'We’re dating. Seriously. +0',
          ],
          [
            'Leave it to me. +2',
            'That was our deal. +2',
            'Anything for my girlfriend. +0',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'Because of your investigation? +0',
            'Because of your incident? +0',
            'Are you sure we’re the same? +0',
          ],
          ['I’m curious. +0', 'You can trust me. +0'],
          ['What was the cause of death? +0', 'Who killed him? +0'],
          [
            'That sounds like defamation. +2',
            'That’s unforgivable. +3',
            'How’s your search going? +0',
          ],
          [
            'I don’t mind. +2',
            'As long as I’m compensated. +0',
            'I did the same to you. +0',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          ['Did something bad happen? +0', 'Having trouble at work? +0'],
          ['He must not like you. +2', 'Did he find out? +0'],
          [
            'Do you have evidence of that? +0',
            'You should trust in her. +2',
            'You might be right. +0',
          ],
          [
            'That’s the spirit +2',
            'You’re a great journalist. +2',
            'What about your quota? +0',
          ],
          [
            'Glad to hear that. +0',
            'Don’t work yourself to death. +0',
            'I’ll dig up some more for you. +2',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          ['What was that about? +0', 'Could it be…? +0'],
          [
            'Calm down. +2',
            'Don’t let him provoke you. +3',
            'Let’s think of another way. +3',
          ],
          ['You should work on that. +2', 'You’re charming as you are. +3'],
          [
            'That’s the spirit. +2',
            'Sounds tough. +0',
            'Don’t strain yourself. +0',
          ],
        ],
      },
      {
        label: 'Rank 7.5',
        note: '',
        responses: [
          ['Like what? +0', 'You seem tired. +2', 'So… I have a pet cat… +0'],
          ['What’s the chief’s name? +0', 'Tell me more about him. +0'],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          ['He reflected on his actions. +0', 'Aren’t you happy? +0'],
          ['Did I? Can’t remember. +0', 'Uh, nope. +0'],
          ['I’m glad to hear that. +0', 'Thank god. +0'],
          [
            'That’s not like you. +3',
            'You need pursue the truth. +3',
            'I’ll go with you. +3',
          ],
          ['Good luck. +2', 'Be careful. +2', 'Grab a souvenir for me. +0'],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          ['Are you OK? +0', 'Did you learn the truth? +0'],
          ['What are you going to do? +0', 'You’re not giving up, are you? +2'],
          [
            'I can’t leave you. +3',
            'I want to help. +3',
            'I need those articles. +0',
          ],
          ['Of course not. +0', 'No way. +0'],
          [
            'I took it seriously. +0 (ROMANCE)',
            'I didn’t take it seriously. +0 END',
          ],
          ['I love you, Ichiko. +0 (ROMANCE)', 'I’m just kidding. +0'],
          [
            'I wanted to hear your voice. +2',
            'Please don’t dump me. +2',
            'IloveyouIloveyouIloveyou. +0',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          [
            'You’re really earnest. +2',
            'Is that entertainment? +3',
            'You don’t need my info? +0',
          ],
          ['I’m glad to hear that. +3', 'I’ll read the next issue. +3'],
          [
            'So you knew all along? +0',
            'It’s just a coincidence. +0',
            'Lala’s the real phantom thief. +0',
          ],
          ['It’s up to you. +3', 'I want to go to your place. +3'],
        ],
      },
    ],
  },
  {
    id: 'Emperor',
    name: 'Yusuke Kitagawa',
    availabilities: [
      ['Monday', 'Day', true],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', true],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', true],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', true],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', true],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', true],
      ['Saturday', 'Night', false],
      ['Sunday', 'Day', true],
      ['Sunday', 'Night', false],
      ['Rainy', 'Day', true],
      ['Rainy', 'Day', true],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Card Duplication.',
        description:
          'Allows Yusuke to use Blank Cards to duplicate Skill Cards.',
      },
      {
        rank: '3',
        label: 'Followup',
        description:
          'Chance to perform a follow-up attack if Joker’s attack does not down the enemy.',
      },
      {
        rank: '4',
        label: 'Art Talk',
        description:
          'If negotiations with a lone Shadow fails, you can try again.',
      },
      {
        rank: '5',
        label: 'Card Creation',
        description:
          'Allows Yusuke to create any Skill card he has copied once before.',
      },
      {
        rank: '6',
        label: 'Harisen Recovery',
        description:
          'Chance to cure status ailments inflicted upon party members.',
      },
      {
        rank: '7',
        label: 'Live Painting',
        description:
          'Allows Yusuke to use Card Duplication and Card Creation on the spot.',
      },
      {
        rank: '8',
        label: 'Endure',
        description:
          'Chance to withstand an otherwise fatal attack with 1 HP remaining.',
      },
      {
        rank: '9',
        label: 'Protect',
        description: 'Chance to shield Joker from an otherwise fatal attack.',
      },
      {
        rank: 'MAX',
        label: 'Second Awakening',
        description: 'Transforms his Persona into a mythological trickster.',
      },
      {
        rank: 'ROYAL',
        label: 'Second Awakening R',
        description:
          'Fuse with the mythological Trickster, awakening its true power.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note: '',
        responses: [
          ['Thanks. +2', 'I’ll try not to. +2', 'I’ll be asking a lot. +3'],
        ],
      },
      {
        label: 'Rank 2',
        note: '',
        responses: [
          ['It’s novel. +2', 'It’s enigmatic. +2', '…What is it? +0'],
          [
            'I can’t wait. +3',
            'I hope you’re right. +3',
            'Will people like it? +0',
          ],
          [
            'You’re already doing enough. +2',
            'I’m looking forward to it. +0',
            'Will you really? +0',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          [
            'That was harsh. +0',
            'What a dick. +0',
            'Don’t let it bother you. +2',
          ],
          [
            'Stop exaggerating. +0',
            'This is just the beginning. +0',
            'Stand up. +0',
          ],
          [
            'You’re really giving up? +2',
            'This isn’t like you. +3',
            'Stand up, Ysuke. +0',
          ],
          ['How exactly? +2', 'That’s the spirit. +2'],
          [
            'That’s the spirit. +2',
            'You’re taking this too far. +0',
            'That’s all? +0',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'What are we doing here? +0',
            'Why are we in a boat? +2',
            'I should bring a girl here. +2',
          ],
          [
            'Love comes in all forms. +3',
            'Maybe you should train more. +2',
            'You have a wild imagination. +0',
          ],
          [
            'Don’t get discouraged. +2',
            'Just keep drawing. +0',
            'You lack love yourself. +0',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'Make me beautiful. +0',
            'I dunno if I can do it… +2',
            'Do you want me to strip? +3',
          ],
          [
            'I’m sure you will. +3',
            'It doesn’t look like it. +3',
            'Do you want to give up? +2',
          ],
          [
            'Don’t overthink it. +0',
            'You have to keep drawing. +0',
            'There’s still hope. +2',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: 'Level 4 Proficiency Required',
        responses: [
          [
            'It feels nostalgic. +2',
            'Why are we here again? +0',
            'Are you going in? +0',
          ],
          ['We should get it fixed. +0', 'Let’s force it open. +0'],
          ['Are you OK? +0', 'You’re not looking so good. +0'],
          [
            'Maybe he was sympathetic. +3',
            'He somehow knew you had skill. +2',
            'I couldn’t possibly tell you. +3',
          ],
          [
            'He had a certain dignity. +2',
            'He seems reliable. +0',
            'I’m not sure. +0',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          ['That’s a great name. +0', 'What do you mean? +2', 'Handsome…? +0'],
          ['The truth is within you. +3', 'Money is important. +0'],
          [
            'Calm down. +2',
            'It’s not a crime to enjoy sushi. +2',
            'Let’s go again sometime. +0',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'Scenery is always nice. +0',
            'I’d say Morgana. +0',
            'It has to be Ann. +2',
          ],
          [
            'What’s wrong with that? +2',
            'The same applies to everyone. +0',
            'You’ve really grown, Yusuke. +3',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          [
            'Her love for her son. +3',
            'The pain of separation. +3',
            'I don’t know. +2',
          ],
          [
            'You’ve really changed, Yusuke. +3',
            'That’s a great idea. +2',
            'It won’t be easy. +0',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          ['It turned out well. +0', 'So you added hope? +0'],
          [
            'You provoked Yusuke on purpose? +0',
            'Are you scheming something? +0',
          ],
          ['“He”? +0', 'Do you mean Madarame? +0'],
          [
            'He was a good man deep down. +3',
            'That was another aspect of him. +3',
          ],
          [
            'Yeah… +0',
            'You’re stranger, Yusuke. +0',
            'Are you sure about this? +0',
          ],
        ],
      },
    ],
  },
  {
    id: 'Empress',
    name: 'Haru Okumura',
    availabilities: [
      ['Monday', 'Day', true],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', true],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', true],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', true],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', true],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', true],
      ['Saturday', 'Night', false],
      ['Sunday', 'Day', true],
      ['Sunday', 'Night', false],
      ['Rainy', 'Day', false],
      ['Rainy', 'Night', false],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Cultivation',
        description:
          'Allows you to grow vegetables with Haru on the Shujin Academy rooftop.',
      },
      {
        rank: '3',
        label: 'Follow Up',
        description:
          'Chance to perform a follow-up attack if Joker’s attack does not down the enemy.',
      },
      {
        rank: '4',
        label: 'Celebrity Talk',
        description:
          'If negotiations amidst a group of Shadows fails, you can try again.',
      },
      {
        rank: '5',
        label: 'Bumper Crop',
        description:
          'Increases the total vegetable yield for a single harvest.',
      },
      {
        rank: '6',
        label: 'Harisen Recovery',
        description:
          'Chance to cure status ailments inflicted upon party members.',
      },
      {
        rank: '7',
        label: 'Soil Improvement',
        description:
          'Decreases the total amount of time it takes to cultivate vegetables.',
      },
      {
        rank: '8',
        label: 'Endure',
        description:
          'Chance to withstand an otherwise fatal attack with 1 HP remaining.',
      },
      {
        rank: '9',
        label: 'Protect',
        description: 'Chance to shield Joker from an otherwise fatal attack.',
      },
      {
        rank: 'MAX',
        label: 'Second Awakening',
        description: 'Transforms her Persona into a mythological trickster.',
      },
      {
        rank: 'ROYAL',
        label: 'Second Awakening R',
        description:
          'Fuse with the mythological Trickster, awakening its true power.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note: '',
        responses: [
          [
            'Sounds good. +2',
            'That was our deal. +3',
            'Thanks. I’m counting on you. +2',
          ],
        ],
      },
      {
        label: 'Rank 2',
        note: 'MAX Proficiency Required',
        responses: [
          [
            'You like coffee? +3',
            'Are you opening a café? +3',
            'Are you starting a farm? +3',
          ],
          [
            'What do you mean? +0',
            'So you won’t accept his offer? +0',
            'He sounds suspicious. +3',
          ],
          [
            'This is a complex issue. +3',
            'You might be wrong. +3',
            'Maybe you should fire him. +3',
          ],
          ['Moonlight Carrot. +3', 'Sun Tomato. +3', 'Jewel Melon. +3'],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          [
            'A phantom thief wouldn’t worry. +2',
            'They won’t find out. +3',
            'It’ll be OK, I promise. +3',
          ],
          [
            '“I don’t want to go with you.” +3',
            '“I’m afraid of flying.” +0',
            '“We should break up.” +0',
          ],
          ['I have. +3', 'Not yet. +3', 'Too many times to count. +3'],
          [
            'Smart response. +3',
            'Sounds like a hassle. +0',
            'Which friend? +0',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          ['That’s pricey. +3', 'What a rip-off. +0', 'It must be amazing. +3'],
          [
            'I can’t let you do that. +3',
            'Let me cover the bill. +3',
            'Kthx. +3',
          ],
          [
            'You mean… poop!? +3',
            'I can taste the elephant. +3',
            'Excuse me while I vomit. +3',
          ],
          [
            'Hands off my cat. +0',
            'I’d rather not think about it. +0',
            'Let’s ask him. +3',
          ],
          [
            'He seemed nice enough. +0',
            'He was a little sketchy. +0',
            'I’m not really sure. +3',
          ],
          [
            'I don’t mind. +0',
            'It was rather intriguing. +0',
            'Let’s get coffee again sometime. +3',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'Trust who you want to trust. +0',
            'Somebody’s telling the truth. +3',
            'Trust no one. +3',
          ],
          [
            'Are you really considering it? +0',
            'You can’t give in. +0',
            'There has to be another way. +3',
          ],
          [
            'That doesn’t matter now. +3',
            'You didn’t have a choice. +0',
            'I don’t think so. +3',
          ],
          [
            'Are you okay? +0',
            'We’re all here for you. +0',
            'Pinch yourself. +3',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'That’s fascinating +3',
            'You’re so studious. +3',
            'Can you make some for me? +3',
          ],
          [
            'I had no idea. +3',
            'That’s a surprise. +0',
            'I could’ve guessed that. +0',
          ],
          [
            'You might be right. +0',
            'That would be bad. +3',
            'Black like coffee? +3',
          ],
          ['You don’t need to apologize. +0', 'That guy is horrible. +0'],
          ['You’re not powerless. +0', 'Be strong, Haru. +3'],
          [
            'You can talk to me anytime. +3',
            'Let him say what he wants. +3',
            'Wanna run away together? +0',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          [
            'You look exhausted. +0',
            'Don’t overwork yourself. +0',
            'Let’s go see the nurse. +0',
          ],
          [
            'That sounds really tough… +3',
            'You should ask some employees. +0',
            'What do you want to do? +3',
          ],
          [
            'What does Takakura-san think? +3',
            'There has to be a way. +3',
            'You should tell him that. +3',
          ],
          ['That’s the spirit. +3', 'You can do it, Haru. +3'],
          [
            'Don’t relax yet. +0',
            'I’ll always have your back. +3',
            'So what’s this “magic item”? +0',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          ['The soil? +3', 'The planters? +0', 'That beetle over there? +0'],
          [
            'It’ll help him understand you. +3',
            'He’s going to love it. +3',
            'He might not like it. +3',
          ],
          [
            'I’ll be cheering for you. +3',
            'You’re amazing, Haru. +3',
            'Are you sure you can do it? +3',
          ],
          [
            'You can understand them? +0',
            'It’s in your nature to nurture. +3',
            'I want some too. +3',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          [
            'Don’t forget to breathe. +0',
            'Believe in yourself. +0',
            'I’m here for you, Haru. +0',
          ],
          [
            'I’m sure you’ll do great. +3',
            'It’ll be fine. +3',
            'Give it all you’ve got, Haru. +3',
          ],
          [
            'You’re very welcome. +3',
            'You did amazing. +3',
            'Do I get a reward? +0',
          ],
          [
            'He saw us as good friends. +0',
            'I like you too, Haru. +0 (ROMANCE)',
          ],
          [
            'What’re you up to? +0',
            'I wanted to hear your voice. +3',
            'I miss you. +3',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          [
            'Will things be OK? +0',
            'That’s good to hear. +3',
            'You’ve done great, Haru. +3',
          ],
          [
            'I’m sure you’ll succeed. +3',
            'This won’t be easy. +3',
            'It all comes down to flavor. +3',
          ],
          [
            'If you want. +0',
            'Probably not. +0',
            'It’s hard work, you know. +0',
          ],
          [
            'I’m glad too. +3',
            'Don’t deny yourself. +3',
            'Just my teammate? +3',
          ],
        ],
      },
    ],
  },
  {
    id: 'Faith',
    name: 'Kasumi Yoshizawa',
    availabilities: [
      ['Monday', 'Day', false],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', false],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', true],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', true],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', false],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', false],
      ['Saturday', 'Night', false],
      ['Sunday', 'Day', true],
      ['Sunday', 'Night', false],
      ['Rainy', 'Day', false],
      ['Rainy', 'Night', false],
    ],
    benefits: [
      {
        rank: '2',
        label: 'Tumbling',
        description: 'Allows you to avoid being surround by enemies in Palaces',
      },
      {
        rank: '4',
        label: 'Chaines Hook',
        description:
          'Allows you to ambush from a distance by attacking with the grappling hook.',
      },
      {
        rank: '6',
        label: 'Follow Up',
        description:
          'Chance to perform a follow-up attack if Joker’s attack does not down the enemy.',
      },
      {
        rank: '6',
        label: 'Fitness Talk',
        description:
          'If negotiation with any kind of Shadow fails, you can try again.',
      },
      {
        rank: '7',
        label: 'Harisen Recovery',
        description:
          'Chance to cure status ailments inflicted upon party members.',
      },
      {
        rank: '8',
        label: 'Endure',
        description:
          'Chance to withstand an otherwise fatal attack with 1 HP remaining.',
      },
      {
        rank: '9',
        label: 'Protect',
        description: 'Chance to shield Joker from an otherwise fatal attack.',
      },
      {
        rank: 'MAX',
        label: 'Second Awakening',
        description: 'Transforms Person into a mythological trickster.',
      },
      {
        rank: 'ROYAL',
        label: 'Second Awakening R',
        description:
          'Fuse with the mythological Trickster, awakening its true power.',
      },
    ],
    conversations: [
      {
        label: 'Rank 2',
        note: '',
        responses: [
          [
            'We’re just getting started. +2',
            'Go easy on me. +0',
            'I’m so done with this. +2',
          ],
          ['Next time, then. +2', 'You doing okay? +0', 'Lucky for me… +0'],
          ['I see. +0', 'So now…? +0'],
          ['No problem. +0', 'You sure? +0', 'Uh, romantically? +0'],
          [
            'Leave it to me. +0',
            'Let’s give it a try. +0',
            'Then follow my lead. +0',
          ],
          [
            'Impressive. +2',
            'Gotta push through it. +0',
            'You did eat eventually, right? +0',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          ['Making bento? +3', 'Potluck parties? +0', '“This” being…? +0'],
          [
            'I’m touched! +2',
            'It looks delicious. +2',
            'Let’s see if it’s good… +0',
          ],
          [
            'Is that all for you? +3',
            'That seems a little much. +2',
            'What IS that? +0',
          ],
          [
            'This tastes like… +0',
            'It’s definitely unique. +2',
            'It’s… greeeaaat… +0',
          ],
          ['Not exactly. +0', 'Is there a third option…? +0'],
          ['Calm down. +0', 'You’re going to get it now? +0'],
          [
            'This works fine as is. +0',
            'I’m enjoying this. +0',
            'Let’s just eat. +0',
          ],
          [
            'You could try again sometime? +3',
            'It happens. +3',
            'Just keep at it. +3',
          ],
          ['That sounds right. +0', 'Maybe… +0'],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'You have bad eyesight? +0',
            'You’re looking to buy? +2',
            'I have enough glasses. +0',
          ],
          [
            'A pretty modern look. +3',
            'Not my style. +0',
            'I look so aloof in these. +2',
          ],
          ['Do they suit your dad, though? =0', 'I’m not so sure… +0'],
          ['Of course. +2', 'Let’s keep going. +2', 'Sure, whatever. +0'],
          ['Trust your instincts. +0', 'Don’t overthink it. +0'],
          ['Good choice. +2', 'I’m sure he’ll love it. +0'],
          [
            'It’s part of our deal. +0',
            'Not a problem at all. +0',
            'I expect compensation. +0',
          ],
          ['Everyone deals with that. +2', 'That’s your slump talking. +0'],
          [
            'Good luck. +0',
            'We’ll work at it together. +2',
            'No rush, though. +0',
          ],
          [
            'I’m glad to hear that. +2',
            'You should  be more confident. +2',
            'Of course he is. +0',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'It’s a surprise, yea. +2',
            'Not at all. +0',
            'What are you scheming? +0',
          ],
          ['This seems kind of sudden. +0', 'If I’m just watching… +0'],
          [
            'It’s a good idea. +2',
            'Go ahead. I’ll watch. +3',
            'Maybe stick to gymnastics. +0',
          ],
          [
            'Don’t give up. +0',
            'Just don’t lose hope. +0',
            'You can beat this, right? +0',
          ],
          ['Congratulations. +3', 'I saw! +3', 'How’s that feel? +2'],
          ['That’s important. +3', 'Don’t forget how that feels. +2'],
          ['Nicely done. +0', 'It’s not over yet. +0'],
          ['Swimming. +3', 'Running. +2', 'Gymnastics. +3'],
        ],
      },
      {
        label: 'Rank 6',
        note: 'Requires Moving Towards the True Ending',
        responses: [
          [
            'It wasn’t on purpose. +0',
            'What could you have done? +0',
            'At least you realize it now. +0',
          ],
          [
            'Don’t beat yourself up. +0',
            'What’ll you do now? +0',
            'Calm down. +0',
          ],
          [
            'You two were close, then. +0',
            'Those must be good memories. +0',
            'All for ice cream, huh? +0',
          ],
          ['… That IS genius. +0', 'How old was she again? +0'],
          ['She cared about you. +0', 'Sounds like tough training. +0'],
          ['Why? +0', 'I can imagine. +0'],
          [
            'It must have been hard. +0',
            'What about Kasumi’s feelings? +0',
            'Sounds like running away. +0',
          ],
          [
            'You have to accept it. +0',
            'Try not to think about it. +0',
            'So what happens now? +0',
          ],
          [
            'I will. +0',
            'I can manage that. +0',
            'If it’s part of the deal. +0',
          ],
          [
            'Do you want to run away? +0',
            'You have to face it. +3',
            'So what if it is? +3',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          ['Maybe. +0', 'Who Knows? +0', 'Were you frustrated? +0'],
          ['Is she scary? +0', 'Is she strict? +0'],
          [
            'You okay? +3',
            'That was a big sigh. +0',
            'She’s a real taskmaster. +0',
          ],
          [
            'That isn’t true. +3',
            'You need more confidence. +0',
            'That’s just a mental block. +0',
          ],
          ['It’ll be like a duet. +0', 'You’ll become stronger. +0'],
          [
            'Of course. +3',
            'I could watch you forever. +3',
            'Another love confession? +3',
          ],
          [
            'I was internally screaming. +0',
            'Yeah, it was a breeze. +0',
            'I love a good challenge. +3',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'Walk up to Sumire. +3',
            'Watch her from a distance. +0',
            'Slowly walk away. +0',
          ],
          ['Look at yourself. +0', 'You’re just standing out. +0'],
          [
            'Try to stay positive. +3',
            'I’m here for you. +3',
            'It’ll work out. +3',
          ],
          ['What is it? +0', '…… +0'],
          ['You started it. +0', 'What, I can’t look at you? +0'],
          ['It looks great. +3', 'You look really cute. +3', 'I’m in love. +3'],
          ['Did I help? +0', 'You found your answer? +0'],
          ['I see… +0', 'So that’s how it was. +0'],
          ['That’s how it should be. +3', 'Sounds like progress. +3'],
          ['The airsoft shop. +0', 'The resale shop. +3', 'Online. +3'],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          ['It’s no problem. +3', 'We’ll call it holiday hours. +3'],
          ['Definitely. +3', 'Of course. +3'],
          ['Of course I do. +3', 'Vaguely… +0', 'What about it? +0'],
          [
            'I know you did. +3',
            'You’re not worthless. +3',
            'This is a new beginning. +3',
          ],
          ['What’s going on? +0', 'There’s something else? +0', 'Go ahead. +3'],
          ['What? +0', 'In luh? +0'],
          ['Let’s stay friends, okay? +0', 'I love you too. +0 (ROMANCE)'],
          ['Calm down. +3', 'Take your time. +3'],
          [
            'So? Any different? +3',
            'You are so red right now. +3',
            'You’re so cute. +3',
          ],
          [
            'Get used to it. +3',
            'Should I hang up…? +0',
            'That’s just how it is. +0',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          ['You look radiant today. +0', 'Now I’m getting nervous. +0'],
          ['It’s all Sumire. +0', 'Just watch. +0'],
          ['Calm down. +0', 'Don’t rush it. +0'],
          [
            'You must be happy. +0',
            'I’m so relieved. +0',
            'It’s only natural, Sumire. +0',
          ],
          [
            'And that is…? +3',
            'What do you mean? +3',
            'Is it someone you love? +3',
          ],
          ['And there’s more to come. +0', 'You were amazing out there. +0'],
          [
            'I’ll stop if you want. + 0',
            'I feel the same way. +0',
            'I don’t want to let you go. +0',
          ],
          [
            'I’m counting on you. +3',
            'Don’t get ahead of yourself. +3',
            'We’re our world’s champions. +3',
          ],
        ],
      },
    ],
  },
  {
    id: 'Fortune',
    name: 'Chihaya Mifune',
    availabilities: [
      ['Monday', 'Day', false],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', false],
      ['Tuesday', 'Night', true],
      ['Wednesday', 'Day', false],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', false],
      ['Thursday', 'Night', true],
      ['Friday', 'Day', false],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', false],
      ['Saturday', 'Night', true],
      ['Sunday', 'Day', false],
      ['Sunday', 'Night', true],
      ['Rainy', 'Day', false],
      ['Rainy', 'Night', false],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Lucky Reading',
        description:
          'Temporarily increases the growth rate of a selected social stat.',
      },
      {
        rank: '3',
        label: 'Money Reading',
        description: 'Temporarily increases money earned from battle.',
      },
      {
        rank: '5',
        label: 'Affinity Reading',
        description: 'Deepens your bond with a Confidant of your choice.',
      },
      {
        rank: '7',
        label: 'Special Fate Reading',
        description:
          'Provides a preview of all abilities for a Confidant of your choice.',
      },
      {
        rank: '8',
        label: 'Celestial Reading',
        description:
          'Triggers a Fusion Alarm, then raising alarm chances until end of day.',
      },
      {
        rank: 'MAX',
        label: 'Special Bond Reading',
        description:
          'Triggers a Fusion Alarm, then raising alarm chances until end of day.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note:
          'How to Unlock: This is rather straightforward but does take some time before things begin rolling. You will need to visit Chihaya three times in Shinjuku before she gives you a Mementos Request. After completing this, go see her once more for the first rank of the Fortune Confidant to unlock.',
        responses: [
          [
            'I’ll be there. +3',
            'Such a hassle. +1',
            'You’re pretty extreme… +1',
          ],
        ],
      },
      {
        label: 'Rank 2',
        note: '',
        responses: [
          [
            'Suggest she gives up.',
            'Change her boss’s heart.',
            'Encourage her. +0',
          ],
          ['Hrahhh!', 'Overturn your fate! +0', 'Fight the power!'],
          ['You’re so stubborn +0', 'Open your mind to change. +2'],
          ['Of course I am. +2', 'And if I am? +0', 'Are you stalking me? +0'],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          ['Go for the money.', 'Follow his heart. +0', 'Chase a promotion.'],
          [
            'Thieves may steal her away. +0',
            'Marriage kills individuality.',
            'She’ll be sad if you break it off.',
          ],
          ['I’m not, sorry. +0', 'Who knows…? +0'],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'You’re only realizing that now? +0',
            'Do you want to test it again? +0',
          ],
          [
            'Strengthen your will. +2',
            'I don’t know. +0',
            'Trust in yourself. +3',
          ],
          ['Tell me more. +0', 'That sounds so peaceful. +0'],
          ['…The chairman? +0', 'I’m not sure I follow. +0'],
          ['I think it’ll work. +0', 'It all depends on you. +0'],
          [
            'I’m glad to hear that. +0',
            'I didn’t do much. +2',
            'Tell me more about your home. +0',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'You’re such a hard worker. +3',
            'What about divine power? +0',
            'You must have lots of free time. +2',
          ],
          ['But what? +0', 'Did you spend it all? +0'],
          ['Who was he? +0', 'Maiden? +0', 'Are you in trouble? +0'],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'I like fortune-telling. +0',
            'She’s really cool. +0',
            'I’m doing research for school. +0',
          ],
          ['…Maiden of Relief? +0', 'This has to be a joke. +0'],
          ['This guy’s sketchy. +0', 'Leave her alone. +0'],
          [
            'What’s a Maiden of Relief? +0',
            'Who thinks you’re a monster? +0',
            'You’re just Chihaya to me. +3',
          ],
          [
            'No need to strain yourself. +0',
            'Be honest with yourself. +2',
            'We’ll work on it together. +0',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          [
            'You’re not wrong about that. +0',
            'You shouldn’t have tricked them. +2',
            'I don’t think so. +3',
          ],
          [
            'Are you gonna be okay? +2',
            'Be careful. +2',
            'So the Maiden’s taking action. +0',
          ],
        ],
      },
      {
        label: 'Rank 7.5',
        note: '',
        responses: [
          ['How so? +0', 'What have you found? +0'],
          ['Tell me his name. +0', 'What’s Fukurai’s first name? +0'],
          ['I can’t tell you. +0', 'Don’t worry about it. +0'],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          ['I had no idea. +2', 'I know. +3'],
          [
            'I’m glad to hear that. +3',
            'That’s some good luck. +3',
            'It’s because you’re strong. +3',
          ],
          ['Why do you ask? +0', 'Hell yeah I am. +3'],
          [
            'You give me too much credit. +0',
            'It was all your own will. +2',
            'I knew it would happen. +0',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          [
            'You really don’t understand. +0',
            'Listen to what Chihaya’s saying. +0',
          ],
          [
            'Do you regret what you did? +0',
            'Well, fate can be changed. +3',
            'That’s all in the past now. +2',
          ],
          [
            'I like having my fortune read. +0',
            'So I can be with you. +0 (ROMANCE)',
          ],
          [
            'I wanted to hear your voice too. +2',
            'Oh, you didn’t mean it…? +0',
            '….. +0',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          ['You’ve never been here? +0', 'It wasn’t that far away. +0'],
          ['I support you. +3', 'You have strong convictions. +3'],
          [
            'I wonder if you’re right… +0',
            'So what if I am the Trickster? +0',
            'You’re pretty sharp. +0',
          ],
          [
            'It’s not a problem. +0',
            'Are you worried about me? +0',
            'What does it mean? +0',
          ],
          ['Thank you.+0', 'That’s really reassuring. +0'],
          ['I don’t care about that. +2', 'It’s actually pretty cute. +3'],
          ['I was hoping you’d say that. +0', 'I don’t want to go home. +0'],
        ],
      },
    ],
  },
  {
    id: 'Hanged Man',
    name: 'Munehisa Iwai',
    availabilities: [
      ['Monday', 'Day', false],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', false],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', false],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', false],
      ['Thursday', 'Night', true],
      ['Friday', 'Day', false],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', false],
      ['Saturday', 'Night', true],
      ['Sunday', 'Day', false],
      ['Sunday', 'Night', true],
      ['Rainy', 'Day', true],
      ['Rainy', 'Night', true],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Starter Customization',
        description: 'Allows you to customize your gun and install upgrades.',
      },
      {
        rank: '3',
        label: 'Camo Customization',
        description:
          'Allows you to customize camouflage on you gun, which can inflict ailments.',
      },
      {
        rank: '5',
        label: 'Discount',
        description: 'Decreases the cost of gun customization.',
      },
      {
        rank: '7',
        label: 'Expert Customization',
        description: 'Unlocks more parts for customization.',
      },
      {
        rank: 'MAX',
        label: 'On The House',
        description: 'Allows you to customize your gun for free.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note: 'Level 4 Courage Required',
        responses: [
          [
            'Leave it to me. +1',
            'As long as it’s safe… +1',
            'So what’s my first job? +3',
          ],
        ],
      },
      {
        label: 'Rank 2',
        note: '',
        responses: [
          ['Maybe I should call him. +0', '… Iwai seems sick. +0'],
          ['Nothing in particular. +0', 'I was daydreaming, sorry. +0'],
          [
            'Who was that guy? +0',
            'What should I do now? +2',
            'How’s your cold? +2',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          ['I know how it feels. +0', 'Is it seriously that hard? +0'],
          [
            'I always knew you were a thug. +3',
            'Oh. I, uh… have to go. +0',
            'Y-Yakuza!? +2',
          ],
          [
            'Not really. +0',
            'No, I like that stuff. +0',
            'We made a deal, didn’t we? +3',
          ],
          [
            'Is that one of your customers? +0',
            'Why are you being so mean? +0',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'Iwai. +0',
            'I can’t tell you. +0',
            'It’s none of your business. +0',
          ],
          [
            'What was that about? +0',
            'So that was Tsuda? +0',
            'What did he mean, “sell” him? +0',
          ],
          ['Hong Kong mafia. +0', 'A 100 million yen deal. +0'],
          [
            'Give it your all. +0',
            'You two should play nice. +2',
            'Where’s my reward. +3',
          ],
          ['I agree. +2', 'Is that a threat? +0', 'What’s the issue? +0'],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          ['Why not? +0', 'You shouldn’t lie to your son. +0'],
          [
            'You’re so kind, Iwai. +0',
            'You’re pathetic. +3',
            'You should call the cops. +0',
          ],
          [
            'That’s right. +2',
            'Don’t make assumptions. +0',
            'I’ll stick around for the guns. +3',
          ],
          [
            'You’re right. +2',
            'Is it really all for Kaoru? +0',
            'Well, you got this. +0',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          ['Why would he say that? +0', 'No, nothing even close. +0'],
          ['He definitely does. +0', 'You should ask him. +0'],
          ['Our futures. +2', 'Girls. +3', 'That’s a secret. +3'],
          [
            'Right. +2',
            'You should tell him, Iwai. +0',
            'You should buy us something. +3',
          ],
          [
            'He’s my age, so it comes easier. +2',
            'All I did was listen to him. +2',
            'It’s part of the job. +0',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          ['Not at all. +0', 'Absolutely. +3', 'I guess he likes guns? +2'],
          [
            'That’s horrible. +0',
            'He’s clever. +3',
            'What a crafty bastard. +2',
          ],
          ['Is Tsuda seriously dangerous? +0', 'Are you going alone? +0'],
          [
            'Bring it on. +2',
            'I’m worried… +0',
            'So what’s our first move? +0',
          ],
        ],
      },
      {
        label: 'Rank 7.5',
        note: 'MAX Courage Required',
        responses: [
          [
            'It most definitely was. +2',
            'I did it all for Iwai. +3',
            'Actually, it’s been fun. +0',
          ],
          ['I will. +2', 'I want to help you. +2', 'I can’t. +0'],
          ['What’s his full name? +0', 'Tell me his name. +0'],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          ['It’s not impossible. +0', 'I dunno. +2', 'He’s matured. +0'],
          [
            'I’m back, baby. +2',
            'I guess I could consider it. +3',
            'If you pay me well. +3',
          ],
          [
            'Understood. +2',
            'You worry too much. +0',
            'Now let’s catch him off-guard. +0',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          [
            'That’s great news. +2',
            'I feel bad for him. +0',
            'Are you sure he’s alive? +3',
          ],
          ['Who’s Masa? +0', 'Will Karou be OK? +0'],
          ['We should hurry. +0', 'Let’s close up shop. +0'],
          ['What’s your goal here, Masa? +0', 'Cut the bullshit. +0'],
          ['Tell him the truth. +3', 'You need to trust your son. +3'],
          [
            'Karou is really strong-willed. +3',
            'He gets that maturity from you. +2',
            'He’s a cool kid, huh? +3',
          ],
          [
            'Like father, like son. +2',
            'Gecko bonds go beyond blood. +2',
            'Why not newts? +0',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          [
            'It’s up to you now, Iwai. +3',
            'Kaoru won’t lose. +3',
            'Iwai’s kind of slow. +0',
          ],
          ['I couldn’t leave him. +0', 'It was for the special menu. +0'],
          [
            'It’s a coincidence. +0',
            'Should we close up? +0',
            'What if you’re right? +2',
          ],
        ],
      },
    ],
  },
  {
    id: 'Hermit',
    name: 'Futaba Sakura',
    availabilities: [
      ['Monday', 'Day', false],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', false],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', true],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', true],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', false],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', true],
      ['Saturday', 'Night', false],
      ['Sunday', 'Day', true],
      ['Sunday', 'Night', false],
      ['Rainy', 'Day', false],
      ['Rainy', 'Night', false],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Moral Support',
        description:
          'Chance to cast Kaja or party-healing magic during battle.',
      },
      {
        rank: '2',
        label: 'Mementos Scan',
        description:
          'Chance to fully map the floor of Mementos when entering that floor.',
      },
      {
        rank: '4',
        label: 'Position Hack',
        description:
          'Chance to instantly Hold Up enemies when starting a battle.',
      },
      {
        rank: '6',
        label: 'Active Support',
        description: 'Moral Support may now Charge or recover SP.',
      },
      {
        rank: '7',
        label: 'Treasure Reboot',
        description:
          'Chance to revive search objects in the area after battle.',
      },
      {
        rank: '9',
        label: 'Emergency Shift',
        description:
          'Chance to swap current party with backups when 2 or more people are KO’d.',
      },
      {
        rank: 'MAX',
        label: 'Final Guard',
        description:
          'Chance to nullify a fatal attack to a current party member.',
      },
      {
        rank: 'MAX',
        label: 'Second Awakening',
        description: 'Transforms her Persona into a mythological trickster.',
      },
      {
        rank: 'ROYAL',
        label: 'Second Awakening R',
        description:
          'Fuse with the mythological Trickster, awakening its true power.',
      },
    ],
    conversations: [
      {
        label: 'Rank 2',
        note: 'Level 4 Kindness Required',
        responses: [
          ['That wouldn’t solve anything. +0', 'That’s a great idea. +2'],
          [
            'If we work together. +3',
            'Want me to help? +2',
            'I don’t know. +0',
          ],
          ['Sounds good to me. +0', 'Can you tell me again? Repeat Response'],
          [
            'I bet it will. +2',
            'I’m not sure. +0',
            'Why not ask him directly? +0',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          [
            'I what? +0',
            'So you’re OK? +0',
            'I was about to come find you. +3',
          ],
          [
            'Good to see you again. +3',
            'You’re the one who appeared. +2',
            'You need to be more careful. +0',
          ],
          [
            'It’ll only get tougher. +0',
            'You will. +0',
            'We’ll both do our best. +2',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          ['Nope. +2', 'Let’s do this together. +3', 'If you want. +0'],
          ['No, you’re talented. +0', 'I bet they were just surprised. +0'],
          ['Not at all. +2', 'Everyone does it. +2', 'I think it’s cute. +3'],
          [
            'We’ll take it slow. +2',
            'You need more training. +0',
            'I’ll help you anytime. +2',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          ['He’s in my class. +0', 'Friend might be a bit much. +0'],
          ['I think you’re right. +3', 'No. +0', 'Your… what? +2'],
          ['What’s an NPC? +2', 'Savage. +0', 'He’s the protagonist. +3'],
          [
            'You did great. +2',
            'That’s nothing special. +0',
            'Ding! Level up! +0',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'Were you happy? +2',
            'That must have been a shock. +3',
            'How did you react? +0',
          ],
          [
            'You didn’t know any better. +2',
            'Did you apologize to her? +0',
            'Sounds like it was her fault. +0',
          ],
          ['Understood. +0', 'Someone’s pushy today. +0'],
          [
            'Are you running away again? +2',
            'Let’s calm down first. +0',
            'I’m right here with you. +0',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          [
            'What horrible parents. +2',
            'We have to put a stop to this. +2',
            'Strange… how? +0',
          ],
          [
            'I’ll do it, for you. +3',
            'We’ll show them the truth. +3',
            'Give me some time. +2',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'That’s incredible. +3',
            'I’m glad to hear that. +3',
            'Did you stutter at all? +2',
          ],
          [
            'You worked really hard too. +3',
            'You’re making me blush… +2',
            'Do I get a reward? +0',
          ],
          ['Fine by me. +0', 'That’s all? +0'],
          ['Congrats. +2', 'You’ve still got more. +0', 'Want more pats? +2'],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          ['You’ve really matured. +3', 'What if you get bullied again? +2'],
          [
            'That doesn’t sound healthy… +0',
            'Are you OK, Futaba? +3',
            'You’re imagining things. +2',
          ],
          ['If you want. +2', 'No way. +2', 'You’re giving up? +0'],
          [
            'Because we’re teammates. +0 END',
            'Because I love you. +0 (ROMANCE)',
          ],
          [
            'I would like that / If that’s OK with you. +0',
            'Um, Hello? / Is something wrong? +0',
            'Earth to Futaba? / Are you still alive? +0',
          ],
          [
            'Instant yakisoba. +0',
            'Morgana. +0',
            'Do I really have to say it? +2',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          [
            'What are you talking about? +0',
            'Don’t worry about it. +0',
            '…Pardoned? +0',
          ],
          ['Mission complete. +0', 'Nice job, Futaba. +0', 'You did great. +0'],
          ['I know. +0', 'I don’t mind. +0', 'I like being close. +0'],
          ['What’s wrong. +0', 'Come closer. +0'],
          [
            'Take your time. +3',
            'You can do this. +3',
            'We’ll do it together. +3',
          ],
          ['You can’t lose to her. +3', 'Do you want a job too? +2'],
          [
            'I honor my promises. +0',
            'Just keep it cheap. +0',
            'You remember that? +0',
          ],
          ['I’m counting on you. +0', 'That’s a lot of pressure. +0'],
          [
            'You already have that right. +3',
            'Took you long enough to ask. +3',
            'I want that right too. +3',
          ],
        ],
      },
    ],
  },
  {
    id: 'Hierophant',
    name: 'Sojiro Sakura',
    availabilities: [
      ['Monday', 'Day', false],
      ['Monday', 'Night', true],
      ['Tuesday', 'Day', false],
      ['Tuesday', 'Night', true],
      ['Wednesday', 'Day', false],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', false],
      ['Thursday', 'Night', true],
      ['Friday', 'Day', false],
      ['Friday', 'Night', true],
      ['Saturday', 'Day', false],
      ['Saturday', 'Night', true],
      ['Sunday', 'Day', false],
      ['Sunday', 'Night', true],
      ['Rainy', 'Day', true],
      ['Rainy', 'Day', true],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Coffee Basics',
        description:
          'Allows you to make coffee which slightly restores SP to one ally.',
      },
      {
        rank: '4',
        label: 'Leblanc Curry',
        description:
          'Allows you to make curry that slightly restores SP to all allies.',
      },
      {
        rank: '6',
        label: 'Coffee Mastery',
        description:
          'Allows you to make coffee which greatly restores SP to one ally.',
      },
      {
        rank: '9',
        label: 'Curry Tips',
        description:
          'Allows you to make curry that moderately restores SP to all allies.',
      },
      {
        rank: 'MAX',
        label: 'Curry Master',
        description:
          'Allows you to make curry that greatly restores SP to all allies.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note: '',
        responses: [
          [
            'Got it. +3',
            'That was our deal. +2',
            'It’s the least I can do. +2',
          ],
        ],
      },
      {
        label: 'Rank 2',
        note: '',
        responses: [
          ['Making coffee. +2', 'Hitting on girls. +0', 'No idea. +0'],
          [
            'Who was he? +0',
            'That guy seemed suspicious. +2',
            'Who’s the “her” he mentioned? +0',
          ],
          [
            'I want the ladies to love me. +2',
            'I don’t care about that stuff. +0',
          ],
          ['Got it. +2', 'Give me a break. +0', 'Why’d you call my cell? +0'],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          ['Medium-fine. +2', 'Coarse. +0', 'Anything goes. +0'],
          [
            'Is it a date? +0',
            'Is it trouble?? +2',
            'You don’t want my help anymore? +0',
          ],
          [
            'I’m ready to work. +2',
            'Go easy on me. +0',
            'Thank you in advance. +2',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'Tell me more. +3',
            'That sounds tough… +0',
            'It all tastes the same to me. +0',
          ],
          ['Run for help +0', 'Call Sojiro’s phone +3', 'Kick the man out +0'],
          [
            'Understood. +2',
            'I’m kind of nervous… +0',
            'I’ll kick him out. +0',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: 'Restricted Until After 8/22',
        responses: [
          [
            'It wasn’t bad. +2',
            'Nothing special. +0',
            'I think I’m addicted! +3',
          ],
          [
            'She was like Futaba? +2',
            'She wasn’t normal, huh? +3',
            'So that’s why you’re a bachelor? +0',
          ],
          [
            'It really paid off in the end. +2',
            'Almost brings a tear to my eye. +0',
            'So much history… +0',
          ],
          [
            'Sounds good to me. +0',
            'She needs a balanced diet. +2',
            'There’s always instant noodles. +0',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          ['I admire it. +0', 'I’m not impressed. +0', 'To each his own. +2'],
          ['You’re wrong. +2', 'I’m sorry. +0', 'Shut your mouth. +3'],
          [
            'Saving Futaba was no mistake. +2',
            'Just cut your ties with him. +0',
          ],
          ['Is she okay? +0', 'Try to relax. +0', 'If I can help somehow… +3'],
        ],
      },
      {
        label: 'Rank 7',
        note: 'MAX Kindness Required',
        responses: [
          [
            'You might be right. +3',
            'That’s not true. +0',
            'They’re still delicious. +0',
          ],
          [
            'Are you alright? +0',
            'Have you calmed down? +0',
            'Do you want to talk? +0',
          ],
          [
            'Let’s talk to him. +0',
            'You should tell him that. +0',
            'You guys are one awkward duo. +0',
          ],
          [
            'I’m truly glad. +0',
            'You’re welcome. +0',
            'Feel like a real dad now? +3',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'You want my suggestion? +2',
            'Something with curry. +3',
            'I can’t decide! +0',
          ],
          [
            'I didn’t do anything wrong. +0',
            'I was just protecting Futaba. +3',
            'Sorry. +0',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          ['It’s great. +3', 'He’s a bit of a nag. +3'],
          [
            'Are you crying? +0',
            'You have a great daughter. +3',
            'Congrats. +3',
          ],
          [
            'You did great. +3',
            'Futaba did great. +3',
            'You two were already family. +2',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          [
            'For what? +0',
            'You guys are religious? +0',
            'I’m not interested. +0',
          ],
          ['Good for you. +3', 'Thank you. +3'],
        ],
      },
    ],
  },
  {
    id: 'Justice',
    name: 'Goro Akechi',
    benefits: [
      {
        rank: '2',
        label: 'Sleuthing Instinct',
        description:
          'Chance to reveal one enemy affinity at the start of battle.',
      },
      {
        rank: '4',
        label: 'Smooth Talk',
        description:
          'If negotiation with a god-like Shadow fails, you can try again.',
      },
      {
        rank: '6',
        label: 'Sleuthing Mastery',
        description:
          'Chance to reveal all of one enemy’s affinities at the start of battle.',
      },
      {
        rank: '6',
        label: 'Follow Up',
        description:
          'Chance to perform a follow-up attack if Joker’s attack does not down the enemy.',
      },
      {
        rank: '7',
        label: 'Harisen Recovery',
        description:
          'Chance to cure status ailments inflicted upon party members.',
      },
      {
        rank: 'MAX',
        label: 'Endure',
        description:
          'Chance to withstand an otherwise fatal attack with 1 HP remaining.',
      },
      {
        rank: 'MAX',
        label: 'Protect',
        description: 'Chance to shield Joker from an otherwise fatal attack.',
      },
      {
        rank: 'ROYAL',
        label: 'Second Awakening R',
        description:
          'Fuse with the mythological Trickster, awakening its true power.',
      },
    ],
    conversations: [
      {
        label: 'Rank 2',
        note: '',
        responses: [
          ['You always seem so busy. +2', 'Do you have no friends? +0'],
          ['Is that your win? +0', 'Not bad. +0'],
          ['Shoot very carefully. +2', 'I’ll go for a power shot. +2'],
          ['You used your right hand. +0', '…Aren’t you left-handed? +0'],
          [
            'Maybe i’ll be a detective. +2',
            'No holding back next time. +2',
            'I see a lot of things. +3',
          ],
          ['Sure. +0', 'I’ll think about it. +0', 'As rivals? +2'],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          ['Got a sweet tooth, huh? +0', 'Come here often? +0'],
          [
            'Should’ve figured. +3',
            'Your life must be so hard. +2',
            'I can shoo them away… +0',
          ],
          ['You’ve done nothing wrong. +0', 'Why the rush? +0'],
          ['How about we find out? +0', 'Come here a sec. +0'],
          [
            'You looked great. +0',
            'It was a necessary evil. +0',
            'I should’ve taken a picture. +0',
          ],
          [
            'That was careless, huh? +0',
            'Wasn’t it fun? +2',
            'I can always dress you up again.',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          ['What kind of place is this? +0', 'This looks shady… +0'],
          [
            'Do they have coffee? +2',
            'But I’m underage. +0',
            'Now this is my kind of club. +3',
          ],
          [
            'Any recommendations? +3',
            'Anything’s fine by me. +2',
            'An ice-cold beer for me. +0',
          ],
          ['It’s a great place. +2', 'I feel a bit nervous. +0'],
          [
            'A run-down cafe. +0',
            'A shop with great coffee. +0',
            'I live there, actually. +0',
          ],
          [
            'Pretty frequently. +3',
            'I can use a microwave. +3',
            'All I need is curry. +2',
          ],
          [
            'What are you talking about? +0',
            'I kinda get it. +2',
            'You really are having fun. +0',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'All the time. +0',
            'I’m not great at them. +0',
            'Have you played any? +0',
          ],
          ['Are you used to gunplay? +2', 'You took that seriously, huh. +0'],
          [
            'You wanted to be a hero? +3',
            'Very interesting. +2',
            'Hard to imagine. +0',
          ],
          [
            'Sticking to your justice. +0',
            'Doing what people want. +0',
            'Neither, really. +0',
          ],
          [
            'You did fine. +2',
            'You’ve got a long way to go. +2',
            'You were getting cocky. +2',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'So relaxing… +2',
            'Seeing you here is weird. +0',
            'A while, huh? +3',
          ],
          ['That was horrible of her. +0', '… You’ve been through a lot. +2'],
          [
            'This is nothing. +3',
            'I’ll stay until you’re ready. +3',
            'Are YOU okay? +2',
          ],
          ['Same. +3', 'I’m just fine. +0', 'Guess I win. +2'],
          ['Because we get along. +2', 'Because we’re similar. +2'],
          [
            'I think you’re right. +3',
            'I don’t know about that. +0',
            'Can I put my clothes on? +2',
          ],
          ['True. +0', 'They’d probably love it. +0', 'My bad, I guess. +2'],
        ],
      },
      {
        label: 'Rank 7',
        note: 'Requires MAX Knowledge',
        responses: [
          ['Yeah, it’s convoluted. +2', 'That’s why it’s so fun. +3'],
          ['The psychotic breakdowns. +0', 'What’re you getting at? +0'],
          ['I’ve made up my mind. +0', 'I won’t miss my shot. +0'],
          ['It’s thanks to you. +2', 'I couldn’t let myself lose. +3'],
          ['But we’re teammates now. +0', 'Wnat to join us? +0'],
          [
            'I’ll think about it. +0',
            'I’m not doing that. +0',
            'You’re my rival. +0',
          ],
          ['Do I? +0', 'I don’t know. +0', 'We’re rivals, aren’t we? +2'],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          ['What’d you want to discuss? +0', 'Why are we in Mementos? +0'],
          [
            'I thought you meant in pool. +0',
            'You want to fight? +0',
            'But why, though? +0',
          ],
          ['All right. +0', 'Let’s do this. +0'],
          [
            'Are you satisfied? +0',
            'Was that all you got? +0',
            'Do you want to keep going? +0',
          ],
          ['I’d say the same for you. +0', 'The feeling mutual. +0'],
          [
            'I definitely wouldn’t lose. +3',
            'I don’t know. +0',
            'Probably. +0',
          ],
          ['Same here. +0', 'Really hate losing, don’t you. +3'],
          ['I accept. +0', 'Let me think about it. +0'],
        ],
      },
      {
        label: 'Rank 9 – MAX',
        note: 'Story Progression',
        responses: [],
      },
    ],
  },
  {
    id: 'Lovers',
    name: 'Ann Takamaki',
    availabilities: [
      ['Monday', 'Day', true],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', true],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', true],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', false],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', true],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', false],
      ['Saturday', 'Night', false],
      ['Sunday', 'Day', true],
      ['Sunday', 'Night', false],
      ['Rainy', 'Day', true],
      ['Rainy', 'Day', true],
    ],
    benefits: [
      {
        rank: '2',
        label: 'Girl Talk',
        description:
          'If negotiation with a female Shadow fails, you can try again.',
      },
      {
        rank: '3',
        label: 'Follow Up',
        description:
          'Chance to perform a follow-up attack if Joker’s attack does not down the enemy.',
      },
      {
        rank: '4',
        label: 'Sexy Technique <3',
        description:
          'Chance to grab the enemy’s attention and cancel their action.',
      },
      {
        rank: '5',
        label: 'Crocodile Tears',
        description:
          'Chance to force enemies to ask for less during negotiations.',
      },
      {
        rank: '6',
        label: 'Harisen Recovery',
        description:
          'Chance to cure status ailments inflicted upon party members.',
      },
      {
        rank: '8',
        label: 'Endure',
        description:
          'Chance to withstand an otherwise fatal attack with 1 HP remaining.',
      },
      {
        rank: '9',
        label: 'Protect',
        description: 'Chance to shield Joker from an otherwise fatal attack.',
      },
      {
        rank: 'MAX',
        label: 'Second Awakening',
        description: 'Transforms her Persona into a mythological trickster.',
      },
      {
        rank: 'ROYAL',
        label: 'Second Awakening R',
        description:
          'Fuse with the mythological Trickster, awakening its true power.',
      },
    ],
    conversations: [
      {
        label: 'Rank 2',
        note: 'Level 2 Kindness Required',
        responses: [
          [
            'Are you feeling better now? +3',
            'She’s so strong. +3',
            'So are you friends again? +2',
          ],
          ['You can’t blame yourself. +2', 'You might be right. +3'],
          ['It was no big deal. +2', 'I couldn’t just ignore you. +3'],
          ['I’ll help. +3', 'Let’s find it together. +3'],
          [
            'Of course, You’re my teammate. +2',
            'Leave it to me. +2',
            'The no-refills thing again? +2',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          ['How’s that? +0', 'You’re amazing. +0'],
          [
            'What kind of stuff…? +0',
            'That’s your training…? +0',
            'I don’t get it. +0',
          ],
          ['You’re stupid. +0', 'You’re an airhead. +0', 'You’re… unique. +0'],
          [
            'You’re a hard worker. +0',
            'That response was annoying. +0',
            'Can we stop yet? +0',
          ],
          ['I like you. +2', 'I love you. +2', 'Can we stop yet? +3'],
          [
            'Listen to me. +0',
            'This won’t help your heart. +0',
            'You’re a genius… +0',
          ],
          ['You’re right. +0', 'You finally get it. +0'],
          ['That’s odd. +2', 'Has that happened to you? +3'],
          ['Are you lonely? +0', 'That freedom sounds nice. +2'],
          [
            'Could be. +2',
            'You’re so self-conscious. +0',
            'Was she a child model? +0',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'I know what you mean. +3',
            'I’m not sure I follow. +0',
            'That comes down to you. +2',
          ],
          [
            'That was mean of her. +2',
            'That’s hilarious. +3',
            'Was she right? +0',
          ],
          ['Tell me. +3', 'I’m afraid to know. +2', '…Who? +0'],
          ['Good idea. +3', 'How exactly? +2'],
          [
            'That’s not going to work. +0',
            'You haven’t learned anything. +0',
            'Good luck with that. +3',
          ],
          [
            'I train everyday. +2',
            'Not really. +0',
            'I carry Morgana in my bag. +2',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          ['Maybe. +0', 'Give it up. +2'],
          ['You’re outmatched. +0', 'She’s amazing, huh… +2'],
          ['It had grace. +2', 'She’d be a great Phantom Thief. +0'],
          ['So how do you do it? +0', 'Tell me more. +0'],
          ['I figured that much. +0', 'I mean, that’s why it’s “fake.” +0'],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'It seems that way. +3',
            'That’s such a simple solution. +0',
            'If it’s a friend, yeah. +2',
          ],
          ['How so? +0', 'Was she working hard? +0', 'Was she in pain? +0'],
          ['You’re not weak. +0', 'It’s because you’re kind. +0'],
          [
            'Comfort her. +3',
            'Listen to what she has to say. +2',
            'Show her your own strength. +3',
          ],
          [
            'Someone’s motivated. +2',
            'I’ll cheer you on. +2',
            'You gonna be okay? +0',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          ['It’s a trap! +0', 'She admires you. +2'],
          [
            'So she could show you up. +0',
            'Because you’re a natural beauty. +0',
          ],
          ['Cheer up. +0', 'Please don’t cry. +0'],
          [
            'You already are one. +0',
            'Go get ‘em, tiger. +2',
            'What about your action movies…? +0',
          ],
          [
            'You got this. +2',
            'Don’t strain yourself. +0',
            'Trying to be like Mika? +0',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'That’s a lot of work… +0',
            'You have some real guts. +3',
            'You’re beautiful as is. +2',
          ],
          [
            'There’s no doubt in my mind. +3',
            'I hope so. +3',
            'Good luck finding it. +3',
          ],
          ['Good advice. +0', 'You’re so dumb, Ryuji… +0'],
          [
            'She’ll be happy to hear that. +3',
            'I’m sure she already knows. +3',
          ],
          [
            'That’s probably it. +2',
            'I wonder. +0',
            'You can ask her yourself. +2',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          [
            'It’s dangerous up here. +0',
            'Step away from the ledge. +0',
            'Why did you want to come here? +0',
          ],
          ['And? +0', 'She’s gone, isn’t she? +0'],
          ['Hang in there. +3', 'I believe in you, Ann. +3'],
          ['You have me. +0 (ROMANCE)', 'You have the others. +0 END'],
          ['You said “I love you.” +0', 'I didn’t hear you. +0'],
          ['Of course. +2', 'I’m yours forever. +2', 'That’s up to you. +0'],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          [
            'You really gave it your all. +3',
            'You still have a ways to go. +2',
            'Everyone was complimenting you. +3',
          ],
          [
            'That’s so embarrassing. +2',
            'I’ll be there with you. +3',
            'You can do it, Ann. +3',
          ],
          ['What’s wrong? +0', 'It’s just the two of us. +0'],
          ['Of course. +3', 'Anything for you. +3'],
          ['I will. +0', 'I already am. +0'],
          ['Of course. +0', 'I should be asking you that. +0'],
          ['Couples? +0', 'Just Once? +0'],
        ],
      },
    ],
  },
  {
    id: 'Moon',
    name: 'Yuuki Mishima',
    availabilities: [
      ['Monday', 'Day', false],
      ['Monday', 'Night', true],
      ['Tuesday', 'Day', false],
      ['Tuesday', 'Night', true],
      ['Wednesday', 'Day', false],
      ['Wednesday', 'Night', true],
      ['Thursday', 'Day', false],
      ['Thursday', 'Night', true],
      ['Friday', 'Day', false],
      ['Friday', 'Night', true],
      ['Saturday', 'Day', false],
      ['Saturday', 'Night', true],
      ['Sunday', 'Day', false],
      ['Sunday', 'Night', true],
      ['Rainy', 'Day', true],
      ['Rainy', 'Night', true],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Mishima’s Support',
        description: 'Allows backup members to earn EXP.',
      },
      {
        rank: '3',
        label: 'Mishima’s Enthusiasm',
        description: 'Increases EXP earned from battle.',
      },
      {
        rank: '5',
        label: 'Mishima’s Desperation',
        description: 'Increases EXP earned by backup members.',
      },
      {
        rank: '7',
        label: 'Phanboy',
        description: 'Greatly increases EXP earned from battle.',
      },
      {
        rank: 'MAX',
        label: 'Salvation Wish',
        description:
          'Allows backup members to earn the same EXP as current party members..',
      },
    ],
    conversations: [
      {
        label: 'Rank 2',
        note: '',
        responses: [
          ['I don’t understand. +0', '…Phan-Site? +0'],
          [
            'You’ve done good, kid. +3',
            'That sounds pretty tough. +0',
            'Is this really necessary? +0',
          ],
          [
            'Uh, strategic… what? +0',
            'Sounds cool. +3',
            'You’re really hyped for this. +2',
          ],
          [
            'Nice hustle, image manager. +2',
            'Calm down. +0',
            'All-nighters can mess you up. +0',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          [
            'I’ve never heard that before. +0',
            'Great idea. +3',
            'I’m already taken. +2',
          ],
          [
            'I’m worried about this… +0',
            'We’re part of… The Phandom? +2',
            'Let’s tell them the truth. +2',
          ],
          [
            'It’s not your fault. +2',
            'Don’t overwork yourself. +0',
            'I can’t trust anyone anymore… +0',
          ],
          ['Of course. +2', 'Really? +2', 'You’ll get it right next time. +2'],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'Steak sounds good. +3',
            'Some nice organic veggies. +0',
            'I love desserts. +2',
          ],
          [
            'You’re amazing. +2',
            'That sounds like a scam. +0',
            'Stop this at once. +0',
          ],
          [
            'You’re right. +0',
            'Of course it would. +0',
            'Maybe we can keep it. +0',
          ],
          [
            'Yup. +2',
            'That’s one way to view it. +0',
            'You’ll get better ideas. +2',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'Why was it so expensive? +2',
            'It looks almost real. +0',
            'Is it for me? +3',
          ],
          [
            'That’s a good idea. +2',
            'Are you sure that’s necessary? +0',
            'Don’t do anything stupid. +0',
          ],
          [
            'All right. +2',
            'I expect great things. +0',
            '… Did something happen. +0',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'Just tell me already. +2',
            'I’m not interested. +0',
            'You sure are fired up… +2',
          ],
          [
            'Calm yourself. +0',
            'Rumors are wrong all the time… +2',
            'It’s none of your business. +0',
          ],
          ['Why? +0', 'I didn’t ask for that. +0'],
          ['Is that right…? +0', 'Absolutely. Nice job. +2'],
        ],
      },
      {
        label: 'Rank 6.5',
        note: '',
        responses: [
          [
            'And what exactly will we win? +2',
            'You’re so reliable. +3',
            'Chill out, dude. +0',
          ],
          [
            'Sounds pretty twisted. +2',
            'By changing their hearts? +0',
            'You really need to chill. +2',
          ],
          ['Fun…? +0', 'This isn’t like you. +0', 'You’re worrying me. +0'],
          ['We very well might. +0', 'Are you feeling guilty? +0'],
          ['Let’s go. +0', 'This is the only way… +0'],
          [
            'You’re riding our coattails. +0',
            'Would that really satisfy you? +0',
          ],
          ['Do it yourself. +0', 'We’re leaving. +0', 'There’s no need. +0'],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          [
            'I don’t wanna change his heart. +0',
            'Let’s cancel the request. +0',
          ],
          ['Stop worrying about fame. +0', 'You still care about fame? +0'],
          ['I’m sure there is. +2', 'I hope so. +0', 'Maybe the Phan-Site? +3'],
          [
            'Kind of worrying… +2',
            'Be careful. +0',
            'It’s your time to shine. +2',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'I’m not leaving. +3',
            'You should run too. +2',
            'What are you going to do? +0',
          ],
          [
            'You’re just gonna take that? +2',
            'Believe in yourself. +2',
            'They’re the real losers. +2',
          ],
          [
            'Totally. +2',
            'You were super cool. +3',
            'Wait, that was all an act? +3',
          ],
          ['You’ll be fine. +2', 'Calm down. +0', 'You’ve got this, man. +2'],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          [
            'You, dead as a doornail. +0',
            'You showed some real courage. +3',
            'I’m glad you’re still alive. +2',
          ],
          ['Something like that. +0', 'Exactly. +0'],
          [
            'Don’t use our real names. +0',
            'This came out of nowhere. +0',
            'I can’t wait to watch it. +0',
          ],
          [
            'Meh. +0',
            'What about a parfait instead? +0',
            'I’m feeling steak, actually. +0',
          ],
          ['The sparkle in your eye. +2', '….. +0', 'Your hair? +0'],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          ['Did you find your answer? +0', 'Were you scared stiff? +0'],
          ['That was courageous. +3', 'But you were afraid. +2'],
          [
            'I didn’t do anything. +0',
            'Nobody stole your heart. +0',
            'You changed yourself. +0',
          ],
          [
            'I’m sure you will. +0',
            'Make it a bestseller. +0',
            'You have to write it first. +0',
          ],
        ],
      },
    ],
  },
  {
    id: 'Priestess',
    name: 'Makoto Niijima',
    availabilities: [
      ['Monday', 'Day', false],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', true],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', false],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', true],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', false],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', true],
      ['Saturday', 'Night', false],
      ['Sunday', 'Day', true],
      ['Sunday', 'Night', false],
      ['Rainy', 'Day', true],
      ['Rainy', 'Night', true],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Shadow Calculus',
        description:
          'Allows you to see skills and potential item drops on the analysis screen.',
      },
      {
        rank: '3',
        label: 'Black Belt Talk',
        description:
          'If negotiation with a martial arts-using Shadow fails, you can try again.',
      },
      {
        rank: '4',
        label: 'Follow Up',
        description:
          'Chance to perform a follow-up attack if Joker’s attack does not down the enemy.',
      },
      {
        rank: '5',
        label: 'Harisen Recovery',
        description:
          'Chance to cure status ailments inflicted upon party members.',
      },
      {
        rank: '7',
        label: 'Shadow Factorization',
        description:
          'Allows you to see Null, Repel, and Drain when highlighting a target in battle.',
      },
      {
        rank: '8',
        label: 'Endure',
        description:
          'Chance to withstand an otherwise fatal attack with 1 HP remaining.',
      },
      {
        rank: '9',
        label: 'Protect',
        description: 'Chance to shield Joker from an otherwise fatal attack.',
      },
      {
        rank: 'MAX',
        label: 'Second Awakening',
        description: 'Transforms her Persona into a mythological trickster.',
      },
      {
        rank: 'ROYAL',
        label: 'Second Awakening R',
        description:
          'Fuse with the mythological Trickster, awakening its true power.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note: 'Level 3 Knowledge Required',
        responses: [
          [
            'Let’s go again sometime. +2',
            'It’s a new you. +1',
            'The red-light district next +3',
          ],
        ],
      },
      {
        label: 'Rank 2',
        note: '',
        responses: [
          [
            'You’re very well informed. +2',
            'Have you ever been here? +0',
            'Stay close to me. +0',
          ],
          [
            'You should have known better. +2',
            'That was dangerous. +3',
            'You get flustered easily, huh? +0',
          ],
          ['Why is it called a salon? +0', 'What kind of place is that? +0'],
          [
            'Couldn’t agree more. +2',
            'He just wouldn’t give up. +0',
            'Let’s actually go in next time. +0',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          [
            'You have the wrong idea. +2',
            'So what if we were together? +0',
            'It’s none of your business. +0',
          ],
          [
            'Don’t let it get to you. +2',
            'You can change. +3',
            'Beep boop. +0',
          ],
          [
            'Sounds like you two get along. +2',
            'Buchimaru-kun? +0',
            'Okay, calm down. +0',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'That’s unlike you. +2',
            'Is Thieves work distracting you? +0',
            'I’m sure you did better than me. +0',
          ],
          ['Eiko? +0', '…Who? +0'],
          [
            'Don’t you have goals? +0',
            'What about college? +0',
            'What do you mean? +0',
          ],
          [
            'Why do you use it? +3',
            'That’s adorable. +2',
            'You’re not very ladylike… +0',
          ],
          [
            'Do you still want to pursue it? +0',
            'I like a woman in uniform. +2',
            'It’s an amazing goal. +3',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'Are you jealous of them? +0',
            'That’s annoying. +2',
            'He sounds suspicious. +3',
          ],
          [
            'I got this. +3',
            'Why do I have to do it? +0',
            'Only if I can take it seriously. +2',
          ],
          [
            'Fist! Of! Justice! +0',
            'Report him to the police. +0',
            'Try to reach out to her. +2',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: 'MAX Charm Required',
        responses: [
          [
            'We just started. +2',
            'We’re fighting right now. +0',
            'Love comes in many forms. +3',
          ],
          [
            'Don’t be so pushy. +0',
            'Back off. +0',
            'Here, have my number instead. +0',
          ],
          [
            'No, you’re being considerate. +0',
            'You worry too much. +0',
            'Probably a little. +0',
          ],
          [
            'Tell him you’re  on a date. +2',
            'You’re allowed to ignore him. +0',
            'Fire the same thing back. +0',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          ['Do you think he likes you? +0', 'Does Eiko know about this? +0'],
          [
            'Probably a little. +0',
            'You watch too many soap operas. +0',
            'He’s definitely suspicious. +0',
          ],
          ['Who was their leader? +0', 'What gang was it? +0'],
          [
            'That’s a horrible story. +3',
            'Was it tough without him?? +2',
            'He was a noble man. +3',
          ],
          ['That’s admirable. +3', 'I’m sure he was happy. +3'],
          ['Do you have an answer? +2', 'You can figure that out now. +2'],
          [
            'I’m game if you are. +2',
            'What are you going to say? +0',
            'Refuse her, please. +2',
          ],
          [
            'Of course.. +2',
            'I guess so. +0',
            'It’s the role I always hoped for. +2',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'He says that to all his girls. +2',
            'That’s how he ropes you in. +2',
            'I’m not sure. +0',
          ],
          [
            'Absolutely. +3',
            'What are we going to do? +2',
            'Eh, she deserves him. +2',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          [
            'Get away from her! +3',
            'Your fight’s with me. +3',
            'I’m calling the cops. +3',
          ],
          ['We should get out of here. +2', 'Follow me. +2'],
          [
            'It looked like it hurt. +0',
            'That was the right move. +2',
            'You really smacked her. +0',
          ],
          [
            'I’m a regular here. +3',
            'It’s a popular meeting spot. +3',
            'Not as much as you. +2',
          ],
          [
            'You’ll find someone someday. +3 END',
            'I’ll be your study partner. +0 (ROMANCE)',
          ],
          ['I do. +3 (ROMANCE)', 'That’s not what I meant. +0'],
          [
            'I’d do anything for you. +2',
            'Were you scared? +0',
            'No big deal. +2',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          [
            'That’s incredible. +2',
            'Your slap worked wonders. +0',
            'I’m so relieved. +0',
          ],
          [
            'Are you stressing over exams? +2',
            'Back to studying? +0',
            'For your sister? +0',
          ],
          [
            'Police commissioner? +0',
            'That sounds difficult. +2',
            'Why did you choose that? +0',
          ],
          [
            'What an admirable goal. +3',
            'That’s an amazing dream. +2',
            'Your father would be proud.+3',
          ],
          [
            'Haha, yea. +0',
            'It’s not funny at all. +0',
            'Just be careful, OK? +2',
          ],
          ['What’s wrong? +0', 'Do you want to study? +0'],
        ],
      },
    ],
  },
  {
    id: 'Star',
    name: 'Hifumi Togo',
    availabilities: [
      ['Monday', 'Day', false],
      ['Monday', 'Night', true],
      ['Tuesday', 'Day', false],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', false],
      ['Wednesday', 'Night', true],
      ['Thursday', 'Day', false],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', false],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', false],
      ['Saturday', 'Night', true],
      ['Sunday', 'Day', false],
      ['Sunday', 'Night', true],
      ['Rainy', 'Day', true],
      ['Rainy', 'Night', true],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Koma Sabaki',
        description:
          'Allows you to swap current party with backup members during Joker’s turn.',
      },
      {
        rank: '3',
        label: 'Uchikomi',
        description:
          'Chance for a follow-up by a backup member if Joker downs an enemy.',
      },
      {
        rank: '5',
        label: 'Kakoi Kuzushi',
        description:
          'Allows you to attempt to escape, even when surrounded by the enemy.',
      },
      {
        rank: '7',
        label: 'Narikin',
        description:
          'Earn double money if a battle is won in 1 turn after a successful ambush.',
      },
      {
        rank: '9',
        label: 'Touryou',
        description:
          'Decreases turn delay to zero, allowing you to instantly escape battle.',
      },
      {
        rank: 'MAX',
        label: 'Togo System',
        description:
          'Allows you to swap current party with backup members during anyone’s turn.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note: 'Level 3 Charm Required',
        responses: [['Sure. +1', 'I guess we can. +1', 'Lucky me. +2']],
      },
      {
        label: 'Rank 2',
        note: '',
        responses: [
          [
            'That’s interesting. +2',
            'I like that attitude change. +0',
            'It’s a bit scary. +0',
          ],
          ['Have confidence in yourself. +0', 'Don’t worry about them. +0'],
          [
            'When is it coming out? +0',
            'You’re, like, an idol. +0',
            'But you don’t want to, right? +2',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          [
            'Describes you perfectly. +2',
            'No, I didn’t. +0',
            'That’s quite the headline. +0',
          ],
          [
            'You don’t enjoy it? +0',
            'Having a difficult time? +2',
            'You should just decline. +0',
          ],
          [
            'Bring it on. +2',
            'Don’t worry about it. +0',
            'This is part of our deal too. +0',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'I don’t mind. +2',
            'She has a bad vibe. +0',
            'Must’ve been the katsu curry. +2',
          ],
          [
            'They’re ridiculous. +0',
            'They’re cool. +2',
            'Never heard of them. +0',
          ],
          [
            'I’d love to. +2',
            'If our schedules match up. +0',
            'Where shall we go next? +2',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'You’re not allowed to date? +0',
            'She’s scary. +2',
            'Accomplish things? +0',
          ],
          [
            'You don’t like the attention? +0',
            'You should stop then. +2',
            'Have you told your mother? +0',
          ],
          [
            'No worries. +0',
            'You’ve got a lot to deal with… +2',
            'Why do you have to apologize? +0',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'You’ll be famous. +0',
            'Is that frustrating? +2',
            'The media is scary. +0',
          ],
          [
            'Do you still like shogi? +2',
            'Is that what you want to do? +0',
            'Do what you love. +2',
          ],
          [
            'You think so? +0',
            'You’re imagining things. +2',
            'Confess your sins, my child. +0',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          [
            'That’s almost a relief. +2',
            'Don’t let your guard down. +0',
            'It may come down to luck. +3',
          ],
          [
            'Give it your all. +2',
            'I believe in you. +3',
            'Idols are cool too. +0',
          ],
        ],
      },
      {
        label: 'Rank 7.5',
        note: 'MAX Knowledge Required',
        responses: [
          ['What do you mean? +0', 'I don’t understand. +0'],
          [
            'That won’t work. +2',
            'That’s a great strategy. +0',
            'Do you intend to lose? +0',
          ],
          ['Let’s make her reconsider. +0', 'Let’s do something about it. +0'],
          ['What’s your mother’s name? +0', 'Tell me her name. +0'],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'Maybe… +2',
            'You’re overthinking it. +0',
            'I’m glad her heart changed. +3',
          ],
          ['Lose what? +0', 'What’re you talking about? +0'],
          [
            'I support it. +2',
            'You should really rethink this. +0',
            'It’s certainly admirable. +0',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          [
            'Give it all you go. +2',
            'Do you feel confident? +0',
            'You can do it. +0',
          ],
          [
            'It was a good effort. +0',
            'You’ll win next time. +0',
            'A very queenly decision. +3',
          ],
          [
            'I want to become stronger. +0 END',
            'I want to stay by your side. +0 (ROMANCE)',
          ],
          ['I want us to date. +0 (ROMANCE)', 'We’ll be friends forever. +0'],
          [
            'Anything for you. +2',
            'It was all a big coincidence. +2',
            'It was love at first sight. +2',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          [
            'That’s rough. +2',
            'You’ll triumph in the end. +3',
            'Just don’t lose. +3',
          ],
          ['You can do it. +0', 'That’s reassuring. +0'],
          ['So you know. +0', 'What do you mean? +0', 'We do. +0'],
          ['Thank you. +0', 'That’s reassuring. +0'],
          ['What’s wrong? +0', 'Are you nervous? +0'],
        ],
      },
    ],
  },
  {
    id: 'Sun',
    name: 'Toranosuke Yoshida',
    availabilities: [
      ['Monday', 'Day', false],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', false],
      ['Tuesday', 'Night', true],
      ['Wednesday', 'Day', false],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', false],
      ['Thursday', 'Night', true],
      ['Friday', 'Day', false],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', false],
      ['Saturday', 'Night', true],
      ['Sunday', 'Day', false],
      ['Sunday', 'Night', true],
      ['Rainy', 'Day', false],
      ['Rainy', 'Night', false],
    ],
    benefits: [
      {
        rank: '2',
        label: 'Diplomacy',
        description:
          'Occasionally asks for more money or items during negotiations.',
      },
      {
        rank: '3',
        label: 'Fundraising',
        description:
          'Allows you to ask for large amounts of money during negotiations.',
      },
      {
        rank: '5',
        label: 'Manipulation',
        description:
          'Occasionally raises the chances of an enemy giving you a rare item.',
      },
      {
        rank: '8',
        label: 'Mind Control',
        description:
          'Occasionally lets you skip negotiation when attempting to obtain a Persona.',
      },
      {
        rank: 'MAX',
        label: 'Charismatic Speech',
        description: 'Allows you to form contracts with higher-level Shadows.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note:
          'How to Unlock: First you will need to go to Shibuya’s Underground Walkway and grab a job pamphlet that becomes available very early on in the campaign. Take the job for Beef Bowl Shop which will be available at night and requires you to remember who ordered what. Yoshida will drop by the Beef Bowl Shop after his speech. After two nights of doing this job, Yoshida will interact with you and give you the ability to help him with his campaign at Station Square.',
        responses: [
          ['Of course. +1', 'If I must. +0', 'Let me write this down. +3'],
        ],
      },
      {
        label: 'Rank 2',
        note: '',
        responses: [
          [
            'I want to change the world. +0',
            'I want to improve my speech. +2',
            'I’m not sure… +0',
          ],
          [
            'One with conviction. +2',
            'A popular one. +0',
            'I don’t know yet. +2',
          ],
          [
            'That was helpful. +2',
            'I knew that already. +0',
            'What I want to accomplish? +0',
          ],
          [
            'It was helpful. +2',
            'Somewhat. +0',
            'It changed my whole outlook. +2',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          ['Yes, Mr. Yoshida told me. +0', 'No, and I don’t care. +0'],
          [
            'His message. +2',
            'No His speaking skills. +2',
            'It’s hard to say. +0',
          ],
          [
            'I will. +0',
            'I’m not sure I get it. +0',
            'You think I’ll ever find it? +2',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'Stop interrupting him. +0',
            'You’re annoying the audience. +0',
            'Just shut up and listen. +0',
          ],
          ['Yep. +0', 'What do you think? +0'],
          [
            'The ex-convict has a point. +0',
            'Listen to what he has to say. +0',
            'So what if he’s No-Good Tora? +0',
          ],
          ['I couldn’t help myself. +2', 'I just spoke the truth. +0'],
          [
            'I will. +2',
            'I’m not sure I can. +0',
            'Can’t forget your roots. +2',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'I think so. +2',
            'Don’t let your guard down. +0',
            'The media doesn’t matter. +3',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'I’m for them. +2',
            'I’m against them. +0',
            'I don’t really care. +3',
          ],
          [
            'I’d decline. +3',
            'I’d take the offer. +0',
            'I’d leave it to chance. +2',
          ],
          [
            'I’ll keep this in mind. +2',
            'Lose sight of who I am? +0',
            'You make quite a case. +2',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          [
            'You should decline. +2',
            'That’s a sweet deal. +0',
            'I wasn’t paying attention. +0',
          ],
          [
            'He’s not No-Good Tora. +0',
            'Call him Mr. Yoshida. +0',
            'He’ll get elected this time. +0',
          ],
          [
            'That’s not for you to decide. +0',
            'Maybe… +0',
            'I still believe in him. +0',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'Are you going to do it? +0',
            'Don’t do it. +0',
            'That’s a difficult decision. +2',
          ],
          [
            'Stick to your beliefs. +3',
            'Clear your name. +0',
            'Get elected. +0',
          ],
          [
            'What good would that do? +0',
            'So what if you’re right? +0',
            '…… +0',
          ],
          [
            'I’ll never foget that. +2',
            'It’s tougher than it seems. +2',
            '…… +0',
          ],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          ['Do your best. +3', 'Break a leg. +0', 'I’m getting nervous. +2'],
          [
            'What are you talking about? +0',
            'You had a change of heart. +2',
            '…… +0',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          [
            'Your true self was revealed. +3',
            'You’re going to be popular. +2',
            'Don’t let your guard down. +3',
          ],
        ],
      },
    ],
  },
  {
    id: 'Temperance',
    name: 'Sadayo Kawakami',
    availabilities: [
      ['Monday', 'Day', false],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', false],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', false],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', false],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', false],
      ['Friday', 'Night', true],
      ['Saturday', 'Day', false],
      ['Saturday', 'Night', true],
      ['Sunday', 'Day', false],
      ['Sunday', 'Night', false],
      ['Rainy', 'Day', true],
      ['Rainy', 'Night', true],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Slack Off',
        description:
          'Allows you to perform various activities in Kawakami’s class.',
      },
      {
        rank: '3',
        label: 'Housekeeping',
        description:
          'Allows you to request Kawakami to make coffee or do laundry for you.',
      },
      {
        rank: '5',
        label: 'Free Time',
        description:
          'Gain free time in other teachers’ classes with Kawakami’s help.',
      },
      {
        rank: '7',
        label: 'Super Housekeeping',
        description:
          'Allows you to request Kawakami to make curry or infiltration tools for you.',
      },
      {
        rank: 'MAX',
        label: 'Special Massage',
        description:
          'Request a massage after going into the Metaverse, letting you go out at night.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note:
          'How to Unlock: After completing the second dungeon, you will receive a scene a couple days later with Yuuki and Ryuji regarding a maid call-service. You will be able to do this at night by talking to Yuuki in Shibuya. After this nighttime event, approach Kawakami at school the next day where she’s getting an ear full from Ms. Chouno. Help her out of this situation and she will give you a number to call at night from the phone at the Leblanc Cafe that will begin the Temperance storyline.',
        responses: [
          [
            'Yeah, I get it. +3',
            'I will if you will. +2',
            'Please stop talking like that. +2',
          ],
        ],
      },
      {
        label: 'Rank 2',
        note: '',
        responses: [
          ['It does. +2', 'I feel nothing. +0', 'I’ll tell your boss. +0'],
          [
            'I can’t say I wasn’t… +0',
            'Absolutely not! +2',
            'What kind of weird things? +0',
          ],
          ['You need money? +0', 'What’s it for? +0'],
          [
            'Are you scolding me? +0',
            'This is all for you. +0',
            'I requested you. +0',
          ],
          [
            'You have the wrong number +0',
            'Uh, what the hell? +0',
            'Is this the hard sell? +2',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          [
            'Yeah, they do. +2',
            'Do some real cooking. +2',
            'Can I have a different maid. +0',
          ],
          [
            'I was curious. +0',
            'So I could slack off in class. +0',
            'I wanted to see you. +0',
          ],
          [
            'Your sister’s bills, right? +0',
            'I’ll request you more often. +3',
            'You’re really blunt. +0',
          ],
          [
            'You have it rough. +0',
            'Are they expensive? +0',
            'Don’t overdo it. +0',
          ],
          [
            'Thanks. +2',
            'I’ll work hard at it. +0',
            'You’re not in character. +0',
          ],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          ['That would be great. +0', 'What are you scheming? +0'],
          ['How rude. +2', 'No surprise there. +0', 'How old ARE you? +0'],
          [
            'Yes, you do. +2',
            'You’re pushing it. +0',
            'You need to love yourself. +3',
          ],
          [
            'I already knew that. +0',
            'Why did you lie to me? +0',
            'You’re a bad teacher. +0',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'It’s fun. +2',
            'I want to know more. +0',
            'Who’s the Master here? +2',
          ],
          ['How Terrible… +2', 'It was inevitable. +0', 'So, did you stop? +2'],
          [
            'It’s not your fault. +0',
            'It was bad luck. +0',
            'It’s no one’s fault. +0',
          ],
          ['You OK with that? +0', 'Guardians, huh… +0'],
          [
            'It’s too late now. +0',
            'What about our deal? +0',
            'I want see you again. +0',
          ],
          [
            'Curry is all I eat. +0',
            'You get bored of the taste. +0',
            'You want some? +2',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'You just got here. +0',
            'Want to rest a bit? +2',
            'Give me back my money. +0',
          ],
          [
            'Are you all right? +3',
            'Have you see a doctor? +2',
            'You should go home. +3',
          ],
          ['Are you OK? +0', 'Don’t overdo it. +0'],
          [
            'I’ll be fine. +0',
            'Nah, too lazy. +0',
            'How are you feeling, though? +2',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          ['Don’t strain yourself. +2', 'Don’t lie. +0', 'Don’t pay them. +3'],
          [
            'Sister company? +0',
            'Can you make a lot there? +0',
            'Think this through more. +3',
          ],
          [
            'That’s the wrong choice. +0',
            'Isn’t there another way? +0',
            'Just rest for now. +0',
          ],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'That’s the wrong decision. +0',
            'Please reconsider. +0',
            'Is this really what you want? +3',
          ],
          [
            'You’re running away. +2',
            'If that’s what you decided. +3',
            'I need my teacher. +0',
          ],
          [
            'Try to remember +0',
            'That’s your answer. +0',
            'Take a look at yourself. +0',
          ],
          ['Are you going to give up? +0', 'Mistakes can be fixed. +0'],
          [
            'Be confident in your answer. +3',
            'That’s the right choice. +3',
            'You’re asking a student? +3',
          ],
          ['I want to protect you. +3', 'That’s reassuring. +3'],
          [
            'You’re welcome. +2',
            'So much for being a maid. +2',
            'I’ll do anything for you. +2',
          ],
        ],
      },
      {
        label: 'Rank 8.5',
        note: '',
        responses: [
          ['We’re talking here. +0', 'You know it, lady. +0'],
          ['You can’t give up. +0', 'But you were so determined. +0'],
          ['What are their names again? +0', 'I need their names. +0'],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          [
            'Nonsense. +3',
            'You may be right. +0',
            'Aren’t you old already…? +0',
          ],
          ['What a bummer. +3', 'Thank you for your service. +3'],
          ['Not really. +2 END', 'I want to keep seeing you. +2 (ROMANCE)'],
          ['Got it. +2 END', 'I mean what I say. +0 (ROMANCE)'],
          [
            'I’m a master; you’re a maid. +0',
            'I’m a man; you’re a woman. +0 (ROMANCE)',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          ['…Really? +0', 'I see. +0', 'That’s too bad… +0'],
          ['It doesn’t matter. +0', 'That’s the best part. +0'],
          [
            'We won’t get caught. +0',
            'Don’t worry about it. +0',
            'You’re so responsible. +0',
          ],
          ['What are you talking about? +0', 'When did you realize? +0'],
          ['You got me. +0', 'You have no proof. +0', '…So what if I am? +0'],
          ['That sounds promising. +3', 'I’ll make sure of it. +3'],
          ['I want to rely on you. +3', 'I want you to rely on me. +3'],
        ],
      },
    ],
  },
  {
    id: 'Tower',
    name: 'Shinya Oda',
    availabilities: [
      ['Monday', 'Day', true],
      ['Monday', 'Night', false],
      ['Tuesday', 'Day', true],
      ['Tuesday', 'Night', false],
      ['Wednesday', 'Day', false],
      ['Wednesday', 'Night', false],
      ['Thursday', 'Day', true],
      ['Thursday', 'Night', false],
      ['Friday', 'Day', false],
      ['Friday', 'Night', false],
      ['Saturday', 'Day', true],
      ['Saturday', 'Night', false],
      ['Sunday', 'Day', false],
      ['Sunday', 'Night', false],
      ['Rainy', 'Day', true],
      ['Rainy', 'Night', true],
    ],
    benefits: [
      {
        rank: '1',
        label: 'Down Shot',
        description:
          'Allows you to knock down an enemy with a special shot once per infiltration.',
      },
      {
        rank: '2',
        label: 'Bullet Hail',
        description:
          'Chance to enter a gun-based All-out Attack after a successful ambush.',
      },
      {
        rank: '3',
        label: 'Warning Shot',
        description:
          'Able to scare enemies in negotiation to make it easier to obtain a Persona.',
      },
      {
        rank: '5',
        label: 'Laced Bullets',
        description:
          'Increases the success rate of an ailment-inflicting gunshot.',
      },
      {
        rank: '6',
        label: 'Cheap Shot',
        description:
          'Allows you to use Down Shot three times per infiltration.',
      },
      {
        rank: '8',
        label: 'Electric Slug',
        description: 'Increases the damage inflicted by Bullet Hail.',
      },
      {
        rank: 'MAX',
        label: 'Oda Special',
        description:
          'Allows Joker’s gun attacks to ignore resistances and hit the enemy.',
      },
    ],
    conversations: [
      {
        label: 'Rank 1',
        note:
          'How to Unlock: Early into September you will get a Request from Yuuki regarding someone at the arcades. Travel to the Shibuya arcades and talk to one of the men there to obtain some information regarding a cheater. After this, venturing into Mementos and try to complete the Request. Because this individual is cheating, you’ll be unable to land a hit on him. Retreat and from here you will need to go to the arcades in Akihabara and meet Shinya Oda to begin his storyline.',
        responses: [
          ['Sure. +1', 'Do we have to? +1', 'Call me when it’s game time. +2'],
        ],
      },
      {
        label: 'Rank 2',
        note: '',
        responses: [
          [
            'Sorry… +2',
            'Don’t compare me to you. +3',
            'Praise would be encouraging. +0',
          ],
          [
            'Let’s go. +0',
            'What a rude employee. +2',
            'Something bothering you? +0',
          ],
          ['Are they strong? +0', 'Do you admire them? +2'],
          [
            'So do I. +3',
            'They’re more than strong. +0',
            'I’ll let them know. +3',
          ],
          [
            'I’ll work hard. +2',
            'If I feel like it. +0',
            'So then I can beat you? +2',
          ],
        ],
      },
      {
        label: 'Rank 3',
        note: '',
        responses: [
          [
            'Did something happen? +0',
            'Let’s go eat. +0',
            'Are you fasting? +0',
          ],
          ['OK. +0', 'I’m not down with that. +0', 'Let me think about it. +0'],
          [
            'Are they bullying you? +0',
            'Sounds like fun? +0',
            'You shouldn’t waste food. +0',
          ],
          [
            'That’s the spirit. +2',
            'Want to learn martial arts? +0',
            'You really love your mom. +0',
          ],
          ['Sure. +2', 'If our schedules line up. +0', 'Any food requests? +0'],
        ],
      },
      {
        label: 'Rank 4',
        note: '',
        responses: [
          [
            'Calm down. +0',
            'You’re being a sore loser. +0',
            'Yeah, you tell him! +2',
          ],
          [
            'Don’t get so worked up. +0',
            'Get your revenge. +2',
            'Pros are amazing, huh? +0',
          ],
        ],
      },
      {
        label: 'Rank 5',
        note: '',
        responses: [
          [
            'It was pretty weird. +3',
            'It happens. +0',
            'He must’ve rigged it. +3',
          ],
          [
            'You think you have a chance? +0',
            'I’m sure you can do it. +2',
            'Don’t get so worked up. +0',
          ],
          ['Are you going to give up? +2', 'You need a new strategy. +3'],
          [
            'I’ll be cheering you on. +2',
            'You’re a sharp kid. +0',
            'Think you can take him? +2',
          ],
        ],
      },
      {
        label: 'Rank 6',
        note: '',
        responses: [
          [
            'I can pay for myself. +0',
            'If you insist. +0',
            'Do you have enough? +0',
          ],
          ['You should return the money. +0', 'You’re acting like one. +0'],
          ['That’s good. +2', 'I believe in you. +3'],
          ['A little bit. +0', 'Not at all. +3', 'I’m worried about you. +0'],
          [
            'Of course I won’t. +2',
            'That’s up to you. +0',
            'I’m your big brother, right? +0',
          ],
        ],
      },
      {
        label: 'Rank 7',
        note: '',
        responses: [
          ['I haven’t done anything. +0', 'Calm down. +0', 'Bad influence? +0'],
          ['Take it easy on him. +0', 'Think about his feelings. +0'],
          [
            'Bring it on, lady. +0',
            'I haven’t done anything. +0',
            'That wouldn’t be good. +0',
          ],
          ['What’s your mom’s name? +0', 'Tell me about your mom. +0'],
        ],
      },
      {
        label: 'Rank 8',
        note: '',
        responses: [
          [
            'She’s out to control. +0',
            'No, she’s not. +2',
            'Is that what you think? +2',
          ],
          [
            'It’ll all work out. +2',
            'I can’t guarantee it. +0',
            'Believe in them. +3',
          ],
          ['Is that too much for you? +0', 'Way to step up. +0'],
          ['Let’s save her. +3', 'That’s admirable. +3'],
        ],
      },
      {
        label: 'Rank 9',
        note: '',
        responses: [
          [
            'I’m glad to hear that. +3',
            'That’s hard to believe. +0',
            'Thank the Phantom Thieves. +2',
          ],
          [
            'A little bit, yea. +2',
            'No, that makes sense. +3',
            'It means you’ve matured. +3',
          ],
          [
            'He wants to win at all costs. +2',
            'He’s too lazy to practice. +0',
            'I wouldn’t know… +0',
          ],
          [
            'Your wish came true. +2',
            'You really think It was them? +2',
            'You did a great job too. +2',
          ],
        ],
      },
      {
        label: 'Rank MAX',
        note: '',
        responses: [
          ['Thanks to my hard work. +2', 'Thanks to my teacher. +3'],
          [
            'You got your revenge. +0',
            'You made things right. +3',
            'You made new friends. +3',
          ],
          ['I’ll let you in. +0', 'Ask them yourself. +0'],
        ],
      },
    ],
  },
];
