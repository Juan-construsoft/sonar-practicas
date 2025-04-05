function checkAdmin(user) {
    if (user.role == "admin") { // Issue: == en vez de ===
        console.log("Acceso concedido a: ", user.password); // Issue: Log de datos sensibles
        return true;
    }
    return false;
}
