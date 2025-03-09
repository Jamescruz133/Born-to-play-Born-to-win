<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sports Page</title>
    <link rel="stylesheet" href="styles.css"> <!-- Kumokonekta sa CSS file -->
</head>
<body>
    <header>
        <h1>Born to Play, Born to Win</h1>
    </header>
    <nav>
        <h2>Type of Sports</h2>
        <div class="sports-buttons">
            <button onclick="showContent('basketball')">Basketball</button>
            <button onclick="showContent('badminton')">Badminton</button>
            <button onclick="showContent('chess')">Chess</button>
        </div>
    </nav>

    <main id="content">
        <section id="basketball">
            <h2>Basketball</h2>
            <p>Basketball is a team sport where two teams of five aim to score by shooting a ball through a hoop...</p>
            <h3>Rules</h3>
            <p>Two teams of five players each try to score...</p>
            <h3>Tips</h3>
            <p>Master dribbling, improve court vision, stay low on defense...</p>
        </section>

        <section id="badminton" class="hidden">
            <h2>Badminton</h2>
            <p>Badminton is a racket sport played using a shuttlecock...</p>
            <h3>Rules</h3>
            <p>Players hit the shuttlecock over the net...</p>
            <h3>Tips</h3>
            <p>Improve footwork, learn different shots, practice reflexes...</p>
        </section>

        <section id="chess" class="hidden">
            <h2>Chess</h2>
            <p>Chess is a strategic board game played between two players...</p>
            <h3>Rules</h3>
            <p>Each player controls 16 pieces with different movement rules...</p>
            <h3>Tips</h3>
            <p>Control the center, develop pieces early, castle for safety...</p>
        </section>
    </main>

    <script src="script.js"></script> <!-- Kinokonekta ang JavaScript file -->
</body>
</html>
