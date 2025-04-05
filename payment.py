def process_payment(amount):
    try:
        # Lógica de pago...
        if amount <= 0:
            raise ValueError("Monto inválido")
    except:  # Issue: Excepción demasiado amplia
        print("Error desconocido")
