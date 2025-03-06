<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Types of Sports</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        header {
            text-align: center;
            background-color: #f5f5f5;
            padding: 10px;
            font-size: 1.5em;
            font-weight: bold;
        }

        nav {
            display: flex;
            justify-content: center;
            margin: 20px 0;
        }

        nav button {
            margin: 0 10px;
            padding: 10px 20px;
            border: 2px solid black;
            background: none;
            cursor: pointer;
            font-size: 1em;
        }

        nav button.active {
            background-color: #ddd;
            font-weight: bold;
        }

        .container {
            padding: 20px;
        }

        .section {
            display: none;
        }

        .section.active {
            display: block;
        }

        h2 {
            margin-top: 0;
        }

        .highlights img {
            max-width: 100%;
            height: auto;
        }

        .highlight-text {
            text-align: center;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        Born to Play, Born to Win
    </header>

    <section>
        <div class="container">
            <div class="type-of-sports">
                <h3 style="text-align: center;">Type of sports</h3>
                <nav>
                    <button id="btn-basketball" class="active">Basketball</button>
                    <button id="btn-badminton">Badminton</button>
                    <button id="btn-chess">Chess</button>
                </nav>
            </div>

            <!-- Basketball Section -->
            <div id="basketball" class="section active">
                <h2>Basketball</h2>
                <p>
                    Basketball is a team sport where two teams of five aim to score by shooting a ball through a 10-foot-high hoop.
                    Players move the ball by dribbling or passing and score with field goals (worth two or three points) or free throws
                    (one point). The team with the most points wins. It's a fast-paced game requiring agility, teamwork, and precision.
                </p>
            </div>

            <!-- Badminton Section -->
            <div id="badminton" class="section">
                <h2>Badminton</h2>
                <p>
                    Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. It can be played in singles
                    (one player per side) or doubles (two players per side). The aim is to hit the shuttlecock so that it lands in the
                    opponent's half of the court.
                </p>
            </div>

            <!-- Chess Section -->
            <div id="chess" class="section">
                <h2>Chess</h2>
                <p>
                    Chess is a two-player strategy board game played on an 8x8 grid. The objective is to checkmate the opponent's king
                    by putting it in a position where it cannot escape capture. Each player starts with 16 pieces, including a king,
                    queen, rooks, bishops, knights, and pawns.
                </p>
                <div class="rules">
                    <h3>Rules of the game</h3>
                    <p>
                        Players take turns moving their pieces. Each piece moves in a specific way: pawns move forward, knights jump in
                        an L-shape, bishops move diagonally, rooks move horizontally or vertically, and the queen moves in all directions.
                        The game ends when a king is checkmated.
                    </p>
                </div>

                <div class="tips">
                    <h3>Tips</h3>
                    <p>
                        To improve in chess, learn basic tactics (pins, forks, skewers), control the center of the board, develop your
                        pieces early, avoid unnecessary moves, and practice endgame strategies. Study famous games to build a deeper
                        understanding.
                    </p>
                </div>

                <div class="highlights">
                    <h3>Highlights</h3>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/ChessSet.jpg" alt="Chess Board">
                    <p class="highlight-text">Top Chess Strategies and Games</p>
                </div>
            </div>
        </div>
    </section>

    <script>
        // JavaScript to toggle between sections
        const buttons = {
            basketball: document.getElementById('btn-basketball'),
            badminton: document.getElementById('btn-badminton')
            chess: document.getElementById('btn-chess')
        };

        const sections = {
            basketball: document.getElementById('basketball'),
            badminton: document.getElementById('badminton'),
            chess: document.getElementById('chess')
        };

        function showSection(selected) {
            for (let key in sections) {
                sections[key].classList.remove('active');
                buttons[key].classList.remove('active');
            }
            sections[selected].classList.add('active');
            buttons[selected].classList.add('active');
        }

        buttons.basketball.addEventListener('click', () => showSection('basketball'));
        buttons.badminton.addEventListener('click', () => showSection('badminton'));
        buttons.chess.addEventListener('click', () => showSection('chess'));
    </script>
</body>
</html>
