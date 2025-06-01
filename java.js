document.addEventListener('DOMContentLoaded', () => {
  const categories = ['action', 'drama', 'comedy', 'scifi', 'horror'];
  const totalMoviesPerCategory = 5; // 5 movies per category

  // Sample movies data with real images and titles per category
 const moviesData = {
  action: [
    { title: "Die Hard", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7e/Die_Hard_1988_theatrical_poster.jpg" },
    { title: "Gladiator", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8d/Gladiator_ver1.jpg" },
    { title: "Mad Max: Fury Road", imgUrl: "https://image.tmdb.org/t/p/w200/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg" },
    { title: "John Wick", imgUrl: "https://image.tmdb.org/t/p/w200/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg" },
    { title: "The Dark Knight", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg" },
    { title: "The Avengers", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" },
    { title: "The Bourne Identity", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/52/Bourne_identity_ver3.jpg" },
    { title: "Casino Royale", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/6f/Casino_Royale_2006_Poster.jpg" },
    { title: "Black Panther", imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Black_Panther_film_poster.jpg" },
    { title: "Logan", imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/4e/Logan_2017_poster.jpg" },
    { title: "Captain America: The Winter Soldier", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_The_Winter_Soldier.jpg" },
    { title: "Iron Man", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/70/Ironmanposter.JPG" },
    { title: "Spider-Man: Homecoming", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg" },
    { title: "Wonder Woman", imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Wonder_Woman_2017_film_poster.jpg" },
    { title: "Thor: Ragnarok", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg" },
    { title: "Deadpool", imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/46/Deadpool_poster.jpg" },
    { title: "Transformers", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg" },
    { title: "Mission: Impossible - Fallout", imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/3d/Mission_Impossible_Fallout_poster.jpg" },
    { title: "Wonder Woman 1984", imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/e6/Wonder_Woman_1984_poster.jpg" },
    { title: "Aquaman", imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/3a/Aquaman_2018_film_poster.jpg" },
    { title: "Jurassic Park", imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg" },
    { title: "Guardians of the Galaxy", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/GOTG_Vol_1_poster.jpg" },
    { title: "Batman Begins", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/Batman_Begins_Poster.jpg" },
    { title: "Skyfall", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9b/Skyfall_poster.jpg" },
    { title: "Star Wars: The Force Awakens", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg" },
    { title: "The Dark Knight Rises", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg" },
    { title: "Captain Marvel", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg" },
    { title: "Iron Man 3", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/99/Iron_Man_3_poster.jpg" },
    { title: "Black Widow", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/85/Black_Widow_poster.jpg" },
    { title: "Spider-Man: Far From Home", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Far_From_Home_poster.jpg" },
    { title: "Ant-Man", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7d/Ant-Man_poster.jpg" },
    { title: "Thor", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7e/Thor_poster.jpg" },
    { title: "Guardians of the Galaxy Vol. 2", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/95/GOTG_Vol_2_poster.jpg" },
    { title: "Deadpool 2", imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Deadpool_2_poster.jpg" },
    { title: "Doctor Strange", imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg" },
    { title: "The Equalizer", imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/0e/The_Equalizer_film_poster.jpg" },
    { title: "Edge of Tomorrow", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/6e/Edge_of_Tomorrow_Poster.jpg" },
    { title: "Kingsman: The Secret Service", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b7/Kingsman_The_Secret_Service_poster.jpg" },
    { title: "The Wolverine", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f5/The_Wolverine_poster.jpg" },
    { title: "Pacific Rim", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f3/Pacific_RimPoster.jpg" },
    { title: "Baby Driver", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Baby_Driver_poster.jpg" },
    { title: "The Raid: Redemption", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/6e/The_Raid_poster.jpg" },
    { title: "300", imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/300poster.jpg" },
    { title: "Kingsman: The Golden Circle", imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c2/Kingsman_The_Golden_Circle_poster.jpg" },
    { title: "Venom", imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/e0/Venom_poster.jpg" },
    { title: "Captain America: Civil War", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg" },
    { title: "Thor: The Dark World", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/Thor_-_The_Dark_World_poster.jpg" },
    { title: "The Matrix Reloaded", imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Reloaded_Poster.jpg" },
    { title: "Transformers: Revenge of the Fallen", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Transformers_revenge_of_the_fallen_poster.jpg" },
  ],

  drama: [
    { title: "The Shawshank Redemption", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg" },
    { title: "Forrest Gump", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg" },
    { title: "The Godfather", imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg" },
    { title: "Fight Club", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg" },
    { title: "The Green Mile", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/86/Green_mile_ver2.jpg" },
    { title: "The Pianist", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Pianistposter.jpg" },
    { title: "A Beautiful Mind", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg" },
    { title: "The Social Network", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Social_network_film_poster.jpg" },
    { title: "12 Years a Slave", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a3/12_Years_a_Slave_film_poster.jpg" },
    { title: "Slumdog Millionaire", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9a/Slumdog_Millionaire_poster.jpg" },
    { title: "The King's Speech", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a0/The_King%27s_Speech_poster.jpg" },
    { title: "The Departed", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg" },
    { title: "American Beauty", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b6/American_Beauty_poster.jpg" },
    { title: "The Imitation Game", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9e/The_Imitation_Game_poster.jpg" },
    { title: "There Will Be Blood", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a0/There_Will_Be_Blood_poster.jpg" },
    { title: "No Country for Old Men", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg" },
    { title: "Joker", imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg" },
    { title: "Django Unchained", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg" },
    { title: "La La Land", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png" },
    { title: "The Fault in Our Stars", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a9/Fault_in_Our_Stars_Theatrical_Poster.jpg" },
    { title: "The Help", imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Help_movie_poster.jpg" },
    { title: "Room", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Room_2015_film_poster.jpg" },
    { title: "The Revenant", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b6/The_Revenant_2015_film_poster.jpg" },
    { title: "Birdman", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7e/Birdman_film_poster.jpg" },
    { title: "Silver Linings Playbook", imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/e0/Silver_Linings_Playbook_poster.jpg" },
    { title: "A Star is Born", imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/09/A_Star_Is_Born_2018_poster.jpg" },
    { title: "The Curious Case of Benjamin Button", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8d/Curious_case_of_benjamin_button_poster.jpg" },
    { title: "Manchester by the Sea", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f2/Manchester_by_the_Sea_%282016_film_poster%29.jpg" },
    { title: "The Fault in Our Stars", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a9/Fault_in_Our_Stars_Theatrical_Poster.jpg" },
    { title: "The Theory of Everything", imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Theory_of_Everything_2014_film_poster.jpg" },
    { title: "Blue Valentine", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/ae/Blue_Valentine_film_poster.jpg" },
    { title: "Requiem for a Dream", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/Requiem_for_a_dream_poster.jpg" },
    { title: "Whiplash", imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_film_poster.jpg" },
    { title: "Million Dollar Baby", imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/13/Million_Dollar_Baby_poster.jpg" },
    { title: "The Pianist", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Pianistposter.jpg" },
    { title: "Slumdog Millionaire", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9a/Slumdog_Millionaire_poster.jpg" },
    { title: "The Big Short", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Big_Short_Poster.jpg" },
    { title: "Her", imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg" },
    { title: "The Help", imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Help_movie_poster.jpg" },
    { title: "The Social Network", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Social_network_film_poster.jpg" },
    { title: "Catch Me If You Can", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Catch_Me_If_You_Can_2002.jpg" },
    { title: "12 Angry Men", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/91/12_Angry_Men_%281957_film_poster%29.jpg" },
    { title: "Good Will Hunting", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/Good_Will_Hunting_theatrical_poster.jpg" },
    { title: "Gone Girl", imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg" },
    { title: "The Deer Hunter", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a3/Deerhunter.jpg" },
    { title: "The Ides of March", imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/18/The_Ides_of_March_film_poster.jpg" },
    { title: "Mystic River", imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/3a/Mystic_River_film_poster.jpg" },
    { title: "Dallas Buyers Club", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9c/Dallas_Buyers_Club_poster.jpg" },
    { title: "The Pursuit of Happyness", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg" },
  ],

  comedy: [
    { title: "Superbad", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png" },
    { title: "The Hangover", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg" },
    { title: "Step Brothers", imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d9/StepbrothersMP.jpg" },
    { title: "Anchorman", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Anchorman_Poster.jpg" },
    { title: "Bridesmaids", imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/05/Bridesmaids_poster.jpg" },
    { title: "Zoolander", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Zoolander.jpg" },
    { title: "Tropic Thunder", imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/33/Tropic_Thunder_poster.JPG" },
    { title: "The 40-Year-Old Virgin", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8d/40-year-old-virgin-poster.jpg" },
    { title: "Dumb and Dumber", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/63/Dumbanddumber.jpg" },
    { title: "Elf", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/85/Elf_movie_poster.jpg" },
    { title: "Mean Girls", imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d6/Mean_Girls_Poster.jpg" },
    { title: "Ghostbusters", imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/3d/Ghostbusters_ver3.jpg" },
    { title: "The Grand Budapest Hotel", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Grand_Budapest_Hotel_Poster.jpg" },
    { title: "Napoleon Dynamite", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7c/Napoleon_Dynamite_poster.jpg" },
    { title: "The Big Lebowski", imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/35/Biglebowskiposter.jpg" },
    { title: "Pitch Perfect", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/99/Pitch_Perfect_Poster.jpg" },
    { title: "Super Troopers", imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/27/Supertroopersposter.jpg" },
    { title: "Wedding Crashers", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/69/Weddingcrashersmovieposter.jpg" },
    { title: "Office Space", imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/cd/Office_space_movie_poster.jpg" },
    { title: "Austin Powers: International Man of Mystery", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f4/Austin_Powers_International_Man_of_Mystery.jpg" },
    { title: "Shaun of the Dead", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Shaun_of_the_Dead_film_poster.jpg" },
    { title: "Hot Fuzz", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/88/Hot_fuzz_poster.jpg" },
    { title: "This Is the End", imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d5/This_is_the_end_poster.png" },
    { title: "The Other Guys", imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/00/The_Other_Guys_poster.jpg" },
    { title: "21 Jump Street", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/21_Jump_Street_film_poster.jpg" },
    { title: "Pineapple Express", imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c0/Pineapple_Express_poster.jpg" },
    { title: "Knocked Up", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/69/Knocked_Up_movie_poster.jpg" },
    { title: "The Mask", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5f/The_Mask_%281994_film%29_poster.jpg" },
    { title: "Ferris Bueller's Day Off", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg" },
    { title: "Groundhog Day", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8b/Groundhog_Day_%281993%29_film_poster.jpg" },
    { title: "The Jerk", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/69/The_Jerk_poster.jpg" },
    { title: "The Hangover Part II", imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c9/The_Hangover_Part_II_poster.jpg" },
    { title: "Super Troopers 2", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/6d/Supertroopers2poster.jpg" },
    { title: "Ace Ventura: Pet Detective", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b7/Ace_Ventura_Pet_Detective_poster.jpg" },
    { title: "Blazing Saddles", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b1/Blazing_Saddles.jpg" },
    { title: "Monty Python and the Holy Grail", imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/17/Monty_Python_and_the_Holy_Grail_-_1975_film_poster.jpg" },
    { title: "Step Brothers", imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d9/StepbrothersMP.jpg" },
    { title: "Tropic Thunder", imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/33/Tropic_Thunder_poster.JPG" },
    { title: "Mean Girls", imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d6/Mean_Girls_Poster.jpg" },
    { title: "The 40-Year-Old Virgin", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8d/40-year-old-virgin-poster.jpg" },
    { title: "Clerks", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b6/Clerks_poster.jpg" },
    { title: "The Breakfast Club", imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/45/Breakfast_Club_Poster.jpg" },
    { title: "Hot Rod", imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/e6/Hot_Rod_poster.jpg" },
    { title: "Napoleon Dynamite", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7c/Napoleon_Dynamite_poster.jpg" },
    { title: "Ted", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b9/Ted_poster.jpg" },
    { title: "Zombieland", imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c0/Zombieland_poster.jpg" },
    { title: "Shaun of the Dead", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Shaun_of_the_Dead_film_poster.jpg" },
    { title: "The Grand Budapest Hotel", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Grand_Budapest_Hotel_Poster.jpg" },
    { title: "Anchorman 2", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/88/Anchorman_2_poster.jpg" },
    { title: "Trolls", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/99/Trolls_poster.jpg" },
    { title: "21 Jump Street", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/21_Jump_Street_film_poster.jpg" },
  ],

  scifi: [
    { title: "Inception", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg" },
    { title: "Interstellar", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg" },
    { title: "The Matrix", imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg" },
    { title: "Blade Runner 2049", imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Blade_Runner_2049_logo.png" },
    { title: "Star Wars: A New Hope", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg" },
    { title: "Arrival", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/66/Arrival_ver3.jpg" },
    { title: "Ex Machina", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/bb/Ex_Machina_poster.jpg" },
    { title: "The Martian", imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/cd/The_Martian_film_poster.jpg" },
    { title: "Gravity", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg" },
    { title: "District 9", imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c6/District_9_poster.jpg" },
    { title: "Avatar", imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg" },
    { title: "E.T. the Extra-Terrestrial", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/66/E_t_the_extra_terrestrial_ver3.jpg" },
    { title: "Guardians of the Galaxy", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/GOTG_Vol_1_poster.jpg" },
    { title: "Minority Report", imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/33/Minority_Report_Poster.jpg" },
    { title: "The Fifth Element", imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/65/Fifth-element-poster.jpg" },
    { title: "Rogue One", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Rogue_One%2C_A_Star_Wars_Story_poster.jpg" },
    { title: "Back to the Future", imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg" },
    { title: "Her", imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg" },
    { title: "Looper", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5b/Looper_film_poster.jpg" },
    { title: "I, Robot", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f0/I_Robot_2004_film_poster.jpg" },
    { title: "The Terminator", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/70/The_Terminator_poster.jpg" },
    { title: "Edge of Tomorrow", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/79/Edge_of_Tomorrow_poster.jpg" },
    { title: "The Hunger Games", imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Hunger_Games_film_poster.jpg" },
  ],

  horror: [
    { title: "The Shining", imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/25/The_Shining_poster.jpg" },
    { title: "Get Out", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.jpg" },
    { title: "A Quiet Place", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/A_Quiet_Place_film_poster.jpg" },
    { title: "Hereditary", imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/4b/Hereditary_2018_film_poster.jpg" },
    { title: "It", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017_film%29_poster.jpg" },
    { title: "The Conjuring", imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/1a/Conjuring_poster.jpg" },
    { title: "The Babadook", imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Babadook_poster.jpg" },
    { title: "Halloween", imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/Halloween_2018_film_poster.jpg" },
    { title: "The Exorcist", imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/17/Exorcist_poster.jpg" },
    { title: "Saw", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9c/Saw_movie_poster.jpg" },
    { title: "Insidious", imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/01/Insidious_film_poster.jpg" },
    { title: "The Ring", imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/19/The_Ring_poster.jpg" },
    { title: "Paranormal Activity", imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7c/Paranormal_Activity_The_Marked_Ones_poster.jpg" },
    { title: "It Follows", imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f1/It_Follows_poster.jpg" },
    { title: "The Cabin in the Woods", imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/2f/Cabin_in_the_Woods_poster.jpg" },
    { title: "The Witch", imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a0/The_Witch_film_poster.jpg" },
    { title: "Sinister", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Sinister_film_poster.jpg" },
    { title: "The Blair Witch Project", imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Blairwitchposter.jpg" },
    { title: "Pet Sematary", imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9b/Pet_Sematary_poster.jpg" },
    { title: "Annabelle", imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/00/Annabelle_poster.jpg" },
  ],
};

// Function to create and return a movie card element
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";

  const img = document.createElement("img");
  img.src = movie.imgUrl;
  img.alt = movie.title;

  const title = document.createElement("h4");
  title.textContent = movie.title;

  const watchBtn = document.createElement("button");
  watchBtn.className = "btn watch-btn";
  watchBtn.textContent = "Watch";

  const favBtn = document.createElement("button");
  favBtn.className = "btn fav-btn";
  favBtn.textContent = "Add to Fav";

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(watchBtn);
  card.appendChild(favBtn);

  return card;
}

// Function to create and return a section for a genre with horizontal scroll
function createGenreSection(genreName, movies) {
  const section = document.createElement("section");
  section.className = "genre-section";

  const heading = document.createElement("h2");
  heading.textContent = genreName.charAt(0).toUpperCase() + genreName.slice(1);

  const scrollContainer = document.createElement("div");
  scrollContainer.className = "scroll-container";

  movies.forEach((movie) => {
    const card = createMovieCard(movie);
    scrollContainer.appendChild(card);
  });

  section.appendChild(heading);
  section.appendChild(scrollContainer);

  return section;
}

// Main function to initialize the movie site
function initMovieSite() {
  const mainContainer = document.getElementById("main-container");
  if (!mainContainer) {
    console.error("Main container element not found.");
    return;
  }

  // Clear existing content if any
  mainContainer.innerHTML = "";

  for (const [genre, movies] of Object.entries(moviesData)) {
    const genreSection = createGenreSection(genre, movies);
    mainContainer.appendChild(genreSection);
  }
}

// Call the main initialization function after DOM content is loaded
document.addEventListener("DOMContentLoaded", initMovieSite);



  // Get the container for all movies
  const movieContainer = document.getElementById('movie-container');

  // Clear container before adding
  movieContainer.innerHTML = '';

  // Create each movie section and append cards
  categories.forEach(category => {
    // Section container
    const section = document.createElement('section');
    section.classList.add('movie-section');

    // Section title
    const h2 = document.createElement('h2');
    h2.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Movies`;
    section.appendChild(h2);

    // Movie row container (horizontal scroll)
    const movieRow = document.createElement('div');
    movieRow.classList.add('movie-row');
    movieRow.dataset.category = category;

    // Add each movie card to the row
    moviesData[category].forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('movie-card');

      // Movie poster image
      const img = document.createElement('img');
      img.src = movie.imgUrl;
      img.alt = movie.title;
      img.loading = 'lazy';

      // Info overlay with title and buttons
      const infoOverlay = document.createElement('div');
      infoOverlay.classList.add('movie-info-overlay');

      const title = document.createElement('div');
      title.classList.add('movie-title');
      title.textContent = movie.title;

      const buttons = document.createElement('div');
      buttons.classList.add('movie-buttons');

      const watchBtn = document.createElement('button');
      watchBtn.textContent = '▶ Watch';
      watchBtn.addEventListener('click', e => {
        e.stopPropagation();
        alert(`Watching: ${movie.title}`);
      });

      const favBtn = document.createElement('button');
      favBtn.textContent = '+ Add to list';
      favBtn.addEventListener('click', e => {
        e.stopPropagation();
        alert(`Added to favorites: ${movie.title}`);
      });

      buttons.appendChild(watchBtn);
      buttons.appendChild(favBtn);

      infoOverlay.appendChild(title);
      infoOverlay.appendChild(buttons);

      card.appendChild(img);
      card.appendChild(infoOverlay);

      movieRow.appendChild(card);
    });

    section.appendChild(movieRow);
    movieContainer.appendChild(section);
  });

  // Navigation filter logic (filter movie rows by category)
  const navLinks = document.querySelectorAll('.nav-links li[data-category]');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const category = link.dataset.category;
      const allRows = document.querySelectorAll('.movie-row');

      allRows.forEach(row => {
        if (category === 'all' || row.dataset.category === category) {
          row.style.display = 'flex';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });

  // Show all categories by default
  document.querySelector('.nav-links li[data-category="all"]').click();
});


