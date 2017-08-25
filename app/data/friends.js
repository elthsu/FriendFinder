// ===============================================================================
// DATA
// ===============================================================================

var friendsArray = [
  {
    "name":"Sandor Clegane, AKA The Hound",
    "photo":"http://start.att.net/exclusive/sites/default/files/DID1899955_GAME_OF_THRONES_33__759999_GOT403_080613_HS_DSC1155_1.jpg",
    "scores":[
        1,
        3,
        5,
        1,
        5,
        2,
        1,
        4,
        1,
        3
      ],
      "bio":"The younger Clegane brother is a legendary fighter known for his scarred face and brusque demeanor. Jaded by the ruthless cruelty of his brother Gregor (The Mountain), he rejects the concept of knighthood, and was last seen traveling with the Brotherhood Without Banners. Those with his personality types are known as debaters that often play devil’s advocate, which can get them in trouble with authority figures. The Hound care very little about being seen as compassionate or kind, and are honest to a fault. He never back down from confrontation, and follows his own moral compass. The Hound has no problem taking out those who get in his way."
  },
  {
    "name":"Petyr Baelish, AKA Littlefinger",
    "photo":"http://start.att.net/exclusive/sites/default/files/DID953472_Littlefinger_726739_NB_00204.jpg",
    "scores":[
        1,
        4,
        2,
        5,
        2,
        5,
        1,
        2,
        4,
        1
      ],
      "bio":"Known for his manipulative tactics, Littlefinger is a cunning politician with no loyalties but to himself. Power-hungry and arrogant, he is calculating in all his decisions, and believes himself to be the smartest guy in the Realm. His supposed dedication to Catelyn Stark led him to help her daughter Sansa take down Ramsay Bolton. He is known for his adherence to structure and his strategic, vision-focused thinking. He believes that authority must be earned. He pursue improvement and achievement, expecting those around him to keep up. Littlefinger aids in the murder of Joffrey in order to smuggle Sansa out of King's Landing: very strategic."
  },
  {
    "name":"Melisandre",
    "photo":"http://start.att.net/exclusive/sites/default/files/Melisandre.jpg",
    "scores":[
        1,
        4,
        2,
        5,
        4,
        5,
        1,
        3,
        2,
        2
      ],
      "bio":'The Red Priestess has proved her ruthless nature throughout the series. She is a killer for a cause, and often uses her sexuality to get what she wants. Previously, she miraculously revived Jon Snow from death after believing him to be the Prince That Was Promised. Jon, however, banishes her from the North after discovering that she burned her former liege Stannis Baratheon’s young daughter Shireen at the stake. Now she seeks an alliance with another "prince," Daenerys Targaryen. Although she isn’t necessarily a stone-cold killer, she is a independent, determined truth seeker. The rarest personality type, she is an intellectual often relentless in her pursuit of knowledge and is a confident, mysterious observer. Melisandre is consistantly questing to master the higher mysteries in service of her red god R’hllor.'
  },
  {
    "name":"Brienne of Tarth",
    "photo":"http://start.att.net/exclusive/sites/default/files/DID2417352_Brienne_GOT605_080315_HS_DSC_0035.jpg",
    "scores":[
        4,
        3,
        1,
        1,
        5,
        3,
        1,
        4,
        2,
        5
      ],
      "bio":'Brienne is unquestionably one of the toughest characters in Westeros. Not only does she defy Westeros’ gender norms, but she is one of its best warriors and a loyal one at that. Though slightly awkward, she will protect the ones she loves at any cost. After leaving Riverrun with Podrick, nodding knowingly to her on-again, off-again frenemy Jaime Lannister, Brienne rejoined Sansa Stark at Winterfell. She is altruistic, and always believe in doing the right thing. She holds tightly to her morals, which are often based on laws and traditions rather than philosophy or mysticism. She enjoys being of service as long as she is valued and appreciated. Often times, she is too selfless. Brienne offers her protection, service, and unwavering loyalty to the Stark family, even when they don’t want it. That kind of stubborn do-goodery is classic Brienne.'
  },
  {
    "name":"Jaime Lannister",
    "photo":"http://start.att.net/exclusive/sites/default/files/DID1580205_735778_961936_1200x1600.jpg",
    "scores":[
        1,
        1,
        2,
        1,
        4,
        3,
        5,
        4,
        5,
        2
      ],
      "bio":"Jaime Lannister has seen some of the series’ most rewarding character development. In six seasons, he’s grown from a preening Kingslayer and incestous lover to a humbled former swordplay savant, oddly compassionate and disillusioned with his family’s ruthless nature. Jaime has been in King's Landing, clearly disturbed after his twin sister Cersei demolished the Great Sept of Baelor and all but forced their last remaining son Tommen off a balcony. He has a tendency to make impulsive decisions and fixes his mistakes as he go rather than sitting idle. He is a risk-taker and love to dive into the action. He doesn’t often follow rules, and more often lives by his own moral compass. He is a natural excitement-seeker and leader. Jaime is quick to jump into a bear pit to save Brienne: definitely a case of leaping before looking."
  },
  {
    "name":"Cersei Lannister",
    "photo":"http://start.att.net/exclusive/sites/default/files/DID1551796_GAME_OF_THRONES_30__749732_GOT_HS_08.21.12_EP310_3572_0.jpg",
    "scores":[
        1,
        1,
        5,
        5,
        1,
        5,
        5,
        2,
        5,
        1
      ],
      "bio":"Cersei now sits upon the Iron Throne after massacring her enemies en masse as they awaited her arrival at trial. This brutal act of vengeance is Cersei in a nutshell: cold, cunning and manipulative, consequences be damned. After losing all her children (the only people she truly loved), she abandons any pretense of selflessness and descends into a sadistic spiral. She is a strategic planner, with a vision for the future that can often be described as ruthless. Cersei uses her drive and sharp mind to achieve her own goals. She loves a good challenge, and is often dominant and unforgiving, believing emotional displays to be a weakness. Cersei is quick to eliminate those she finds weak or offensive, deploying The Mountain to dispatch her enemies. "
  },
  {
    "name":"Arya Stark",
    "photo":"http://start.att.net/exclusive/sites/default/files/DID3050486_Arya_GoT-Sn7_FirstLook_10.jpg",
    "scores":[
        5,
        3,
        1,
        1,
        5,
        5,
        1,
        2,
        4,
        5
      ],
      "bio":"One of the last remaining Starks, Arya is cunning and quick-witted. She is fiercely independent, but determined to retain her Stark heritage. Through her many experiences with death, she has become more merciless, but still has love and loyalty to those she is closest to. After executing Walder Frey to avenge the Red Wedding, Arya appears on her way to a family reunion at Winterfell. Her personality types are quietly systematic. They are analytical, decisive, and detail-oriented. She takes responsibility for her actions, carrying out her plans with patience and accuracy. She does not make assumptions, and instead analyzes her surroundings in order to arrive at conclusions. When she says she will do something, she follows through. Arya started writing her “Death List” in Season two, and has been systematically crossing off names ever since."
  },
  {
    "name":"Daenerys Targaryen",
    "photo":"http://start.att.net/exclusive/sites/default/files/DID3062027_Dany_GoT-Sn7_FirstLook_11_0.jpg",
    "scores":[
        5,
        5,
        1,
        2,
        5,
        5,
        5,
        3,
        2,
        2
      ],
      "bio":"The Khaleesi of the Great Grass Sea is well-spoken and determined, but has maintained a sense of empathy. She learned pride and confidence from her late husband Khal Drogo, and although many consider her naive, she’s a quick learner and decisive actor, which has served her well in her various conquests. She has since sailed to Westeros with her massive armada to reclaim her birthright at Dragonstone, and is preparing to wage war against her enemies. She is insightful, future-thinking, and highly individualistic. She is charming and compassionate, and read between the lines with curiosity and vitality. She views the world as a puzzle that needs solving, and looks to discover deeper meaning through mysticism. Her irresistible passion for the causes makes her a natural leader that attract followers quite easily. After Dany frees the Unsullied slave army and grants them their freedom, they all choose to stay and fight for their inspiring leader."
  },
  {
    "name":"Tyrion Lannister",
    "photo":"http://start.att.net/exclusive/sites/default/files/DID2393615_Tyrion_GOT_MP_100515_EP601-4769.jpg",
    "scores":[
        1,
        1,
        5,
        5,
        5,
        5,
        1,
        5,
        4,
        2
      ],
      "bio":"Clever, cunning, and self-aware to a fault, Tyrion uses his intellect to overcome the prejudice he faces due to his dwarfism. He relies on his quick wit to come out on top, and picks his allies and enemies wisely. He is a strategic thinker who ultimately cares very much about the opinions of others, which often makes him vulnerable. This is clearly observed in both his familial and romantic relationships. He joined forces with Daenerys, and has been giving her counsel in the position of Hand of the Queen. He is guided by his principles, and is led by pure intent rather than rewards and punishment. He is gifted with language, and an excellent listener, but he has a tendency to take things very personally. Tyrion earns the trust of Dany’s dragons by telling them a personal story of wishing for one on his name day, showing his keen emotional intelligence. "
  },
  {
    "name":"Jon Snow",
    "photo":"http://start.att.net/exclusive/sites/default/files/DID3063256_JonSnow_GoT-Sn7_FirstLook_09.jpg",
    "scores":[
        5,
        5,
        1,
        1,
        5,
        2,
        1,
        5,
        2,
        5
      ],
      "bio":"The newly anointed King of the North is an altruistic and kind character with a profound sense of honor, and a moral compass that leads him to seek truth and fairness at all costs. His bastard heritage forced him to grow up very quickly. After coming back from death at the hands of his sworn Night’s Watch brothers, Jon rather understandably has a more nihilistic view of the world. Objective and honest, he views the world as complex and large, which helps him tie together seemingly unrelated happenings. This ability to comprehend the bigger picture makes Jon a natural choice to rally the Realm against the real threat to its existence: the White Walkers."
  }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
