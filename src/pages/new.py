
# main.py: Definición de la matriz generadora G
G_HAMMING_7_4 = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [0, 1, 1, 1],
]

# coding.py: Operación c = Gm sobre el cuerpo F2
def encode_with_generator(g: BinaryMatrix, m: BinaryVector) -> BinaryVector: # type: ignore
    """Codifica un mensaje binario usando c = G*m."""
    return mat_vec_mul_mod2(g, m) # pyright: ignore[reportUndefinedVariable]



def apply_binary_noise(bits: BinaryVector, flip_positions: List[int]) -> BinaryVector: # type: ignore
    """Invierte bits en posiciones específicas para simular errores de canal."""
    noisy = bits[:]
    for pos in flip_positions:
        if pos < 0 or pos >= len(noisy):
            raise ValueError(f"Posición de error inválida: {pos}")
        noisy[pos] ^= 1
    return noisy

# main.py: Definición de la matriz de control H
H_HAMMING_7_4 = [
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1],
]

# coding.py: Detección del síndrome del error
def syndrome(h: BinaryMatrix, r: BinaryVector) -> BinaryVector: # type: ignore
    """Calcula el síndrome s = H*r."""
    return mat_vec_mul_mod2(h, r) # type: ignore


