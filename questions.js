// ═══════════════════════════════════════════════════════════════════
// 📚 EXAM TRAINING - QUESTION BANK
// ═══════════════════════════════════════════════════════════════════
// Структура каждого вопроса:
// {
//   prompt: "Текст вопроса",
//   options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
//   answer: 0,  // Индекс правильного ответа (0=A, 1=B, 2=C, 3=D)
//   explain: {
//     en: "Explanation in English",
//     ru: "Объяснение на русском"
//   },
//   points: 1
// }
// ═══════════════════════════════════════════════════════════════════

const QBANK = {

  // ═════════════════════════════════════════════════════════════════
  // 🌍 GEOGRAPHY / SOCIAL STUDIES
  // ═════════════════════════════════════════════════════════════════
  Geography: [
    // ─────────────────────────────────────────────────────────────────
    // Christianity & Byzantine Empire (Questions 1-21)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "Who was Justinian?",
      options: ["Jesus's father", "a Jewish rabbi", "a Christian missionary", "a Roman emperor"],
      answer: 3,
      explain: {
        en: "Justinian was a Roman emperor who ruled the Byzantine Empire from 527-565 CE. He is famous for Justinian's Code and rebuilding the Hagia Sophia.",
        ru: "Юстиниан был римским императором, правившим Византийской империей с 527 по 565 год н.э. Он известен Кодексом Юстиниана и перестройкой Айя-Софии."
      },
      points: 1
    },
    {
      prompt: "Early Christian communities were led by:",
      options: ["bishops", "saints", "rabbis", "pharaohs"],
      answer: 0,
      explain: {
        en: "Bishops were the leaders of early Christian communities. They supervised churches and priests in their regions.",
        ru: "Епископы были лидерами ранних христианских общин. Они контролировали церкви и священников в своих регионах."
      },
      points: 1
    },
    {
      prompt: "Conflicts between kings forced Israel to break into two kingdoms—Israel and:",
      options: ["Jerusalem", "Canaan", "Judah", "Byzantium"],
      answer: 2,
      explain: {
        en: "Around 930 BCE, the united kingdom of Israel split into two: the northern kingdom of Israel and the southern kingdom of Judah.",
        ru: "Около 930 г. до н.э. объединенное царство Израиль разделилось на два: северное царство Израиль и южное царство Иудея."
      },
      points: 1
    },
    {
      prompt: "Whom do the Hebrews claim as their ancestor?",
      options: ["Paul", "Abraham", "Theodora", "Moses"],
      answer: 1,
      explain: {
        en: "Abraham is considered the father of the Hebrew people. According to the Bible, God made a covenant with Abraham.",
        ru: "Авраам считается отцом еврейского народа. Согласно Библии, Бог заключил завет с Авраамом."
      },
      points: 1
    },
    {
      prompt: "The Torah is the first part of:",
      options: ["the Hebrew Bible", "Justinian's Code", "the Gospels", "the New Testament"],
      answer: 0,
      explain: {
        en: "The Torah (the first five books of Moses) is the most sacred part of the Hebrew Bible.",
        ru: "Тора (первые пять книг Моисея) — самая священная часть еврейской Библии."
      },
      points: 1
    },
    {
      prompt: "The Resurrection is the Christian belief that Jesus:",
      options: ["was crucified", "taught about salvation", "performed miracles", "rose from the dead"],
      answer: 3,
      explain: {
        en: "Christians believe that Jesus rose from the dead three days after his crucifixion, which is celebrated as Easter.",
        ru: "Христиане верят, что Иисус воскрес из мертвых через три дня после распятия, что отмечается как Пасха."
      },
      points: 1
    },
    {
      prompt: "Christianity spread throughout the Roman Empire after:",
      options: ["riots against Justinian in Constantinople", "the invasion of the Ottoman Turks", "the conversion of Constantine", "different denominations were formed"],
      answer: 2,
      explain: {
        en: "Emperor Constantine converted to Christianity around 312 CE, which led to Christianity becoming the official religion of the Roman Empire.",
        ru: "Император Константин принял христианство около 312 года н.э., что привело к тому, что христианство стало официальной религией Римской империи."
      },
      points: 1
    },
    {
      prompt: "During which Jewish holiday do Jews celebrate the Exodus?",
      options: ["Hanukkah", "Passover", "Rosh Hashanah", "Yom Kippur"],
      answer: 1,
      explain: {
        en: "Passover (Pesach) commemorates the Exodus—the liberation of the Israelites from slavery in Egypt.",
        ru: "Песах (Пасха) отмечает Исход — освобождение израильтян из рабства в Египте."
      },
      points: 1
    },
    {
      prompt: "According to the Bible, Jesus was born in:",
      options: ["Constantinople", "Bethlehem", "Damascus", "Rome"],
      answer: 1,
      explain: {
        en: "According to the Gospels, Jesus was born in Bethlehem, a small town in Judea.",
        ru: "Согласно Евангелиям, Иисус родился в Вифлееме, небольшом городе в Иудее."
      },
      points: 1
    },
    {
      prompt: "According to the Bible, God promised Abraham that:",
      options: ["he would build a great temple", "he would lead the Hebrews out of Egypt", "he would be victorious in battle", "his descendants would be a mighty nation"],
      answer: 3,
      explain: {
        en: "God promised Abraham that his descendants would become a great nation and inherit the land of Canaan.",
        ru: "Бог обещал Аврааму, что его потомки станут великим народом и унаследуют землю Ханаан."
      },
      points: 1
    },
    {
      prompt: "The Hebrews viewed their release from slavery as:",
      options: ["the fulfillment of a prophesy", "a sign that God was protecting them", "God's justice", "a sign of Moses's great leadership"],
      answer: 1,
      explain: {
        en: "The Hebrews believed their escape from Egypt showed that God was watching over and protecting them.",
        ru: "Евреи верили, что их побег из Египта показал, что Бог следит за ними и защищает их."
      },
      points: 1
    },
    {
      prompt: "When he was about 30, Jesus:",
      options: ["began to travel and teach", "was arrested", "was crucified", "studied carpentry with Joseph"],
      answer: 0,
      explain: {
        en: "According to the Gospels, Jesus began his public ministry around age 30, traveling and teaching throughout Judea and Galilee.",
        ru: "Согласно Евангелиям, Иисус начал свое публичное служение около 30 лет, путешествуя и уча в Иудее и Галилее."
      },
      points: 1
    },
    {
      prompt: "Why was Jesus arrested?",
      options: ["He supported the Roman Empire", "He challenged the authority of political and religious leaders", "He challenged Mosaic law", "The Roman Empire discriminated against Jews"],
      answer: 1,
      explain: {
        en: "Jesus was arrested because his teachings challenged both Roman political authority and Jewish religious leaders.",
        ru: "Иисус был арестован, потому что его учение бросало вызов как римской политической власти, так и еврейским религиозным лидерам."
      },
      points: 1
    },
    {
      prompt: "Jesus feeding a huge crowd with a small amount of food is an example of:",
      options: ["a Passover meal", "a mosaic", "a miracle", "a parable"],
      answer: 2,
      explain: {
        en: "The feeding of the 5,000 is one of Jesus's miracles recorded in the Gospels, demonstrating his divine power.",
        ru: "Насыщение 5000 — одно из чудес Иисуса, записанных в Евангелиях, демонстрирующее его божественную силу."
      },
      points: 1
    },
    {
      prompt: "There are many Christian denominations because:",
      options: ["people have interpreted Jesus's teachings in many different ways", "Jesus divided his followers into different groups", "Paul encouraged Churches to find their own truths", "the Roman empire was divided into various states"],
      answer: 0,
      explain: {
        en: "Different interpretations of Jesus's teachings and the Bible have led to the formation of many Christian denominations.",
        ru: "Различные интерпретации учений Иисуса и Библии привели к образованию многих христианских конфессий."
      },
      points: 1
    },
    {
      prompt: "Paul wrote long letters to various communities in order to:",
      options: ["call for the persecution of Christians", "explain and elaborate on Jesus's teachings", "encourage people to abandon Judaism", "tell the story of Jesus's life"],
      answer: 1,
      explain: {
        en: "Paul's epistles (letters) explained Christian theology and provided guidance to early Christian communities.",
        ru: "Послания Павла объясняли христианское богословие и давали руководство ранним христианским общинам."
      },
      points: 1
    },
    {
      prompt: "Justinian was threatened by:",
      options: ["Theodora's relatives", "the western Roman emperor", "two groups of enemies in the Byzantine Empire", "the Ottoman Turks"],
      answer: 2,
      explain: {
        en: "Justinian faced threats from two rival factions in Constantinople—the Blues and the Greens—who sparked the Nika riots.",
        ru: "Юстиниан столкнулся с угрозами от двух соперничающих фракций в Константинополе — синих и зеленых — которые вызвали восстание Ника."
      },
      points: 1
    },
    {
      prompt: "Without Theodora, Justinian would probably have:",
      options: ["fled Constantinople and had to give up his throne", "been unable to build the Hagia Sophia", "kept Roman laws as they were", "reconquered the entire Roman Empire"],
      answer: 0,
      explain: {
        en: "During the Nika riots, Theodora convinced Justinian to stay and fight rather than flee, which saved his throne.",
        ru: "Во время восстания Ника Теодора убедила Юстиниана остаться и сражаться, а не бежать, что спасло его трон."
      },
      points: 1
    },
    {
      prompt: "According to legend, Constantine became a Christian because:",
      options: ["he won a battle against a rival", "he saw a cross in the sky", "he saw a blinding light and heard Jesus's voice", "he became emperor"],
      answer: 1,
      explain: {
        en: "Legend says Constantine saw a cross in the sky with the words 'In this sign, conquer' before a crucial battle.",
        ru: "Легенда гласит, что Константин увидел крест в небе со словами 'Сим победиши' перед решающей битвой."
      },
      points: 1
    },
    {
      prompt: "The split between the Eastern and Western churches became official when:",
      options: ["eastern Christians formed the Orthodox Church", "the pope excommunicated several eastern priests", "Justinian built the Hagia Sophia", "several Apostles moved to Constantinople"],
      answer: 0,
      explain: {
        en: "In 1054 CE, the Great Schism occurred, dividing Christianity into the Roman Catholic Church (West) and the Eastern Orthodox Church (East).",
        ru: "В 1054 году произошла Великая схизма, разделившая христианство на Римско-католическую церковь (Запад) и Восточно-православную церковь (Восток)."
      },
      points: 1
    },
    {
      prompt: "Before his conversion to Christianity, Paul:",
      options: ["believed in the Roman religion", "worked to prevent Christians from spreading their message", "disagreed with Christians, but tolerated them", "was a respected Jewish rabbi"],
      answer: 1,
      explain: {
        en: "Before his conversion, Paul (Saul) actively persecuted Christians. He had a dramatic conversion experience on the road to Damascus.",
        ru: "До обращения Павел (Савл) активно преследовал христиан. У него был драматический опыт обращения на дороге в Дамаск."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // Islam & Arabian Geography (Questions 22-47)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "Why do geographers call Arabia a 'crossroads' location?",
      options: ["It is home to very few cultures or people", "Trade routes linking Africa, Asia, and Europe run through it", "People from many different cultures live there", "All trade routes end in Arabia"],
      answer: 1,
      explain: {
        en: "Arabia is called a crossroads because major trade routes between Africa, Asia, and Europe passed through the Arabian Peninsula.",
        ru: "Аравию называют перекрестком, потому что основные торговые пути между Африкой, Азией и Европой проходили через Аравийский полуостров."
      },
      points: 1
    },
    {
      prompt: "The Sunnah is based on the:",
      options: ["hadith", "Shariah", "Qur'an", "Five Pillars of Islam"],
      answer: 0,
      explain: {
        en: "The Sunnah is based on the hadith—collections of Muhammad's words, actions, and teachings.",
        ru: "Сунна основана на хадисах — сборниках слов, действий и учений Мухаммада."
      },
      points: 1
    },
    {
      prompt: "Which goal would have been most important to nomads?",
      options: ["getting food and water for their animals", "building large temples", "getting water for their crops", "collecting spices, gold, and other goods"],
      answer: 0,
      explain: {
        en: "Nomads moved constantly to find fresh grazing land and water for their herds of camels, goats, and sheep.",
        ru: "Кочевники постоянно перемещались, чтобы найти свежие пастбища и воду для своих стад верблюдов, коз и овец."
      },
      points: 1
    },
    {
      prompt: "What content is included in the Qur'an?",
      options: ["guidelines for moral behavior", "Muhammad's words and actions", "interpretation of the Sunnah", "description of the life of Muhammad"],
      answer: 0,
      explain: {
        en: "The Qur'an contains guidelines for moral behavior, laws, and religious teachings that Muslims believe are the word of God (Allah).",
        ru: "Коран содержит руководство по нравственному поведению, законы и религиозные учения, которые мусульмане считают словом Бога (Аллаха)."
      },
      points: 1
    },
    {
      prompt: "Which of the following is an Islamic belief?",
      options: ["The Sunnah is the exact word of God", "Muhammad was the son of God", "Allah is the only God", "Muhammad's house in Medina is Islam's most sacred place"],
      answer: 2,
      explain: {
        en: "The central belief of Islam is monotheism—that Allah is the one and only God. This is stated in the Shahada (declaration of faith).",
        ru: "Центральное убеждение ислама — монотеизм: Аллах является единственным Богом. Это заявлено в Шахаде (декларации веры)."
      },
      points: 1
    },
    {
      prompt: "After Muhammad's death, the title given to Islam's highest leaders was:",
      options: ["successor", "caliph", "sultan", "emperor"],
      answer: 1,
      explain: {
        en: "Caliph means 'successor' in Arabic. The caliphs were the political and religious leaders of the Islamic community after Muhammad.",
        ru: "Халиф означает 'преемник' на арабском языке. Халифы были политическими и религиозными лидерами исламского сообщества после Мухаммада."
      },
      points: 1
    },
    {
      prompt: "Water on the Arabian peninsula is located mainly:",
      options: ["in inland lakes", "in underground aquifers", "in scattered oases", "in forested areas"],
      answer: 2,
      explain: {
        en: "The Arabian Peninsula is mostly desert. Water is found primarily in scattered oases—fertile areas with springs or wells.",
        ru: "Аравийский полуостров в основном пустынный. Вода находится главным образом в разбросанных оазисах — плодородных местах с источниками или колодцами."
      },
      points: 1
    },
    {
      prompt: "An example of something clearly stated in the Qur'an is:",
      options: ["that Muslims should not eat pork", "that slavery should be banned", "that it is bad to owe someone money", "that Islam should be expanded to North Africa"],
      answer: 0,
      explain: {
        en: "The Qur'an explicitly forbids Muslims from eating pork, which is considered impure in Islamic dietary law.",
        ru: "Коран явно запрещает мусульманам есть свинину, которая считается нечистой в исламских диетических законах."
      },
      points: 1
    },
    {
      prompt: "The inner struggle that people go through to obey God is called:",
      options: ["hegira", "minaret", "hadith", "jihad"],
      answer: 3,
      explain: {
        en: "Jihad means 'struggle' or 'effort' in Arabic. It can refer to the inner spiritual struggle to obey God and live righteously.",
        ru: "Джихад означает 'борьба' или 'усилие' на арабском. Это может относиться к внутренней духовной борьбе, чтобы подчиняться Богу и жить праведно."
      },
      points: 1
    },
    {
      prompt: "Which of these events happened first?",
      options: ["Muhammad began to talk about his messages", "Muhammad went to the hills to pray and meditate", "Mecca's rulers threatened Muhammad", "Muhammad traveled to Medina"],
      answer: 1,
      explain: {
        en: "Muhammad first went to the hills to pray and meditate. It was during this meditation that he received his first revelation from Allah through the angel Gabriel.",
        ru: "Мухаммад сначала пошел в горы молиться и медитировать. Именно во время этой медитации он получил свое первое откровение от Аллаха через ангела Гавриила."
      },
      points: 1
    },
    {
      prompt: "The people of Mecca accepted Muhammad's teaching:",
      options: ["after several years of fighting", "shortly after he began teaching", "shortly after he arrived in Medina", "shortly after he married Khadija"],
      answer: 0,
      explain: {
        en: "Mecca's leaders initially rejected Muhammad's teachings. It took several years of conflict before Muhammad returned and peacefully conquered Mecca in 630 CE.",
        ru: "Лидеры Мекки первоначально отвергли учение Мухаммада. Потребовалось несколько лет конфликта, прежде чем Мухаммад вернулся и мирно завоевал Мекку в 630 году н.э."
      },
      points: 1
    },
    {
      prompt: "The hajj is a:",
      options: ["pilgrimage to Mecca that Muslims are expected to make", "time of fasting", "prayer that happens several times per day", "statement of faith"],
      answer: 0,
      explain: {
        en: "The hajj is the pilgrimage to Mecca that every Muslim who is physically and financially able must make at least once in their lifetime.",
        ru: "Хадж — это паломничество в Мекку, которое каждый мусульманин, физически и финансово способный, должен совершить хотя бы раз в жизни."
      },
      points: 1
    },
    {
      prompt: "The battles that unified Arabia into a Muslim state were directed by:",
      options: ["Muhammad", "Esma'il", "Mehmed II", "Abu Bakr"],
      answer: 3,
      explain: {
        en: "Abu Bakr, the first caliph after Muhammad's death, led military campaigns that unified the Arabian Peninsula under Islam.",
        ru: "Абу Бакр, первый халиф после смерти Мухаммада, возглавил военные кампании, которые объединили Аравийский полуостров под исламом."
      },
      points: 1
    },
    {
      prompt: "Most early caliphs were:",
      options: ["not Muslims", "members of the Umayyad family", "members of the Abbasid family", "Ottoman Turks"],
      answer: 1,
      explain: {
        en: "The Umayyad dynasty (661-750 CE) ruled the Islamic caliphate for nearly 90 years, establishing Damascus as their capital.",
        ru: "Династия Омейядов (661-750 гг. н.э.) правила исламским халифатом почти 90 лет, сделав Дамаск своей столицей."
      },
      points: 1
    },
    {
      prompt: "Two cities that grew up during the spread of Islam were:",
      options: ["Mecca and Medina", "Baghdad and Cordoba", "Constantinople and Mecca", "Jerusalem and Medina"],
      answer: 1,
      explain: {
        en: "Baghdad (founded in 762 CE) and Cordoba became major centers of Islamic culture, learning, and commerce during the Islamic Golden Age.",
        ru: "Багдад (основан в 762 г. н.э.) и Кордова стали главными центрами исламской культуры, образования и торговли во время Золотого века ислама."
      },
      points: 1
    },
    {
      prompt: "Traders went to African market towns to get slaves as well as:",
      options: ["cloth goods", "porcelain", "ivory", "iron"],
      answer: 2,
      explain: {
        en: "Ivory (from elephant tusks) was a valuable trade commodity in African markets, along with gold, salt, and slaves.",
        ru: "Слоновая кость (из бивней слонов) была ценным торговым товаром на африканских рынках, наряду с золотом, солью и рабами."
      },
      points: 1
    },
    {
      prompt: "Nearly everyone who lived in the Byzantine Empire was:",
      options: ["Christian", "Jewish", "Greek", "Muslim"],
      answer: 0,
      explain: {
        en: "Christianity was the dominant religion of the Byzantine Empire. Most citizens followed Eastern Orthodox Christianity.",
        ru: "Христианство было доминирующей религией Византийской империи. Большинство граждан следовали восточному православному христианству."
      },
      points: 1
    },
    {
      prompt: "Jewish religious leaders are called:",
      options: ["rabbis", "priests", "bishops", "Apostles"],
      answer: 0,
      explain: {
        en: "Rabbis are Jewish religious teachers and leaders who interpret Jewish law and lead religious services.",
        ru: "Раввины — это еврейские религиозные учителя и лидеры, которые толкуют еврейский закон и проводят религиозные службы."
      },
      points: 1
    },
    {
      prompt: "One non-Roman feature in the Byzantine Empire was:",
      options: ["Latin drama", "the Greek language", "Christianity", "religious art"],
      answer: 1,
      explain: {
        en: "Unlike the Western Roman Empire which used Latin, the Byzantine Empire used Greek as its primary language.",
        ru: "В отличие от Западной Римской империи, которая использовала латынь, Византийская империя использовала греческий язык в качестве основного."
      },
      points: 1
    },
    {
      prompt: "What are the Gospels?",
      options: ["Jewish laws", "letters written by Jewish missionaries", "trade centers in the Byzantine Empire", "accounts of Jesus's life and teachings"],
      answer: 3,
      explain: {
        en: "The four Gospels (Matthew, Mark, Luke, and John) are the first four books of the New Testament that describe Jesus's life and teachings.",
        ru: "Четыре Евангелия (Матфей, Марк, Лука и Иоанн) — это первые четыре книги Нового Завета, описывающие жизнь и учения Иисуса."
      },
      points: 1
    },
    {
      prompt: "What do Jews consider the holiest day of the entire year?",
      options: ["Hanukkah", "Passover", "Easter", "Yom Kippur"],
      answer: 3,
      explain: {
        en: "Yom Kippur (Day of Atonement) is the holiest day in Judaism, dedicated to prayer, fasting, and repentance.",
        ru: "Йом Киппур (День искупления) — самый святой день в иудаизме, посвященный молитве, посту и покаянию."
      },
      points: 1
    },
    {
      prompt: "What was the most important difference between Muhammad's teachings and the beliefs of other Arabs?",
      options: ["Muhammad taught that people should be kind to the poor", "Muhammad taught that there was only one God", "Muhammad taught that there were many gods", "Muhammad taught that people should make pilgrimages to Kaaba"],
      answer: 1,
      explain: {
        en: "The most revolutionary aspect of Muhammad's teaching was monotheism—belief in one God (Allah)—while most Arabs worshipped many gods.",
        ru: "Самым революционным аспектом учения Мухаммада был монотеизм — вера в одного Бога (Аллаха) — в то время как большинство арабов поклонялись многим богам."
      },
      points: 1
    },
    {
      prompt: "Muslims initially showed tolerance by:",
      options: ["accepting other people's religious beliefs", "converting others to Islam", "allowing only Christians to practice their religion", "conquering the Berbers"],
      answer: 0,
      explain: {
        en: "Early Islamic empires generally allowed Christians and Jews (People of the Book) to practice their religions, though they had to pay a special tax.",
        ru: "Ранние исламские империи обычно позволяли христианам и евреям (Людям Книги) исповедовать свои религии, хотя они должны были платить специальный налог."
      },
      points: 1
    },
    {
      prompt: "Animal products, herbs, and cooking supplies were traded in:",
      options: ["observatories", "the Kaaba", "nomadic encampments", "towns centered around oases"],
      answer: 3,
      explain: {
        en: "Oasis towns served as important trading centers where nomads and merchants exchanged goods like spices, animals, and food.",
        ru: "Города-оазисы служили важными торговыми центрами, где кочевники и торговцы обменивались товарами, такими как специи, животные и еда."
      },
      points: 1
    },
    {
      prompt: "According to the Qur'an, paradise is:",
      options: ["a perfect society ruled by Muhammad", "a beautiful garden full of fine food and drink", "just a legend", "a place where all people can share their ideas"],
      answer: 1,
      explain: {
        en: "The Qur'an describes paradise (Jannah) as a beautiful garden with rivers, fruits, and all good things for the faithful.",
        ru: "Коран описывает рай (Джанна) как прекрасный сад с реками, фруктами и всеми благами для верных."
      },
      points: 1
    },
    {
      prompt: "We can see the importance of the hegira to Muslims by the fact:",
      options: ["that Muslims observe Ramadan", "that the Muslim calendar began in 622", "that Islamic law is still practiced", "that Mecca is the holiest place in Islam"],
      answer: 1,
      explain: {
        en: "The Hegira (Muhammad's journey from Mecca to Medina in 622 CE) was so important that the Islamic calendar begins from that year.",
        ru: "Хиджра (путешествие Мухаммада из Мекки в Медину в 622 году н.э.) была настолько важной, что исламский календарь начинается с этого года."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // Historical Terms and Concepts (Questions 48-57)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "Where did Jesus grow up?",
      options: ["Jerusalem", "Nazareth", "Bethlehem", "Canaan"],
      answer: 1,
      explain: {
        en: "Jesus was born in Bethlehem but grew up in Nazareth, a small town in Galilee.",
        ru: "Иисус родился в Вифлееме, но вырос в Назарете, небольшом городе в Галилее."
      },
      points: 1
    },
    {
      prompt: "What were Jesus's followers called?",
      options: ["Apostles", "disciples", "rabbis", "bishops"],
      answer: 1,
      explain: {
        en: "Jesus's followers were called disciples. The twelve closest disciples became known as the Apostles.",
        ru: "Последователей Иисуса называли учениками (disciples). Двенадцать ближайших учеников стали известны как Апостолы."
      },
      points: 1
    },
    {
      prompt: "What is the name of the Hebrews' religion?",
      options: ["Christianity", "Judaism", "Islam", "Monotheism"],
      answer: 1,
      explain: {
        en: "Judaism is the religion of the Hebrew people, based on the Torah and belief in one God.",
        ru: "Иудаизм — это религия еврейского народа, основанная на Торе и вере в одного Бога."
      },
      points: 1
    },
    {
      prompt: "What was the capital of the eastern Roman Empire?",
      options: ["Rome", "Alexandria", "Jerusalem", "Constantinople"],
      answer: 3,
      explain: {
        en: "Constantinople (modern-day Istanbul) was the capital of the Byzantine (Eastern Roman) Empire from 330 CE until 1453 CE.",
        ru: "Константинополь (современный Стамбул) был столицей Византийской (Восточной Римской) империи с 330 по 1453 год н.э."
      },
      points: 1
    },
    {
      prompt: "Where did the Hebrews settle and become known as the Israelites?",
      options: ["Egypt", "Mesopotamia", "Canaan", "Byzantium"],
      answer: 2,
      explain: {
        en: "The Hebrews settled in Canaan (the Promised Land) and became known as the Israelites after establishing their kingdom there.",
        ru: "Евреи поселились в Ханаане (Обетованной Земле) и стали известны как израильтяне после основания там своего царства."
      },
      points: 1
    },
    {
      prompt: "What are pictures made from pieces of colored glass or stone called?",
      options: ["frescoes", "mosaics", "murals", "icons"],
      answer: 1,
      explain: {
        en: "Mosaics are artworks created by arranging small pieces of colored glass, stone, or tile to form pictures or patterns.",
        ru: "Мозаики — это произведения искусства, созданные путем размещения небольших кусочков цветного стекла, камня или плитки для формирования картин или узоров."
      },
      points: 1
    },
    {
      prompt: "What is one of the Byzantine Empire's most beautiful churches?",
      options: ["St. Peter's Basilica", "Notre Dame", "Hagia Sophia", "Westminster Abbey"],
      answer: 2,
      explain: {
        en: "The Hagia Sophia, built under Emperor Justinian in 537 CE, is famous for its massive dome and beautiful architecture.",
        ru: "Айя-София, построенная при императоре Юстиниане в 537 году н.э., известна своим массивным куполом и красивой архитектурой."
      },
      points: 1
    },
    {
      prompt: "What is the code of moral laws given to Moses?",
      options: ["The Torah", "The Ten Commandments", "Justinian's Code", "The Talmud"],
      answer: 1,
      explain: {
        en: "The Ten Commandments are the fundamental moral and religious laws that, according to the Bible, God gave to Moses on Mount Sinai.",
        ru: "Десять заповедей — это фундаментальные моральные и религиозные законы, которые, согласно Библии, Бог дал Моисею на горе Синай."
      },
      points: 1
    },
    {
      prompt: "What is the book with commentaries explaining Jewish laws?",
      options: ["Talmud", "Torah", "Qur'an", "Gospels"],
      answer: 0,
      explain: {
        en: "The Talmud is a central text of Judaism containing rabbinic discussions and interpretations of Jewish law and ethics.",
        ru: "Талмуд — центральный текст иудаизма, содержащий раввинские обсуждения и толкования еврейского закона и этики."
      },
      points: 1
    },
    {
      prompt: "What is the worship of only one God called?",
      options: ["polytheism", "monotheism", "atheism", "paganism"],
      answer: 1,
      explain: {
        en: "Monotheism is the belief in one God. Judaism, Christianity, and Islam are all monotheistic religions.",
        ru: "Монотеизм — это вера в одного Бога. Иудаизм, христианство и ислам — все монотеистические религии."
      },
      points: 1
    }
  ],

  // ═════════════════════════════════════════════════════════════════
  // 📖 ENGLISH
  // ═════════════════════════════════════════════════════════════════
  English: [
    // ─────────────────────────────────────────────────────────────────
    // Grammar: Parts of Speech (Questions 1-10)
    // Identify the part of speech of the word/phrase shown in CAPS
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "What part of speech is the word 'in' in this sentence: Giant pandas live IN the bamboo forests of China.",
      options: ["verb", "preposition", "interjection", "adverb"],
      answer: 1,
      explain: {
        en: "The word 'in' is a preposition showing location.",
        ru: "Слово 'in' — это предлог, указывающий на местоположение."
      },
      points: 1
    },
    {
      prompt: "What part of speech is the word 'and' in this sentence: The beautiful waters of Tahiti attract swimmers AND surfers from around the world.",
      options: ["preposition", "transitive verb", "helping verb", "coordinating conjunction"],
      answer: 3,
      explain: {
        en: "The word 'and' is a coordinating conjunction connecting two nouns (swimmers and surfers).",
        ru: "Слово 'and' — это сочинительный союз, соединяющий два существительных (пловцов и серферов)."
      },
      points: 1
    },
    {
      prompt: "What part of speech is the word 'read' in this sentence: Our teacher READ aloud several poems by Countee Cullen.",
      options: ["action verb", "linking verb", "coordinating conjunction", "correlative conjunction"],
      answer: 0,
      explain: {
        en: "'Read' is an action verb showing what the teacher did.",
        ru: "'Read' — это глагол действия, показывающий, что делал учитель."
      },
      points: 1
    },
    {
      prompt: "What part of speech is the word 'during' in this sentence: Do you ever wonder where insects go DURING the winter?",
      options: ["verb", "preposition", "interjection", "linking verb"],
      answer: 1,
      explain: {
        en: "The word 'during' is a preposition showing time.",
        ru: "Слово 'during' — это предлог, указывающий на время."
      },
      points: 1
    },
    {
      prompt: "What part of speech is the word 'Oh' in this sentence: OH! You've cleaned the entire house!",
      options: ["adverb", "action verb", "interjection", "preposition"],
      answer: 2,
      explain: {
        en: "'Oh!' is an interjection expressing surprise or emotion.",
        ru: "'Oh!' — это междометие, выражающее удивление или эмоцию."
      },
      points: 1
    },
    {
      prompt: "What part of speech is the word 'is' in this sentence: My favorite book IS Inspirations: Stories About Women Artists.",
      options: ["linking verb", "coordinating conjunction", "preposition", "action verb"],
      answer: 0,
      explain: {
        en: "'Is' is a linking verb connecting the subject to its description.",
        ru: "'Is' — это глагол-связка, соединяющий подлежащее с его описанием."
      },
      points: 1
    },
    {
      prompt: "What part of speech is the word 'carefully' in this sentence: Fascinated by the traditional Indian artwork, we CAREFULLY examined the yarn paintings.",
      options: ["transitive verb", "helping verb", "interjection", "adverb"],
      answer: 3,
      explain: {
        en: "'Carefully' is an adverb modifying the verb 'examined'.",
        ru: "'Carefully' — это наречие, определяющее глагол 'examined'."
      },
      points: 1
    },
    {
      prompt: "What part of speech is 'either...or' in this sentence: My little sister wants to be EITHER an astronaut OR a ballerina when she grows up.",
      options: ["adverb", "verb phrase", "correlative conjunction", "prepositional phrase"],
      answer: 2,
      explain: {
        en: "'Either...or' is a correlative conjunction showing a choice between two options.",
        ru: "'Either...or' — это парный союз, показывающий выбор между двумя вариантами."
      },
      points: 1
    },
    {
      prompt: "What part of speech is 'should eat' in this sentence: You SHOULD EAT at least five servings of fruit and vegetables every day.",
      options: ["verb phrase", "prepositional phrase", "linking verb", "adverb"],
      answer: 0,
      explain: {
        en: "'Should eat' is a verb phrase (helping verb + main verb).",
        ru: "'Should eat' — это глагольная фраза (вспомогательный глагол + основной глагол)."
      },
      points: 1
    },
    {
      prompt: "What part of speech is the word 'will' in this sentence: Prem WILL teach us to play a form of volleyball that is popular in Thailand.",
      options: ["linking verb", "adverb", "helping verb", "coordinating conjunction"],
      answer: 2,
      explain: {
        en: "'Will' is a helping verb (auxiliary) used to form the future tense.",
        ru: "'Will' — это вспомогательный глагол для образования будущего времени."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // Vocabulary: Word Meanings (Questions 11-60)
    // Choose the closest meaning of the given word/phrase
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "audible sounds",
      options: ["able to be heard", "very loud", "very irritating", "suddenly loud"],
      answer: 0,
      explain: {
        en: "'Audible' means capable of being heard.",
        ru: "'Audible' означает 'слышимый, различимый на слух'."
      },
      points: 1
    },
    {
      prompt: "a candid opinion",
      options: ["clever", "bad", "frank", "silly"],
      answer: 2,
      explain: {
        en: "'Candid' means honest and straightforward.",
        ru: "'Candid' означает 'откровенный, прямой'."
      },
      points: 1
    },
    {
      prompt: "conspicuous errors",
      options: ["often overlooked", "very serious", "easily seen", "sometimes hidden"],
      answer: 2,
      explain: {
        en: "'Conspicuous' means obvious or easily noticeable.",
        ru: "'Conspicuous' означает 'заметный, бросающийся в глаза'."
      },
      points: 1
    },
    {
      prompt: "to sing from the diaphragm",
      options: ["middle of the stage", "muscles below the chest cavity", "supporting structure", "third balcony of an opera house"],
      answer: 1,
      explain: {
        en: "The diaphragm is the muscle below the chest used for breathing.",
        ru: "Диафрагма — это мышца ниже грудной клетки, используемая для дыхания."
      },
      points: 1
    },
    {
      prompt: "idle time",
      options: ["leisure", "winter", "historical", "hectic"],
      answer: 0,
      explain: {
        en: "'Idle' means not active or free time.",
        ru: "'Idle' означает 'свободное, незанятое время'."
      },
      points: 1
    },
    {
      prompt: "a lenient judge",
      options: ["famous", "severe", "merciful", "young"],
      answer: 2,
      explain: {
        en: "'Lenient' means not strict, forgiving.",
        ru: "'Lenient' означает 'снисходительный, мягкий'."
      },
      points: 1
    },
    {
      prompt: "a modest person",
      options: ["friendly", "sensitive", "boastful", "reserved"],
      answer: 3,
      explain: {
        en: "'Modest' means humble and not boastful.",
        ru: "'Modest' означает 'скромный, не хвастливый'."
      },
      points: 1
    },
    {
      prompt: "a notorious thief",
      options: ["secretive", "long-term", "well-known", "common"],
      answer: 2,
      explain: {
        en: "'Notorious' means famous for something bad.",
        ru: "'Notorious' означает 'печально известный'."
      },
      points: 1
    },
    {
      prompt: "subtle maneuvers",
      options: ["coordinated", "obvious", "successful", "indirect"],
      answer: 3,
      explain: {
        en: "'Subtle' means not obvious, delicate or indirect.",
        ru: "'Subtle' означает 'тонкий, неочевидный, косвенный'."
      },
      points: 1
    },
    {
      prompt: "on the threshold of a great adventure",
      options: ["beginning", "excitement", "expectation", "possibility"],
      answer: 0,
      explain: {
        en: "'Threshold' means the starting point or entrance.",
        ru: "'Threshold' означает 'порог, начало'."
      },
      points: 1
    },
    {
      prompt: "to aggravate a wound",
      options: ["attempt to treat", "examine carefully", "avoid touching", "make worse"],
      answer: 3,
      explain: {
        en: "'Aggravate' means to make something worse.",
        ru: "'Aggravate' означает 'усугубить, ухудшить'."
      },
      points: 1
    },
    {
      prompt: "to anticipate a test",
      options: ["fail", "expect", "prepare", "miss"],
      answer: 1,
      explain: {
        en: "'Anticipate' means to expect or look forward to something.",
        ru: "'Anticipate' означает 'ожидать, предвидеть'."
      },
      points: 1
    },
    {
      prompt: "the caliber of instruction",
      options: ["course", "purpose", "quality", "method"],
      answer: 2,
      explain: {
        en: "'Caliber' means the quality or standard of something.",
        ru: "'Caliber' означает 'качество, уровень'."
      },
      points: 1
    },
    {
      prompt: "to distract the speaker",
      options: ["locate", "disturb", "distress", "question"],
      answer: 1,
      explain: {
        en: "'Distract' means to take attention away from something.",
        ru: "'Distract' означает 'отвлекать внимание'."
      },
      points: 1
    },
    {
      prompt: "her eloquent speech",
      options: ["short", "expressive", "boring", "difficult"],
      answer: 1,
      explain: {
        en: "'Eloquent' means fluent and persuasive in speaking.",
        ru: "'Eloquent' означает 'красноречивый, выразительный'."
      },
      points: 1
    },
    {
      prompt: "to fulfill requirements",
      options: ["satisfy", "ignore", "establish", "forget"],
      answer: 0,
      explain: {
        en: "'Fulfill' means to satisfy or complete requirements.",
        ru: "'Fulfill' означает 'выполнить, удовлетворить'."
      },
      points: 1
    },
    {
      prompt: "to maintain the house",
      options: ["hunt for", "thoroughly clean", "furnish nicely", "keep up"],
      answer: 3,
      explain: {
        en: "'Maintain' means to keep in good condition.",
        ru: "'Maintain' означает 'поддерживать в хорошем состоянии'."
      },
      points: 1
    },
    {
      prompt: "a phase of growth",
      options: ["peak", "stage", "burst", "problem"],
      answer: 1,
      explain: {
        en: "'Phase' means a stage or step in a process.",
        ru: "'Phase' означает 'фаза, этап'."
      },
      points: 1
    },
    {
      prompt: "a placid lake",
      options: ["large", "peaceful", "choppy", "polluted"],
      answer: 1,
      explain: {
        en: "'Placid' means calm and peaceful.",
        ru: "'Placid' означает 'спокойный, безмятежный'."
      },
      points: 1
    },
    {
      prompt: "the porcelain vase",
      options: ["antique", "elegant", "expensive", "ceramic"],
      answer: 3,
      explain: {
        en: "'Porcelain' is a type of ceramic material.",
        ru: "'Porcelain' (фарфор) — это вид керамического материала."
      },
      points: 1
    },
    {
      prompt: "a dashing hero",
      options: ["lively", "handsome", "wounded", "speedy"],
      answer: 0,
      explain: {
        en: "'Dashing' means energetic, lively, and stylish.",
        ru: "'Dashing' означает 'энергичный, бодрый, элегантный'."
      },
      points: 1
    },
    {
      prompt: "a dismal view",
      options: ["miserable", "beautiful", "wide", "restricted"],
      answer: 0,
      explain: {
        en: "'Dismal' means depressing or gloomy.",
        ru: "'Dismal' означает 'мрачный, унылый'."
      },
      points: 1
    },
    {
      prompt: "the flaw in their plan",
      options: ["imperfection", "step", "consideration", "purpose"],
      answer: 0,
      explain: {
        en: "'Flaw' means a defect or weakness.",
        ru: "'Flaw' означает 'недостаток, изъян'."
      },
      points: 1
    },
    {
      prompt: "a frail flower",
      options: ["foreign", "delicate", "rare", "bright"],
      answer: 1,
      explain: {
        en: "'Frail' means weak or delicate.",
        ru: "'Frail' означает 'хрупкий, слабый'."
      },
      points: 1
    },
    {
      prompt: "the obligation to help",
      options: ["responsibility", "refusal", "desire", "determination"],
      answer: 0,
      explain: {
        en: "'Obligation' means a duty or responsibility.",
        ru: "'Obligation' означает 'обязанность, обязательство'."
      },
      points: 1
    },
    {
      prompt: "obstinate people",
      options: ["generous", "loud", "stubborn", "kind"],
      answer: 2,
      explain: {
        en: "'Obstinate' means stubborn or refusing to change.",
        ru: "'Obstinate' означает 'упрямый, несговорчивый'."
      },
      points: 1
    },
    {
      prompt: "optional equipment",
      options: ["very expensive", "not elaborate", "not required", "not useful"],
      answer: 2,
      explain: {
        en: "'Optional' means not required, a choice.",
        ru: "'Optional' означает 'необязательный, по выбору'."
      },
      points: 1
    },
    {
      prompt: "principally works for",
      options: ["reluctantly", "chiefly", "enthusiastically", "eagerly"],
      answer: 1,
      explain: {
        en: "'Principally' means mainly or chiefly.",
        ru: "'Principally' означает 'главным образом, в основном'."
      },
      points: 1
    },
    {
      prompt: "spontaneous outbursts",
      options: ["rehearsed", "loud", "silly", "unplanned"],
      answer: 3,
      explain: {
        en: "'Spontaneous' means happening naturally without planning.",
        ru: "'Spontaneous' означает 'спонтанный, неожиданный'."
      },
      points: 1
    },
    {
      prompt: "a tiresome task",
      options: ["hard", "simple", "long", "boring"],
      answer: 3,
      explain: {
        en: "'Tiresome' means boring or tedious.",
        ru: "'Tiresome' означает 'утомительный, скучный'."
      },
      points: 1
    },
    {
      prompt: "authentic antiques",
      options: ["unusual", "valuable", "genuine", "counterfeit"],
      answer: 2,
      explain: {
        en: "'Authentic' means real or genuine.",
        ru: "'Authentic' означает 'подлинный, настоящий'."
      },
      points: 1
    },
    {
      prompt: "comparable value",
      options: ["hidden", "lasting", "similar", "different"],
      answer: 2,
      explain: {
        en: "'Comparable' means similar or equivalent.",
        ru: "'Comparable' означает 'сопоставимый, схожий'."
      },
      points: 1
    },
    {
      prompt: "to contemplate an action",
      options: ["think about", "ask about", "hope for", "laugh at"],
      answer: 0,
      explain: {
        en: "'Contemplate' means to think deeply about something.",
        ru: "'Contemplate' означает 'размышлять, обдумывать'."
      },
      points: 1
    },
    {
      prompt: "dual engine system",
      options: ["four-part", "powerful", "complicated", "two-part"],
      answer: 3,
      explain: {
        en: "'Dual' means consisting of two parts.",
        ru: "'Dual' означает 'двойной, состоящий из двух частей'."
      },
      points: 1
    },
    {
      prompt: "formal agreement",
      options: ["very important", "carefully worded", "according to the rules", "spur of the moment"],
      answer: 2,
      explain: {
        en: "'Formal' means official or according to established rules.",
        ru: "'Formal' означает 'официальный, соответствующий правилам'."
      },
      points: 1
    },
    {
      prompt: "immortal heroes",
      options: ["destructive", "undying", "admirable", "slain"],
      answer: 1,
      explain: {
        en: "'Immortal' means living forever, never dying.",
        ru: "'Immortal' означает 'бессмертный'."
      },
      points: 1
    },
    {
      prompt: "to interpret the poem",
      options: ["explain", "write", "publish", "read"],
      answer: 0,
      explain: {
        en: "'Interpret' means to explain the meaning of something.",
        ru: "'Interpret' означает 'толковать, объяснять'."
      },
      points: 1
    },
    {
      prompt: "the legendary hero",
      options: ["traditional", "real-life", "old-fashioned", "brave"],
      answer: 0,
      explain: {
        en: "'Legendary' means famous in legends or traditional stories.",
        ru: "'Legendary' означает 'легендарный'."
      },
      points: 1
    },
    {
      prompt: "the myth of Atlas",
      options: ["story", "strength", "size", "battle"],
      answer: 0,
      explain: {
        en: "'Myth' means a traditional story, usually about gods or heroes.",
        ru: "'Myth' означает 'миф, легенда'."
      },
      points: 1
    },
    {
      prompt: "a profound idea",
      options: ["momentary", "silly", "deep", "cynical"],
      answer: 2,
      explain: {
        en: "'Profound' means very deep or intense.",
        ru: "'Profound' означает 'глубокий, основательный'."
      },
      points: 1
    },
    {
      prompt: "to cherish something",
      options: ["write down", "often ignore", "hold dear", "strongly dislike"],
      answer: 2,
      explain: {
        en: "'Cherish' means to care for something deeply.",
        ru: "'Cherish' означает 'дорожить, лелеять'."
      },
      points: 1
    },
    {
      prompt: "consistent with the rules",
      options: ["in agreement", "in disagreement", "in conflict", "in competition"],
      answer: 0,
      explain: {
        en: "'Consistent' means in agreement or compatible with.",
        ru: "'Consistent' означает 'соответствующий, согласующийся'."
      },
      points: 1
    },
    {
      prompt: "a crucial error",
      options: ["serious", "common", "silly", "careless"],
      answer: 0,
      explain: {
        en: "'Crucial' means extremely important or critical.",
        ru: "'Crucial' означает 'критический, решающий'."
      },
      points: 1
    },
    {
      prompt: "to designate our leader",
      options: ["replace", "select", "ignore", "follow"],
      answer: 1,
      explain: {
        en: "'Designate' means to choose or appoint someone.",
        ru: "'Designate' означает 'назначать, выбирать'."
      },
      points: 1
    },
    {
      prompt: "to gratify me",
      options: ["irritate", "question", "please", "expect"],
      answer: 2,
      explain: {
        en: "'Gratify' means to please or satisfy.",
        ru: "'Gratify' означает 'удовлетворять, радовать'."
      },
      points: 1
    },
    {
      prompt: "indispensable items",
      options: ["trivial", "small", "expensive", "necessary"],
      answer: 3,
      explain: {
        en: "'Indispensable' means absolutely necessary.",
        ru: "'Indispensable' означает 'незаменимый, необходимый'."
      },
      points: 1
    },
    {
      prompt: "Greek mythology",
      options: ["type of food", "set of customs", "range of mountains", "collection of stories"],
      answer: 3,
      explain: {
        en: "'Mythology' is a collection of myths or traditional stories.",
        ru: "'Mythology' (мифология) — это собрание мифов или традиционных историй."
      },
      points: 1
    },
    {
      prompt: "to resolve to do it",
      options: ["decide", "forget", "avoid", "permit"],
      answer: 0,
      explain: {
        en: "'Resolve' means to make a firm decision.",
        ru: "'Resolve' означает 'решить, принять твердое решение'."
      },
      points: 1
    },
    {
      prompt: "versatile people",
      options: ["simple in tastes", "skilled in many things", "frequently angry", "able to speak well"],
      answer: 1,
      explain: {
        en: "'Versatile' means having many skills or uses.",
        ru: "'Versatile' означает 'многосторонний, разносторонний'."
      },
      points: 1
    },
    {
      prompt: "to defend with vigor",
      options: ["help", "skill", "strength", "equipment"],
      answer: 2,
      explain: {
        en: "'Vigor' means energy, enthusiasm, or strength.",
        ru: "'Vigor' означает 'сила, энергия, энтузиазм'."
      },
      points: 1
    }
  ],

  // ═════════════════════════════════════════════════════════════════
  // ➗ MATH
  // ═════════════════════════════════════════════════════════════════
  Math: [
    // ─────────────────────────────────────────────────────────────────
    // Integer Operations (Questions 1-10)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "What is -5 + (-11)?",
      options: ["-14", "-16", "16", "-6"],
      answer: 1,
      explain: {
        en: "When adding two negative numbers, add their absolute values and keep the negative sign: 5 + 11 = 16, so -5 + (-11) = -16.",
        ru: "При сложении двух отрицательных чисел складываем их модули и сохраняем знак минус: 5 + 11 = 16, поэтому -5 + (-11) = -16."
      },
      points: 1
    },
    {
      prompt: "What is 10 + (-22)?",
      options: ["12", "-12", "10", "-10"],
      answer: 1,
      explain: {
        en: "When adding numbers with different signs, subtract the smaller absolute value from the larger and use the sign of the larger: 22 - 10 = 12, and since 22 is negative, the answer is -12.",
        ru: "При сложении чисел с разными знаками вычитаем меньший модуль из большего и берем знак большего числа: 22 - 10 = 12, и так как 22 отрицательное, ответ -12."
      },
      points: 1
    },
    {
      prompt: "What is -5 - (-5)?",
      options: ["10", "-10", "55", "0"],
      answer: 3,
      explain: {
        en: "Subtracting a negative is the same as adding a positive: -5 - (-5) = -5 + 5 = 0.",
        ru: "Вычитание отрицательного числа равносильно сложению с положительным: -5 - (-5) = -5 + 5 = 0."
      },
      points: 1
    },
    {
      prompt: "Evaluate x - y if x = -3 and y = -4.",
      options: ["-7", "7", "1", "-1"],
      answer: 2,
      explain: {
        en: "Substitute the values: -3 - (-4) = -3 + 4 = 1.",
        ru: "Подставляем значения: -3 - (-4) = -3 + 4 = 1."
      },
      points: 1
    },
    {
      prompt: "The distance between -4 and 5 is:",
      options: ["1", "9", "-1", "-9"],
      answer: 1,
      explain: {
        en: "Distance is always positive. Find the difference: 5 - (-4) = 5 + 4 = 9.",
        ru: "Расстояние всегда положительное. Находим разность: 5 - (-4) = 5 + 4 = 9."
      },
      points: 1
    },
    {
      prompt: "Evaluate ab if a = -6 and b = -5.",
      options: ["-11", "30", "-30", "11"],
      answer: 1,
      explain: {
        en: "Multiply: (-6) × (-5) = 30. The product of two negative numbers is positive.",
        ru: "Умножаем: (-6) × (-5) = 30. Произведение двух отрицательных чисел положительное."
      },
      points: 1
    },
    {
      prompt: "Evaluate y/x if y = -10 and x = 2.",
      options: ["-20", "-10", "-5", "10"],
      answer: 2,
      explain: {
        en: "Divide: (-10) ÷ 2 = -5. A negative divided by a positive gives a negative result.",
        ru: "Делим: (-10) ÷ 2 = -5. Отрицательное деленное на положительное дает отрицательный результат."
      },
      points: 1
    },
    {
      prompt: "Evaluate -4(3) + (-7).",
      options: ["-19", "19", "0", "10"],
      answer: 0,
      explain: {
        en: "First multiply: -4 × 3 = -12. Then add: -12 + (-7) = -19.",
        ru: "Сначала умножаем: -4 × 3 = -12. Затем складываем: -12 + (-7) = -19."
      },
      points: 1
    },
    {
      prompt: "The additive inverse of -4 is:",
      options: ["0", "1", "4", "-4"],
      answer: 2,
      explain: {
        en: "The additive inverse (opposite) of a number is the number that, when added to it, gives 0. The opposite of -4 is 4.",
        ru: "Аддитивная инверсия (противоположное число) — это число, которое при сложении с данным дает 0. Противоположное для -4 это 4."
      },
      points: 1
    },
    {
      prompt: "0.3 in fraction form is:",
      options: ["3/10", "3/1", "1/3", "10/3"],
      answer: 0,
      explain: {
        en: "0.3 means 3 tenths, which is written as 3/10.",
        ru: "0.3 означает 3 десятых, что записывается как 3/10."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // Fractions and Decimals (Questions 11-20)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "If x = -3 and y = 5, evaluate x - y.",
      options: ["-2", "2", "-8", "8"],
      answer: 2,
      explain: {
        en: "Substitute: -3 - 5 = -8.",
        ru: "Подставляем: -3 - 5 = -8."
      },
      points: 1
    },
    {
      prompt: "0.7 in fractional form is:",
      options: ["1/7", "7/1", "7/10", "7/9"],
      answer: 2,
      explain: {
        en: "0.7 means 7 tenths, which is 7/10.",
        ru: "0.7 означает 7 десятых, что равно 7/10."
      },
      points: 1
    },
    {
      prompt: "0.7̅ (0.777... repeating) in fraction form is:",
      options: ["1/7", "7/1", "7/10", "7/9"],
      answer: 3,
      explain: {
        en: "A repeating decimal 0.777... equals 7/9. To convert: let x = 0.7̅, then 10x = 7.7̅, so 9x = 7, thus x = 7/9.",
        ru: "Периодическая дробь 0.777... равна 7/9. Пусть x = 0.7̅, тогда 10x = 7.7̅, откуда 9x = 7, следовательно x = 7/9."
      },
      points: 1
    },
    {
      prompt: "The distance between -2 and 5 is:",
      options: ["0", "-8", "7", "-7"],
      answer: 2,
      explain: {
        en: "Distance = |5 - (-2)| = |5 + 2| = 7.",
        ru: "Расстояние = |5 - (-2)| = |5 + 2| = 7."
      },
      points: 1
    },
    {
      prompt: "The additive inverse of -0.25 is:",
      options: ["0.25", "-2", "-0.25", "25"],
      answer: 0,
      explain: {
        en: "The additive inverse of -0.25 is 0.25, because -0.25 + 0.25 = 0.",
        ru: "Аддитивная инверсия числа -0.25 это 0.25, так как -0.25 + 0.25 = 0."
      },
      points: 1
    },
    {
      prompt: "0.5̅ (0.555... repeating) in fraction form is:",
      options: ["5/9", "7/1", "5/10", "7/9"],
      answer: 0,
      explain: {
        en: "The repeating decimal 0.555... equals 5/9.",
        ru: "Периодическая дробь 0.555... равна 5/9."
      },
      points: 1
    },
    {
      prompt: "0.7 in fraction form is:",
      options: ["1/7", "7/1", "7/10", "7/9"],
      answer: 2,
      explain: {
        en: "0.7 = 7/10 (seven tenths).",
        ru: "0.7 = 7/10 (семь десятых)."
      },
      points: 1
    },
    {
      prompt: "If x = 3 and y = 5, evaluate x - y.",
      options: ["-2", "2", "-8", "8"],
      answer: 0,
      explain: {
        en: "Substitute: 3 - 5 = -2.",
        ru: "Подставляем: 3 - 5 = -2."
      },
      points: 1
    },
    {
      prompt: "What is -5 + 11?",
      options: ["-14", "-16", "16", "6"],
      answer: 3,
      explain: {
        en: "When adding numbers with different signs: 11 - 5 = 6. Since 11 (positive) has the larger absolute value, the result is positive: 6.",
        ru: "При сложении чисел с разными знаками: 11 - 5 = 6. Так как 11 (положительное) имеет больший модуль, результат положительный: 6."
      },
      points: 1
    },
    {
      prompt: "What is (-2/3) ÷ (1/9)?",
      options: ["-14", "-16", "-6", "16"],
      answer: 2,
      explain: {
        en: "Division of fractions: (-2/3) ÷ (1/9) = (-2/3) × (9/1) = -18/3 = -6.",
        ru: "Деление дробей: (-2/3) ÷ (1/9) = (-2/3) × (9/1) = -18/3 = -6."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // Advanced Operations (Questions 21-30)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "What is -2.45 - (-3.9)?",
      options: ["1.45", "-1.45", "1.6", "-1.6"],
      answer: 0,
      explain: {
        en: "Subtracting a negative is adding: -2.45 + 3.9 = 1.45.",
        ru: "Вычитание отрицательного равно сложению: -2.45 + 3.9 = 1.45."
      },
      points: 1
    },
    {
      prompt: "What is -2.45 - (-3.9)? (Repeat for practice)",
      options: ["1.45", "-1.45", "1.6", "-1.6"],
      answer: 0,
      explain: {
        en: "This is the same calculation: -2.45 - (-3.9) = -2.45 + 3.9 = 1.45.",
        ru: "Это тот же пример: -2.45 - (-3.9) = -2.45 + 3.9 = 1.45."
      },
      points: 1
    },
    {
      prompt: "The additive inverse of -2.4 is:",
      options: ["-2", "2.4", "-2.4", "-1.6"],
      answer: 1,
      explain: {
        en: "The additive inverse of -2.4 is 2.4.",
        ru: "Аддитивная инверсия числа -2.4 это 2.4."
      },
      points: 1
    },
    {
      prompt: "-3/4 in decimal form is:",
      options: ["0.75", "-0.25", "-0.75", "0.25"],
      answer: 2,
      explain: {
        en: "Divide: -3 ÷ 4 = -0.75.",
        ru: "Делим: -3 ÷ 4 = -0.75."
      },
      points: 1
    },
    {
      prompt: "-3/4 in decimal form is: (Repeat for practice)",
      options: ["0.75", "-0.25", "-0.75", "0.25"],
      answer: 2,
      explain: {
        en: "Same calculation: -3/4 = -0.75.",
        ru: "Тот же пример: -3/4 = -0.75."
      },
      points: 1
    },
    {
      prompt: "The distance between 2 and 5 is:",
      options: ["3", "-8", "7", "-7"],
      answer: 0,
      explain: {
        en: "Distance = |5 - 2| = 3.",
        ru: "Расстояние = |5 - 2| = 3."
      },
      points: 1
    },
    {
      prompt: "The distance between -2 and 5 is:",
      options: ["0", "-8", "7", "-7"],
      answer: 2,
      explain: {
        en: "Distance = |5 - (-2)| = |5 + 2| = 7.",
        ru: "Расстояние = |5 - (-2)| = |5 + 2| = 7."
      },
      points: 1
    },
    {
      prompt: "-1/4 in decimal form is:",
      options: ["0.5", "-0.25", "-0.75", "0.25"],
      answer: 1,
      explain: {
        en: "Divide: -1 ÷ 4 = -0.25.",
        ru: "Делим: -1 ÷ 4 = -0.25."
      },
      points: 1
    },
    {
      prompt: "1/2 in decimal form is:",
      options: ["0.5", "-0.25", "-0.75", "0.25"],
      answer: 0,
      explain: {
        en: "1/2 = 0.5 (one half equals five tenths).",
        ru: "1/2 = 0.5 (одна вторая равна пяти десятым)."
      },
      points: 1
    },
    {
      prompt: "What is 22 ÷ (-2)?",
      options: ["11", "-11", "12", "-12"],
      answer: 1,
      explain: {
        en: "Divide: 22 ÷ (-2) = -11. A positive divided by a negative gives a negative result.",
        ru: "Делим: 22 ÷ (-2) = -11. Положительное деленное на отрицательное дает отрицательный результат."
      },
      points: 1
    }
  ],

  // ═════════════════════════════════════════════════════════════════
  // 🇩🇪 GERMAN
  // ═════════════════════════════════════════════════════════════════
  German: [
    // ─────────────────────────────────────────────────────────────────
    // Grammar: Possessive Pronouns & Prepositions (Questions 1-20)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "Jan und Timo haben ein Zimmer zusammen. Hier ist es. (Jan and Timo have a room together. Here it is.)",
      options: ["Hier ist sein Zimmer.", "Hier ist ihr Zimmer.", "Hier sind seine Zimmer."],
      answer: 1,
      explain: {
        en: "'Ihr' is the possessive pronoun for 'they' (plural masculine). Since Jan and Timo are two people, we use 'ihr Zimmer' (their room).",
        ru: "'Ihr' — притяжательное местоимение для 'они' (множественное число). Так как Ян и Тимо — два человека, используем 'ihr Zimmer' (их комната)."
      },
      points: 1
    },
    {
      prompt: "Sie räumen den gemeinsamen Schrank auf. (They are cleaning up their shared closet.)",
      options: ["Sie räumen ihren Schrank auf.", "Sie räumen seinen Schrank auf.", "Sie räumen ihre Schränke auf."],
      answer: 0,
      explain: {
        en: "'Ihren' is the correct possessive pronoun in accusative case for masculine nouns. 'Den Schrank' (the closet) is masculine accusative.",
        ru: "'Ihren' — правильное притяжательное местоимение в винительном падеже для существительных мужского рода. 'Den Schrank' — мужской род в винительном падеже."
      },
      points: 1
    },
    {
      prompt: "Sie haben eine Schwester. Sie heißt Lara. (They have a sister. Her name is Lara.)",
      options: ["Ihre Schwester heißt Lara.", "Seine Schwester heißt Lara.", "Sie sind Laras Schwester."],
      answer: 0,
      explain: {
        en: "'Ihre Schwester' means 'their sister'. Since we're talking about Jan and Timo's sister, we use 'ihre' (their).",
        ru: "'Ihre Schwester' означает 'их сестра'. Поскольку речь о сестре Яна и Тимо, используем 'ihre' (их)."
      },
      points: 1
    },
    {
      prompt: "Frau Held, ich finde Ihren Sohn sehr nett. (Mrs. Held, I find your son very nice.)",
      options: ["Frau Held, Sein Sohn ist sehr nett.", "Frau Held, ihr Sohn ist nett.", "Frau Held, Ihr Sohn ist aber nett."],
      answer: 2,
      explain: {
        en: "'Ihr' (capitalized) is the formal possessive pronoun 'your' used when addressing someone politely with 'Sie'. 'Ihr Sohn' means 'your son' (formal).",
        ru: "'Ihr' (с заглавной буквы) — вежливое притяжательное местоимение 'ваш' при обращении на 'Вы'. 'Ihr Sohn' означает 'ваш сын' (вежливая форма)."
      },
      points: 1
    },
    {
      prompt: "Herr Alt, gehören die CDs Ihnen? (Mr. Alt, do the CDs belong to you?)",
      options: ["Herr Alt, sind das seine CDs?", "Herr Alt, sind das Ihre CDs?", "Herr Alt, sind das ihre CDs?"],
      answer: 1,
      explain: {
        en: "'Ihre' (capitalized) is the formal possessive pronoun for 'your' when using the polite form 'Sie'. 'Ihre CDs' means 'your CDs' (formal).",
        ru: "'Ihre' (с заглавной буквы) — вежливое притяжательное местоимение 'ваши' при обращении на 'Вы'. 'Ihre CDs' означает 'ваши диски'."
      },
      points: 1
    },
    {
      prompt: "Der Lehrer steht ________ der Tafel. (The teacher stands ________ the board.)",
      options: ["über", "hinter", "vor"],
      answer: 2,
      explain: {
        en: "'Vor' means 'in front of'. A teacher typically stands in front of the board when teaching.",
        ru: "'Vor' означает 'перед'. Учитель обычно стоит перед доской во время урока."
      },
      points: 1
    },
    {
      prompt: "Ein Hund sitzt ________ dem Baum. (A dog sits ________ the tree.)",
      options: ["auf", "über", "unter"],
      answer: 2,
      explain: {
        en: "'Unter' means 'under'. Dogs commonly sit or rest under trees for shade.",
        ru: "'Unter' означает 'под'. Собаки часто сидят или отдыхают под деревьями в тени."
      },
      points: 1
    },
    {
      prompt: "Das Bett steht ________ dem Schrank. (The bed stands ________ the closet.)",
      options: ["neben", "über", "hinter"],
      answer: 0,
      explain: {
        en: "'Neben' means 'next to' or 'beside'. In a bedroom, the bed is typically placed next to the closet.",
        ru: "'Neben' означает 'рядом с'. В спальне кровать обычно стоит рядом со шкафом."
      },
      points: 1
    },
    {
      prompt: "Ein Vogel sitzt ________ dem Dach. (A bird sits ________ the roof.)",
      options: ["unter", "auf", "neben"],
      answer: 1,
      explain: {
        en: "'Auf' means 'on'. Birds sit on roofs, not under or beside them.",
        ru: "'Auf' означает 'на'. Птицы сидят на крышах, а не под ними или рядом."
      },
      points: 1
    },
    {
      prompt: "Der Garten ist ________ der Garage. (The garden is ________ the garage.)",
      options: ["über", "auf", "hinter"],
      answer: 2,
      explain: {
        en: "'Hinter' means 'behind'. Gardens are typically located behind houses or garages.",
        ru: "'Hinter' означает 'за, позади'. Сады обычно располагаются за домами или гаражами."
      },
      points: 1
    },
    {
      prompt: "Herr Wolf, holen Sie ________ Kinder ab? (Mr. Wolf, are you picking up ________ children?)",
      options: ["eure", "seine", "Ihre"],
      answer: 2,
      explain: {
        en: "'Ihre' (capitalized) is the formal possessive pronoun for 'your'. When asking Mr. Wolf politely, we use 'Ihre Kinder' (your children).",
        ru: "'Ihre' (с заглавной) — вежливое притяжательное местоимение 'ваши'. При вежливом обращении к господину Вольфу используем 'Ihre Kinder' (ваши дети)."
      },
      points: 1
    },
    {
      prompt: "Paul und Pia besuchen ________ Onkel. (Paul and Pia visit ________ uncle.)",
      options: ["ihren", "seinen", "Ihren"],
      answer: 0,
      explain: {
        en: "'Ihren' is the possessive pronoun 'their' in accusative case for masculine nouns. 'Den Onkel' (uncle) is masculine accusative.",
        ru: "'Ihren' — притяжательное местоимение 'их' в винительном падеже для мужского рода. 'Den Onkel' (дядя) — мужской род в винительном падеже."
      },
      points: 1
    },
    {
      prompt: "Ich gehe heute mit ________ Mutter aus. (I'm going out with ________ mother today.)",
      options: ["meinem", "meiner", "meine"],
      answer: 1,
      explain: {
        en: "'Meiner' is the possessive pronoun 'my' in dative case for feminine nouns. 'Mit' (with) requires dative case, and 'Mutter' (mother) is feminine.",
        ru: "'Meiner' — притяжательное местоимение 'моя' в дательном падеже для женского рода. Предлог 'mit' (с) требует дательного падежа, 'Mutter' (мама) — женский род."
      },
      points: 1
    },
    {
      prompt: "Wie gefällt ________ Eltern deine neue Jacke? (How do ________ parents like your new jacket?)",
      options: ["deinen", "deinem", "deine"],
      answer: 0,
      explain: {
        en: "'Deinen' is the possessive pronoun 'your' in dative plural. 'Gefallen' (to like) requires dative case, and 'Eltern' (parents) is plural.",
        ru: "'Deinen' — притяжательное местоимение 'твоим' в дательном падеже множественного числа. Глагол 'gefallen' требует дательного падежа, 'Eltern' (родители) — множественное число."
      },
      points: 1
    },
    {
      prompt: "Wir haben ein ________ Sofa. (We have a ________ sofa.)",
      options: ["neuen", "neues", "neue"],
      answer: 1,
      explain: {
        en: "'Neues' is the correct adjective ending after 'ein' for neuter nouns in accusative case. 'Das Sofa' is neuter.",
        ru: "'Neues' — правильное окончание прилагательного после 'ein' для среднего рода в винительном падеже. 'Das Sofa' — средний род."
      },
      points: 1
    },
    {
      prompt: "Ich möchte so gern einen ________ Hund. (I would really like a ________ dog.)",
      options: ["kleinen", "kleines", "kleine"],
      answer: 0,
      explain: {
        en: "'Kleinen' is the correct adjective ending after 'einen' (masculine accusative article). 'Der Hund' (dog) is masculine.",
        ru: "'Kleinen' — правильное окончание прилагательного после 'einen' (артикль мужского рода в винительном падеже). 'Der Hund' (собака) — мужской род."
      },
      points: 1
    },
    {
      prompt: "Einen Kamm findet man ________. (You find a comb ________.)",
      options: ["im Wohnzimmer", "auf dem Balkon", "im Bad"],
      answer: 2,
      explain: {
        en: "A comb is found in the bathroom (im Bad), where people groom themselves.",
        ru: "Расческу находят в ванной комнате (im Bad), где люди приводят себя в порядок."
      },
      points: 1
    },
    {
      prompt: "Die Lampe hängt ________ dem Tisch. (The lamp hangs ________ the table.)",
      options: ["unter", "auf", "über"],
      answer: 2,
      explain: {
        en: "'Über' means 'above' or 'over'. A lamp typically hangs above the table.",
        ru: "'Über' означает 'над'. Лампа обычно висит над столом."
      },
      points: 1
    },
    {
      prompt: "Ein Teppich liegt ________ dem Bett. (A carpet lies ________ the bed.)",
      options: ["vor", "hinter", "auf"],
      answer: 0,
      explain: {
        en: "'Vor' means 'in front of'. A carpet typically lies in front of the bed.",
        ru: "'Vor' означает 'перед'. Ковер обычно лежит перед кроватью."
      },
      points: 1
    },
    {
      prompt: "Im Schlafzimmer stehen ________. (In the bedroom there are ________.)",
      options: ["Herd und Kühlschrank", "Sofa und Sessel", "Bett und Schrank"],
      answer: 2,
      explain: {
        en: "A bedroom typically contains a bed and a closet (Bett und Schrank), not kitchen appliances or living room furniture.",
        ru: "В спальне обычно находятся кровать и шкаф (Bett und Schrank), а не кухонная техника или мебель для гостиной."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // Situational Phrases (Questions 21-23)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "Ich muss heute in die Musikschule. (I must go to music school today.) — Was sagen Sie?",
      options: ["Aber ich habe keine Lust.", "Aber sie ist so müde.", "Aber das macht nichts.", "Viel Erfolg!"],
      answer: 0,
      explain: {
        en: "'Aber ich habe keine Lust' (But I don't feel like it) is an appropriate response showing reluctance about having to go.",
        ru: "'Aber ich habe keine Lust' (Но мне не хочется) — подходящий ответ, показывающий нежелание идти."
      },
      points: 1
    },
    {
      prompt: "Sara darf heute Abend in die Disco gehen. (Sara is allowed to go to the disco tonight.) — Was sagen Sie?",
      options: ["Aber ich habe keine Lust.", "Aber sie ist so müde.", "Aber das macht nichts.", "Das ist toll!"],
      answer: 1,
      explain: {
        en: "'Aber sie ist so müde' (But she is so tired) is a logical contrast to being allowed to go out.",
        ru: "'Aber sie ist so müde' (Но она так устала) — логичный контраст к разрешению пойти."
      },
      points: 1
    },
    {
      prompt: "Lukas hat eine Fünf in Latein. (Lukas got a five (failing grade) in Latin.) — Was sagen Sie?",
      options: ["Aber ich habe keine Lust.", "Aber das macht nichts.", "Aber sie ist so müde.", "Sehr gut!"],
      answer: 1,
      explain: {
        en: "'Aber das macht nichts' (But that doesn't matter) is a consoling response to a bad grade.",
        ru: "'Aber das macht nichts' (Но это ничего) — утешительный ответ на плохую оценку."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // Fill in the Blanks (Questions 24-31)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "Der ________ steht vor dem Schreibtisch. (The ________ stands in front of the desk.)",
      options: ["Tisch", "Stuhl", "Kühlschrank", "Lampe"],
      answer: 1,
      explain: {
        en: "A chair (Stuhl) typically stands in front of a desk.",
        ru: "Стул (Stuhl) обычно стоит перед письменным столом."
      },
      points: 1
    },
    {
      prompt: "Im ________ stehen die Bücher. (In the ________ are the books.)",
      options: ["Tisch", "Stuhl", "Regal", "Teppich"],
      answer: 2,
      explain: {
        en: "Books are kept in a shelf/bookcase (Regal).",
        ru: "Книги хранятся на полке (Regal)."
      },
      points: 1
    },
    {
      prompt: "Ein Asterix-________ hängt über dem Bett. (An Asterix ________ hangs above the bed.)",
      options: ["Plakat", "Decke", "Lampe", "Teppich"],
      answer: 0,
      explain: {
        en: "A poster (Plakat) hangs on the wall above the bed.",
        ru: "Плакат (Plakat) висит на стене над кроватью."
      },
      points: 1
    },
    {
      prompt: "Eine ________ hängt über dem Tisch. (A ________ hangs above the table.)",
      options: ["Decke", "Lampe", "Plakat", "Teppich"],
      answer: 1,
      explain: {
        en: "A lamp (Lampe) typically hangs above the table.",
        ru: "Лампа (Lampe) обычно висит над столом."
      },
      points: 1
    },
    {
      prompt: "Ein Stuhl steht hinter dem ________. (A chair stands behind the ________.)",
      options: ["Regal", "Lampe", "Tisch", "Plakat"],
      answer: 2,
      explain: {
        en: "A chair stands behind the table (Tisch).",
        ru: "Стул стоит за столом (Tisch)."
      },
      points: 1
    },
    {
      prompt: "Eine ________ liegt auf dem Bett. (A ________ lies on the bed.)",
      options: ["Lampe", "Decke", "Tisch", "Stuhl"],
      answer: 1,
      explain: {
        en: "A blanket (Decke) lies on the bed.",
        ru: "Одеяло (Decke) лежит на кровати."
      },
      points: 1
    },
    {
      prompt: "Der ________ steht in der Küche. (The ________ stands in the kitchen.)",
      options: ["Stuhl", "Kühlschrank", "Regal", "Plakat"],
      answer: 1,
      explain: {
        en: "The refrigerator (Kühlschrank) is in the kitchen.",
        ru: "Холодильник (Kühlschrank) находится на кухне."
      },
      points: 1
    },
    {
      prompt: "Der ________ liegt unter den Sesseln. (The ________ lies under the armchairs.)",
      options: ["Teppich", "Tisch", "Stuhl", "Schrank"],
      answer: 0,
      explain: {
        en: "A carpet (Teppich) lies under furniture.",
        ru: "Ковер (Teppich) лежит под мебелью."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // What Doesn't Belong? (Questions 32-36)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "Was passt nicht im Wohnzimmer? (What doesn't belong in the living room?)",
      options: ["Sofa", "Sessel", "Seife", "Teppich"],
      answer: 2,
      explain: {
        en: "Seife (soap) belongs in the bathroom, not the living room.",
        ru: "Seife (мыло) должно быть в ванной, а не в гостиной."
      },
      points: 1
    },
    {
      prompt: "Was passt nicht im Schlafzimmer? (What doesn't belong in the bedroom?)",
      options: ["Schrank", "Decke", "Bett", "Herd"],
      answer: 3,
      explain: {
        en: "Herd (stove) belongs in the kitchen, not the bedroom.",
        ru: "Herd (плита) должна быть на кухне, а не в спальне."
      },
      points: 1
    },
    {
      prompt: "Was passt nicht in der Küche? (What doesn't belong in the kitchen?)",
      options: ["Herd", "Kühlschrank", "Toilette", "Tisch"],
      answer: 2,
      explain: {
        en: "Toilette (toilet) belongs in the bathroom, not the kitchen.",
        ru: "Toilette (туалет) должен быть в ванной, а не на кухне."
      },
      points: 1
    },
    {
      prompt: "Was passt nicht im Jugendzimmer? (What doesn't belong in a teenager's room?)",
      options: ["Waschmaschine", "Lampe", "Poster", "Regal"],
      answer: 0,
      explain: {
        en: "Waschmaschine (washing machine) belongs in the bathroom or basement, not in a teenager's room.",
        ru: "Waschmaschine (стиральная машина) должна быть в ванной или подвале, а не в комнате подростка."
      },
      points: 1
    },
    {
      prompt: "Was passt nicht im Bad? (What doesn't belong in the bathroom?)",
      options: ["Waschbecken", "Toilette", "Dusche", "Sofa"],
      answer: 3,
      explain: {
        en: "Sofa belongs in the living room, not the bathroom.",
        ru: "Sofa (диван) должен быть в гостиной, а не в ванной."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // Compound Nouns (Questions 37-43)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "Ein Brot mit Wurst ist ein... (Bread with sausage is a...)",
      options: ["Wurstbrot", "Brotwurst", "Wurstsalat", "Pausenbrot"],
      answer: 0,
      explain: {
        en: "Wurstbrot is a compound noun: Wurst (sausage) + Brot (bread).",
        ru: "Wurstbrot — составное существительное: Wurst (колбаса) + Brot (хлеб)."
      },
      points: 1
    },
    {
      prompt: "Eine Decke für den Tisch ist eine... (A cover for the table is a...)",
      options: ["Deckentisch", "Tischdecke", "Tischtuch", "Tischplatte"],
      answer: 1,
      explain: {
        en: "Tischdecke is a compound noun: Tisch (table) + Decke (cover/cloth).",
        ru: "Tischdecke — составное существительное: Tisch (стол) + Decke (покрывало)."
      },
      points: 1
    },
    {
      prompt: "Ein Brot für die Pausen ist ein... (Bread for breaks is a...)",
      options: ["Brotwurst", "Brotpause", "Pausenbrot", "Pausenzeit"],
      answer: 2,
      explain: {
        en: "Pausenbrot is a compound noun: Pausen (breaks) + Brot (bread).",
        ru: "Pausenbrot — составное существительное: Pausen (перемены) + Brot (хлеб)."
      },
      points: 1
    },
    {
      prompt: "Eine Marke für einen Brief ist eine... (A stamp for a letter is a...)",
      options: ["Briefmarke", "Briefpapier", "Briefkasten", "Markbrief"],
      answer: 0,
      explain: {
        en: "Briefmarke is a compound noun: Brief (letter) + Marke (stamp).",
        ru: "Briefmarke — составное существительное: Brief (письмо) + Marke (марка)."
      },
      points: 1
    },
    {
      prompt: "Ein Salat aus Kartoffeln ist ein... (A salad from potatoes is a...)",
      options: ["Salatpflanze", "Kartoffelsalat", "Kartoffelsuppe", "Salatkartoffel"],
      answer: 1,
      explain: {
        en: "Kartoffelsalat is a compound noun: Kartoffel (potato) + Salat (salad).",
        ru: "Kartoffelsalat — составное существительное: Kartoffel (картофель) + Salat (салат)."
      },
      points: 1
    },
    {
      prompt: "Ein Platz zum Spielen ist ein... (A place for playing is a...)",
      options: ["Spielplatz", "Spielzeug", "Spielraum", "Platzkarte"],
      answer: 0,
      explain: {
        en: "Spielplatz is a compound noun: Spiel (game/play) + Platz (place).",
        ru: "Spielplatz — составное существительное: Spiel (игра) + Platz (место)."
      },
      points: 1
    },
    {
      prompt: "Ein Zimmer zum Schlafen ist ein... (A room for sleeping is a...)",
      options: ["Schlafzimmer", "Wohnzimmer", "Schlafsaal", "Zimmerservice"],
      answer: 0,
      explain: {
        en: "Schlafzimmer is a compound noun: Schlaf (sleep) + Zimmer (room).",
        ru: "Schlafzimmer — составное существительное: Schlaf (сон) + Zimmer (комната)."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // Antonyms (Questions 44-54)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "Das Gegenteil von 'voll' ist... (The opposite of 'full' is...)",
      options: ["schwach", "leer", "dunkel", "fleiβig"],
      answer: 1,
      explain: {
        en: "Leer (empty) is the opposite of voll (full).",
        ru: "Leer (пустой) — противоположность слову voll (полный)."
      },
      points: 1
    },
    {
      prompt: "Das Gegenteil von 'stark' ist... (The opposite of 'strong' is...)",
      options: ["schwach", "leer", "zufrieden", "hell"],
      answer: 0,
      explain: {
        en: "Schwach (weak) is the opposite of stark (strong).",
        ru: "Schwach (слабый) — противоположность слову stark (сильный)."
      },
      points: 1
    },
    {
      prompt: "Das Gegenteil von 'unzufrieden' ist... (The opposite of 'dissatisfied' is...)",
      options: ["leer", "schwach", "zufrieden", "dunkel"],
      answer: 2,
      explain: {
        en: "Zufrieden (satisfied) is the opposite of unzufrieden (dissatisfied).",
        ru: "Zufrieden (довольный) — противоположность слову unzufrieden (недовольный)."
      },
      points: 1
    },
    {
      prompt: "Das Gegenteil von 'hell' ist... (The opposite of 'bright' is...)",
      options: ["voll", "dunkel", "schwach", "leer"],
      answer: 1,
      explain: {
        en: "Dunkel (dark) is the opposite of hell (bright/light).",
        ru: "Dunkel (темный) — противоположность слову hell (светлый)."
      },
      points: 1
    },
    {
      prompt: "Das Gegenteil von 'faul' ist... (The opposite of 'lazy' is...)",
      options: ["unzufrieden", "fleiβig", "schwach", "voll"],
      answer: 1,
      explain: {
        en: "Fleiβig (hardworking/diligent) is the opposite of faul (lazy).",
        ru: "Fleiβig (прилежный) — противоположность слову faul (ленивый)."
      },
      points: 1
    },
    {
      prompt: "Das Gegenteil von 'unvorsichtig' ist... (The opposite of 'careless' is...)",
      options: ["breit", "vorsichtig", "bequem", "wunderbar"],
      answer: 1,
      explain: {
        en: "Vorsichtig (careful) is the opposite of unvorsichtig (careless).",
        ru: "Vorsichtig (осторожный) — противоположность слову unvorsichtig (неосторожный)."
      },
      points: 1
    },
    {
      prompt: "Das Gegenteil von 'schrecklich' ist... (The opposite of 'terrible' is...)",
      options: ["vorsichtig", "praktisch", "gemütlich", "wunderbar"],
      answer: 3,
      explain: {
        en: "Wunderbar (wonderful) is the opposite of schrecklich (terrible).",
        ru: "Wunderbar (чудесный) — противоположность слову schrecklich (ужасный)."
      },
      points: 1
    },
    {
      prompt: "Das Gegenteil von 'unpraktisch' ist... (The opposite of 'impractical' is...)",
      options: ["vorsichtig", "praktisch", "breit", "unbequem"],
      answer: 1,
      explain: {
        en: "Praktisch (practical) is the opposite of unpraktisch (impractical).",
        ru: "Praktisch (практичный) — противоположность слову unpraktisch (непрактичный)."
      },
      points: 1
    },
    {
      prompt: "Das Gegenteil von 'unbequem' ist... (The opposite of 'uncomfortable' is...)",
      options: ["bequem", "breit", "wunderbar", "vorsichtig"],
      answer: 0,
      explain: {
        en: "Bequem (comfortable) is the opposite of unbequem (uncomfortable).",
        ru: "Bequem (удобный) — противоположность слову unbequem (неудобный)."
      },
      points: 1
    },
    {
      prompt: "Das Gegenteil von 'ungemütlich' ist... (The opposite of 'uncomfortable/uncozy' is...)",
      options: ["praktisch", "gemütlich", "bequem", "breit"],
      answer: 1,
      explain: {
        en: "Gemütlich (cozy/comfortable) is the opposite of ungemütlich (uncomfortable/uncozy).",
        ru: "Gemütlich (уютный) — противоположность слову ungemütlich (неуютный)."
      },
      points: 1
    },
    {
      prompt: "Das Gegenteil von 'schlank' ist... (The opposite of 'slim' is...)",
      options: ["breit", "gemütlich", "vorsichtig", "praktisch"],
      answer: 0,
      explain: {
        en: "Breit (broad/wide) is the opposite of schlank (slim/slender).",
        ru: "Breit (широкий) — противоположность слову schlank (стройный)."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // Categories (Questions 55-62)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "Das Wort 'Schrank' gehört zu... (The word 'Schrank' belongs to...)",
      options: ["Möbel", "Körperteile", "Speisen", "Gebäude"],
      answer: 0,
      explain: {
        en: "Schrank (closet/wardrobe) is a piece of furniture (Möbel).",
        ru: "Schrank (шкаф) — это мебель (Möbel)."
      },
      points: 1
    },
    {
      prompt: "Das Wort 'Bauch' gehört zu... (The word 'Bauch' belongs to...)",
      options: ["Möbel", "Körperteile", "Speisen", "Gebäude"],
      answer: 1,
      explain: {
        en: "Bauch (belly/stomach) is a body part (Körperteile).",
        ru: "Bauch (живот) — это часть тела (Körperteile)."
      },
      points: 1
    },
    {
      prompt: "Das Wort 'Fleisch' gehört zu... (The word 'Fleisch' belongs to...)",
      options: ["Möbel", "Körperteile", "Speisen", "Gebäude"],
      answer: 2,
      explain: {
        en: "Fleisch (meat) is food (Speisen).",
        ru: "Fleisch (мясо) — это еда (Speisen)."
      },
      points: 1
    },
    {
      prompt: "Das Wort 'Kirche' gehört zu... (The word 'Kirche' belongs to...)",
      options: ["Möbel", "Körperteile", "Speisen", "Gebäude in der Stadt"],
      answer: 3,
      explain: {
        en: "Kirche (church) is a building in the city (Gebäude in der Stadt).",
        ru: "Kirche (церковь) — это здание в городе (Gebäude in der Stadt)."
      },
      points: 1
    },
    {
      prompt: "Das Wort 'Stuhl' gehört zu... (The word 'Stuhl' belongs to...)",
      options: ["Möbel", "Körperteile", "Speisen", "Gebäude"],
      answer: 0,
      explain: {
        en: "Stuhl (chair) is a piece of furniture (Möbel).",
        ru: "Stuhl (стул) — это мебель (Möbel)."
      },
      points: 1
    },
    {
      prompt: "Das Wort 'Rücken' gehört zu... (The word 'Rücken' belongs to...)",
      options: ["Möbel", "Körperteile", "Speisen", "Gebäude"],
      answer: 1,
      explain: {
        en: "Rücken (back) is a body part (Körperteile).",
        ru: "Rücken (спина) — это часть тела (Körperteile)."
      },
      points: 1
    },
    {
      prompt: "Das Wort 'Hähnchen' gehört zu... (The word 'Hähnchen' belongs to...)",
      options: ["Möbel", "Körperteile", "Speisen", "Gebäude"],
      answer: 2,
      explain: {
        en: "Hähnchen (chicken) is food (Speisen).",
        ru: "Hähnchen (курица) — это еда (Speisen)."
      },
      points: 1
    },
    {
      prompt: "Das Wort 'Bahnhof' gehört zu... (The word 'Bahnhof' belongs to...)",
      options: ["Möbel", "Körperteile", "Speisen", "Gebäude in der Stadt"],
      answer: 3,
      explain: {
        en: "Bahnhof (train station) is a building in the city (Gebäude in der Stadt).",
        ru: "Bahnhof (вокзал) — это здание в городе (Gebäude in der Stadt)."
      },
      points: 1
    },

    // ─────────────────────────────────────────────────────────────────
    // Room Names (Questions 63-65)
    // ─────────────────────────────────────────────────────────────────

    {
      prompt: "Hier gibt es einen Herd und eine Spülmaschine. (Here there is a stove and a dishwasher.)",
      options: ["Garage", "Küche", "Schlafzimmer", "Bad"],
      answer: 1,
      explain: {
        en: "A stove and dishwasher are found in the kitchen (Küche).",
        ru: "Плита и посудомоечная машина находятся на кухне (Küche)."
      },
      points: 1
    },
    {
      prompt: "Das ist der Platz für das Auto. (This is the place for the car.)",
      options: ["Küche", "Garage", "Schlafzimmer", "Bad"],
      answer: 1,
      explain: {
        en: "The place for a car is the garage (Garage).",
        ru: "Место для машины — это гараж (Garage)."
      },
      points: 1
    },
    {
      prompt: "Hier steht immer ein Bett. (Here there is always a bed.)",
      options: ["Küche", "Garage", "Schlafzimmer", "Wohnzimmer"],
      answer: 2,
      explain: {
        en: "A bed is always in the bedroom (Schlafzimmer).",
        ru: "Кровать всегда находится в спальне (Schlafzimmer)."
      },
      points: 1
    }
  ],

  // ═════════════════════════════════════════════════════════════════
  // 🔬 SCIENCE
  // ═════════════════════════════════════════════════════════════════
  Science: [
    // Добавьте вопросы по Science здесь
  ]

};

// Проверка загрузки
console.log('✅ QBANK loaded successfully');
console.log('📊 Questions by subject:');
Object.keys(QBANK).forEach(subject => {
  const count = QBANK[subject].length;
  if (count > 0) {
    console.log(`   ${subject}: ${count} questions`);
  }
});
