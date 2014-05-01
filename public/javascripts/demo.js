function help(topic) {
    if (topic === undefined) {
        topic = 'default';
    }
    var message = ['topic not found'];

    var topics = {
        default : [
            'help("modules") - List modules',
            'more',
            'help'
        ],
        modules: [
            'module1()\t-\tBasics',
            'module2()\t-\tIntermediate',
            'module3()\t-\tAdvanced'
        ]
    };
    if (topics[topic] !== undefined) {
        message = topics[topic];
    }
    return 'help("' + topic + '")\n\n' + message.join('\n');
}


function module1() {
    return "Not implemented, sorry";
}

function module2() {
    return "Not implemented, sorry";
}

function module3() {
    return "Not implemented, sorry";
}

people = [
    { 'name': 'alice', 'evil': false },
    { 'name': 'bob', 'evil': false },
    { 'name': 'eve', 'evil': true }
];

articles = [
    {
        "body": "Not long after a typically underwhelming showing by the British contingent at the Wimbledon championships in July, the British Journal of Sports Medicine published the results of a study that suggested to beleaguered English tennis fans that things are only going to get worse. In the study, researchers from the Royal National Orthopaedic Hospital",
        "byline": "By GRETCHEN REYNOLDS",
        "date": "20071028",
        "title": "PHYS ED; Twist and Ouch",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/28\/sports\/playmagazine\/28physed.html"
    },
    {
        "body": "''Dead Man in Paradise: Unraveling a Murder From a Time of Revolution'' By J. B. MacKinnon The New Press, 261 pages, $24.95 hardcover Every tourist to the Caribbean glimpses on the way from the harbor to the resorts a less-than-sunny side to island life. But not many beachcombers from up north will ever know firsthand the many layers of poverty and",
        "byline": "By RICHARD B. WOODWARD",
        "date": "20071028",
        "title": "Armchair Traveler",
        "url": "http:\/\/travel.nytimes.com\/2007\/10\/28\/travel\/28armchair.html"
    },
    {
        "body": "COMEDY HASBROUCK HEIGHTS Bananas Comedy Club Joey Kola, stand-up. Friday at 9:30 p.m.; Nov. 3 at 8 and 10:30 p.m. $15 to $17.50. Bananas Comedy Club, 283 Route 17 South. (201) 727-1090; www.bananascomedyclub.com. RED BANK Count Basie Theater ''Last Comic Standing Live,'' featuring the final five contestants: Jon Reep, Lavell Crawford, Gerry Dee,",
        "date": "20071028",
        "title": "NEW JERSEY; CALENDAR",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9E03E5DE163EF93BA15753C1A9619C8B63"
    },
    {
        "body": "Not 15 months ago, they were staring each other down at a negotiating table, bargaining tensely over who should have title to 13 archaeological artifacts. But on a recent afternoon they seemed the best of colleagues, amicably discussing how museums might cope with demands for the restitution of cultural property. ''This was the enemy,'' said",
        "byline": "By ELISABETTA POVOLEDO",
        "date": "20071027",
        "title": "Returning Stolen Art: No Easy Answers",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/27\/arts\/design\/27ethi.html"
    },
    {
        "body": "Countrywide Financial, the nation's largest mortgage lender and loan servicer, reported a $1.2 billion loss yesterday for the third quarter of 2007 but said that it expected to return to profitability by the end of the year as the housing crisis subsides and it capitalizes on disruptions in the home loan market. Although the loss was Countrywide's",
        "byline": "By GRETCHEN MORGENSON",
        "date": "20071027",
        "title": "Countrywide Is Upbeat Despite Loss",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/27\/business\/27countrywide.html"
    },
    {
        "body": "Judy Mazel, author of the 1981 best-selling book ''The Beverly Hills Diet,'' which recommended eating nothing but fruit, and lots it, for the first 10 days of a six-week regimen, and which drew strong criticism from medical authorities, died in Santa Monica, Calif., on Oct. 12. She was 63 and lived in the Pacific Palisades section of Los Angeles.",
        "byline": "By DENNIS HEVESI",
        "date": "20071027",
        "title": "Judy Mazel, Creator of Best-Selling 'Beverly Hills Diet,' Is Dead at 63",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/27\/health\/nutrition\/27mazel.html"
    },
    {
        "body": "That some online games are addictive is no secret to anyone who has played a good one. They are the golf of electronic sports. The game designer Bill Roper, whose new project, Hellgate: London, is to be released next Wednesday, knows just why that is. ''It's because of the power of what psychologists call intermittent rewards,'' Mr. Roper said here",
        "byline": "By SETH SCHIESEL",
        "date": "20071027",
        "title": "Game Seeks Success Through Random Rewards",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/27\/arts\/television\/27hell.html"
    },
    {
        "body": "If you are new to contemporary art, you might find ''Art:21 -- Art in the Twenty-First Century'' a useful, mildly engaging introduction. Informed viewers will find it annoyingly superficial. The four hourlong episodes in the fourth ''Art:21'' season, starting tomorrow night on PBS, go up close and personal with 15 individual artists and one",
        "byline": "By KEN JOHNSON",
        "date": "20071027",
        "title": "TELEVISION REVIEW; New-Art Appreciation: Profiles in Concept",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9407E2DF133FF934A15753C1A9619C8B63"
    },
    {
        "body": "FOR CHILDREN 'ARTHUR LIVE!' Childhood is a time for gains: in inches and pounds, experience and privileges, maturity and knowledge. But when it comes to teeth, those years are filled with losses. It's no wonder that we have a compensatory ritual for every baby tooth that falls. That ritual drives the plot in ''Arthur Live!,'' above, a musical whose",
        "byline": "By LAUREL GRAEBER",
        "date": "20071026",
        "title": "Spare Times: For Children",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/arts\/26wkids.html"
    },
    {
        "body": "For 26 years, Kinokuniya, the Japanese bookstore chain, has served New York's Japanese-language readers from its outlet at Rockefeller Center with scores of paperbacks imported from Japan, hundreds of cellophane-wrapped manga titles and translations of the most recent Harry Potter installment. Now the company has decided that Japanese is no longer",
        "byline": "By MOTOKO RICH",
        "date": "20071026",
        "title": "Japanese Bookstore Expands Its Horizons",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/books\/26kino.html"
    },

    {
        "body": "HE HAD IT COMING How to Outsmart Your Husband and Win Your Divorce. By Stacy Schneider. 224 pp. Simon Spotlight Entertainment. $14.95. THE ART OF CHEATING A Nasty Little Book for Tricky Little Schemers and Their Hapless Victims. By Jessica Dorfman Jones. 320 pp. Pocket Books. $14.95. YOU'D better not pout, you'd better not cry, you'd better not",
        "byline": "By LIESL SCHILLINGER",
        "date": "20071223",
        "title": "BOOKS OF STYLE; Playing Fair at Divorce, Cheating on the Other Stuff",
        "url": "http:\/\/www.nytimes.com\/2007\/12\/23\/fashion\/23books.html"
    },
    {
        "body": "Rankings reflect sales, for the week ended Dec. 8, at many thousands of venues where a wide range of general interest books are sold nationwide. These include hundreds of independent book retailers (statistically weighted to represent all such outlets); national, regional and local chains; online and multimedia entertainment retailers; university,",
        "date": "20071223",
        "title": "CHILDREN'S BEST SELLERS: PICTURE BOOKS: Sunday, December 23rd 2007",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9902E1D61F3AF930A15751C1A9619C8B63"
    },
    {
        "body": "Rankings reflect sales, for the week ended Dec. 8, at many thousands of venues where a wide range of general interest books are sold nationwide. These include hundreds of independent book retailers (statistically weighted to represent all such outlets); national, regional and local chains; online and multimedia entertainment retailers; university,",
        "date": "20071223",
        "title": "CHILDREN'S BEST SELLERS: PAPERBACK BOOKS: Sunday, December 23rd 2007",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9A01E7D61F3AF930A15751C1A9619C8B63"
    },
    {
        "body": "Rankings reflect sales, for the week ending Dec. 8, at many thousands of venues where a wide range of general interest books are sold nationwide. These include hundreds of independent book retailers (statistically weighted to represent all such outlets); national, regional and local chains; online and multimedia entertainment retailers; university,",
        "date": "20071223",
        "title": "BEST SELLERS: NONFICTION: Sunday, December 23rd 2007",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9D02E0D6123AF930A15751C1A9619C8B63"
    },
    {
        "body": "DARK MATTER: The British writer Philip Pullman isn't exactly a come-from-nowhere phenomenon -- his giddy fantasy series ''His Dark Materials'' has sold millions of copies worldwide and garnered praise from critics for years. In 2002, Margo Jefferson rhapsodized about the series in an essay for The Times, headlined ''Harry Potter for Grown-Ups'':",
        "byline": "By GREGORY COWLES",
        "date": "20071223",
        "title": "TBR; TBR: Inside the List",
        "url": "http:\/\/www.nytimes.com\/2007\/12\/23\/books\/review\/23tbr.html"
    },
    {
        "body": "Imagine, if you care to, a high school stage packed with fresh-scrubbed Oklahoma teenagers, shrilly belting out a ballad of tribute to a woman of mystery whose passions they can't conceive, whose name they can scarcely pronounce: ''Mata Hari, Mata Hari -- oh what a wicked girl was she! That's the kind of girl I'll never be!'' What were her crimes?",
        "byline": "By LIESL SCHILLINGER",
        "date": "20071223",
        "title": "Sleeping With the Enemy",
        "url": "http:\/\/www.nytimes.com\/2007\/12\/23\/books\/review\/Schillinger-t.html"
    },
    {
        "body": "THE betrayal of the body, decrepitude and death: in 2007 an unprecedented number of serious films, along with the usual slasher movies, contemplated the end of life. Might they be a collective baby-boom response to looming senescence and a fraying social safety net? Or do they reflect an uneasy sense that humanity is facing end times, when global",
        "byline": "By STEPHEN HOLDEN",
        "date": "20071223",
        "title": "FILM; Films That Look Death in the Eye",
        "url": "http:\/\/www.nytimes.com\/2007\/12\/23\/movies\/23hold.html"
    },
    {
        "body": "In the parable of the lost sheep, in the Gospel of Luke, Jesus says there shall be more joy in heaven over ''one sinner that repenteth'' than over 99 just persons who need no repentance. Never mind heaven: check out the joy on the Internet. In 2001, rumors started to hit the blogosphere that Antony Flew, a British philosopher born in 1923, had",
        "byline": "By ANTHONY GOTTLIEB",
        "date": "20071223",
        "title": "I'm a Believer",
        "url": "http:\/\/www.nytimes.com\/2007\/12\/23\/books\/review\/Gottlieb-t.html"
    },
    {
        "body": "Alexander Theroux, the younger of Paul Theroux's two older brothers, is one of America's premier frotteurs, to use a French term the impeccable James Salter applies to someone who ''rubs words in his hand.'' In ''99 Novels,'' Anthony Burgess praises Theroux's second novel, ''Darconville's Cat,'' for being ''word drunk.'' And it is. It's a",
        "byline": "By DAVID BOWMAN",
        "date": "20071223",
        "title": "The Object of His Obsession",
        "url": "http:\/\/www.nytimes.com\/2007\/12\/23\/books\/review\/Bowman-t.html"
    },
    {
        "body": "As a former Op Ed columnist for this paper and a longtime voice of liberalism who is now 80 years old, you're about to publish an incisive book on the First Amendment, ''Freedom for the Thought That We Hate.'' Why would you write a book about an amendment we already know and love so well? We need to celebrate and understand our unique freedom, and",
        "byline": "Interview by DEBORAH SOLOMON",
        "date": "20071223",
        "title": "QUESTIONS FOR ANTHONY LEWIS; Speech Rules",
        "url": "http:\/\/www.nytimes.com\/2007\/12\/23\/magazine\/23wwlnQ4-t.html"
    },
    {
        "body": "CLASSICAL Full reviews of recent music performances: nytimes.com\/music. Opera 'AIDA' (Saturday and Tuesday) Micaela Carosi (Aida) and Olga Borodina (Amneris) are now the female leads in the Met's extravagant and durable production. The tenor Stephen O'Mara will play Radames, replacing Marco Berti, who has withdrawn from remaining performances",
        "byline": "By THE NEW YORK TIMES",
        "date": "20071026",
        "title": "Classical Music\/Opera Listings",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9C06E0DC123CF935A15753C1A9619C8B63"
    },
    {
        "body": "WORLD WAR IV The Long Struggle Against Islamofascism By Norman Podhoretz 230 pages. Doubleday. $24.95. In his bellicose new book Norman Podhoretz, one of the founding fathers of neoconservatism, declares that the current Iraq war is only one front (Iran being another) in what he calls ''World War IV,'' a ''long struggle against Islamofascism,''",
        "byline": "By MICHIKO KAKUTANI",
        "date": "20071026",
        "title": "BOOKS OF THE TIMES; Of the Words of War and the War of Ideas",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/books\/26Book.html"
    },
    {
        "body": "'ARTHUR LIVE!' Childhood is a time for gains: in inches and pounds, experience and privileges, maturity and knowledge. But when it comes to teeth, those years are filled with losses. It's no wonder that we have a compensatory ritual for every baby tooth that falls. That ritual drives the plot in ''Arthur Live!,'' above, a musical whose title",
        "byline": "By LAUREL GRAEBER",
        "date": "20071026",
        "title": "'Arthur Live!'",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9804E3D81731F935A15753C1A9619C8B63"
    },
    {
        "body": "James D. Watson, the eminent biologist who ignited an uproar last week with remarks about the intelligence of people of African descent, retired yesterday as chancellor of the Cold Spring Harbor Laboratory on Long Island, and from its board. In a statement, Dr. Watson noted that, at 79, he was ''overdue'' to surrender leadership positions at the",
        "byline": "By CORNELIA DEAN",
        "date": "20071026",
        "title": "James Watson Quits Post After Remarks on Races",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/science\/26watson.html"
    },
    {
        "body": "NETHERLIN--Richard , founder and director of the American Language Center in Tangier and longtime resident of Morocco, died in Rabat on September 26 at the age of 66 after a brief illness. Born in Globe, Arizona and a graduate of the University of Southern California, he arrived in North Africa as a Peace Corps volunteer in 1963 and made Tangier",
        "date": "20071026",
        "title": "Paid Notice: Deaths NETHERLIN, RICHARD",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9803E2D6163AF935A15753C1A9619C8B63"
    },
    {
        "body": "STEVEN PARRINO Gagosian Gallery 980 Madison Avenue, at 77th Street Through Nov. 3 Last spring Gagosian gave over much of its uptown gallery to a coolly anarchistic group show called ''Beneath the Underdog,'' which included many young artists associated with the New York art world's professional demimonde. This fall, in the same space, the gallery",
        "byline": "By THE NEW YORK TIMES",
        "date": "20071026",
        "title": "Art in Review",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/arts\/26gall.html"
    },
    {
        "body": "CLASSICAL Full reviews of recent music performances: nytimes.com\/music. Opera 'AIDA' (Tomorrow and Tuesday) Micaela Carosi (Aida) and Olga Borodina (Amneris) are now the female leads in the Met's extravagant and durable production. The tenor Stephen O'Mara will play Radames, replacing Marco Berti, who has withdrawn from remaining performances",
        "date": "20071026",
        "title": "Classical",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9D01EFDF103FF935A15753C1A9619C8B63"
    },
    {
        "body": "The Museum of Modern Art's elegantly plain exhibition of Georges Seurat's drawings begins with an unexpectedly extraordinary moment of computerized art viewing. Seurat's four surviving notebooks have been converted to electronic versions that -- with a touch of a finger -- visitors can flip through, page by digital page, from cover to dog-eared",
        "byline": "By ROBERTA SMITH",
        "date": "20071026",
        "title": "ART REVIEW | GEORGES SEURAT; Seurat, Drawing His Way To the Grande Jatte",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/arts\/design\/26seur.html"
    },
    {
        "body": "Mikhail Khodorkovsky, the jailed former Yukos Oil chief executive, is unlikely to be released from prison anytime soon, one of his lawyers said in Moscow on Thursday, the halfway point of his eight-year term. Mr. Khodorkovsky, who was arrested on Oct. 25, 2003, would have been eligible to file for parole on Thursday, but demerits for disputed",
        "byline": "By SOPHIA KISHKOVSKY",
        "date": "20071026",
        "title": "Parole Unlikely for Russian Oil Executive Jailed in Siberia",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/world\/europe\/26russia.html"
    },
    {
        "body": "A relic from another age, and largely unchanged since President Ulysses S. Grant gave his blessing, the General Mining Law of 1872 is one of the oldest and most destructive statutes on the books. Originally enacted to encourage economic development in the West, the law gives precedence above all other land uses to mining for hard-rock minerals like",
        "date": "20071026",
        "title": "EDITORIAL; At Last, an Overhaul for a Bad Law",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/opinion\/26fri3.html"
    },
    {
        "body": "CLASSICAL Full reviews of recent music performances: nytimes.com\/music. Opera 'AIDA' (Saturday and Tuesday) Micaela Carosi (Aida) and Olga Borodina (Amneris) are now the female leads in the Met's extravagant and durable production. The tenor Stephen O'Mara will play Radames, replacing Marco Berti, who has withdrawn from remaining performances",
        "byline": "By THE NEW YORK TIMES",
        "date": "20071026",
        "title": "Classical Music\/Opera Listings",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9C06E0DC123CF935A15753C1A9619C8B63"
    },
    {
        "body": "WORLD WAR IV The Long Struggle Against Islamofascism By Norman Podhoretz 230 pages. Doubleday. $24.95. In his bellicose new book Norman Podhoretz, one of the founding fathers of neoconservatism, declares that the current Iraq war is only one front (Iran being another) in what he calls ''World War IV,'' a ''long struggle against Islamofascism,''",
        "byline": "By MICHIKO KAKUTANI",
        "date": "20071026",
        "title": "BOOKS OF THE TIMES; Of the Words of War and the War of Ideas",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/books\/26Book.html"
    },
    {
        "body": "'ARTHUR LIVE!' Childhood is a time for gains: in inches and pounds, experience and privileges, maturity and knowledge. But when it comes to teeth, those years are filled with losses. It's no wonder that we have a compensatory ritual for every baby tooth that falls. That ritual drives the plot in ''Arthur Live!,'' above, a musical whose title",
        "byline": "By LAUREL GRAEBER",
        "date": "20071026",
        "title": "'Arthur Live!'",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9804E3D81731F935A15753C1A9619C8B63"
    },
    {
        "body": "James D. Watson, the eminent biologist who ignited an uproar last week with remarks about the intelligence of people of African descent, retired yesterday as chancellor of the Cold Spring Harbor Laboratory on Long Island, and from its board. In a statement, Dr. Watson noted that, at 79, he was ''overdue'' to surrender leadership positions at the",
        "byline": "By CORNELIA DEAN",
        "date": "20071026",
        "title": "James Watson Quits Post After Remarks on Races",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/science\/26watson.html"
    },
    {
        "body": "NETHERLIN--Richard , founder and director of the American Language Center in Tangier and longtime resident of Morocco, died in Rabat on September 26 at the age of 66 after a brief illness. Born in Globe, Arizona and a graduate of the University of Southern California, he arrived in North Africa as a Peace Corps volunteer in 1963 and made Tangier",
        "date": "20071026",
        "title": "Paid Notice: Deaths NETHERLIN, RICHARD",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9803E2D6163AF935A15753C1A9619C8B63"
    },
    {
        "body": "STEVEN PARRINO Gagosian Gallery 980 Madison Avenue, at 77th Street Through Nov. 3 Last spring Gagosian gave over much of its uptown gallery to a coolly anarchistic group show called ''Beneath the Underdog,'' which included many young artists associated with the New York art world's professional demimonde. This fall, in the same space, the gallery",
        "byline": "By THE NEW YORK TIMES",
        "date": "20071026",
        "title": "Art in Review",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/arts\/26gall.html"
    },
    {
        "body": "CLASSICAL Full reviews of recent music performances: nytimes.com\/music. Opera 'AIDA' (Tomorrow and Tuesday) Micaela Carosi (Aida) and Olga Borodina (Amneris) are now the female leads in the Met's extravagant and durable production. The tenor Stephen O'Mara will play Radames, replacing Marco Berti, who has withdrawn from remaining performances",
        "date": "20071026",
        "title": "Classical",
        "url": "http:\/\/query.nytimes.com\/gst\/fullpage.html?res=9D01EFDF103FF935A15753C1A9619C8B63"
    },
    {
        "body": "The Museum of Modern Art's elegantly plain exhibition of Georges Seurat's drawings begins with an unexpectedly extraordinary moment of computerized art viewing. Seurat's four surviving notebooks have been converted to electronic versions that -- with a touch of a finger -- visitors can flip through, page by digital page, from cover to dog-eared",
        "byline": "By ROBERTA SMITH",
        "date": "20071026",
        "title": "ART REVIEW | GEORGES SEURAT; Seurat, Drawing His Way To the Grande Jatte",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/arts\/design\/26seur.html"
    },
    {
        "body": "Mikhail Khodorkovsky, the jailed former Yukos Oil chief executive, is unlikely to be released from prison anytime soon, one of his lawyers said in Moscow on Thursday, the halfway point of his eight-year term. Mr. Khodorkovsky, who was arrested on Oct. 25, 2003, would have been eligible to file for parole on Thursday, but demerits for disputed",
        "byline": "By SOPHIA KISHKOVSKY",
        "date": "20071026",
        "title": "Parole Unlikely for Russian Oil Executive Jailed in Siberia",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/world\/europe\/26russia.html"
    },
    {
        "body": "A relic from another age, and largely unchanged since President Ulysses S. Grant gave his blessing, the General Mining Law of 1872 is one of the oldest and most destructive statutes on the books. Originally enacted to encourage economic development in the West, the law gives precedence above all other land uses to mining for hard-rock minerals like",
        "date": "20071026",
        "title": "EDITORIAL; At Last, an Overhaul for a Bad Law",
        "url": "http:\/\/www.nytimes.com\/2007\/10\/26\/opinion\/26fri3.html"
    }
]