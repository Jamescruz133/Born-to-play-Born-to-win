function showContent(sport) {
    // Itinatago ang lahat ng sections
    document.getElementById("basketball").classList.add("hidden");
    document.getElementById("badminton").classList.add("hidden");
    document.getElementById("chess").classList.add("hidden");

    // Pinapakita lang ang napiling section
    document.getElementById(sport).classList.remove("hidden");
}