<?php
$precios = [0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 2.00, 2.50, 3.00, 5.00];

/**
 * buscarPrecio: búsqueda binaria sobre lista ordenada (ascendente).
 */
function buscarPrecio(array $listaPrecios, float $precioBuscado): int
{
    $izq = 0;
    $der = count($listaPrecios) - 1;
    $eps = 1e-9;
    while ($izq <= $der) {
        $mid = intdiv($izq + $der, 2);
        $valor = $listaPrecios[$mid];

        if (abs($valor - $precioBuscado) < $eps) {
            return $mid; // encontrado
        } elseif ($precioBuscado < $valor - $eps) {
            $der = $mid - 1; // ir a la izquierda
        } else {
            $izq = $mid + 1; // ir a la derecha
        }
    }
    return -1; // no encontrado
}

/**
 * (Opcional) Muestra el "paso a paso" de la búsqueda binaria.
 * - Imprime cada iteración y también retorna el índice o -1.
 */
function buscarPrecioPasoAPaso(array $listaPrecios, float $precioBuscado): int
{
    $izq = 0;
    $der = count($listaPrecios) - 1;
    $eps = 1e-9;
    $iter = 0;

    echo "Buscando " . number_format($precioBuscado, 2) . PHP_EOL;
    while ($izq <= $der) {
        $mid = intdiv($izq + $der, 2);
        $valor = $listaPrecios[$mid];
        $iter++;

        printf(
            "Iter %d -> izq=%d, der=%d, mid=%d, valorMid=%.2f\n",
            $iter,
            $izq,
            $der,
            $mid,
            $valor
        );

        if (abs($valor - $precioBuscado) < $eps) {
            echo "✔ Encontrado en índice $mid" . PHP_EOL . PHP_EOL;
            return $mid;
        } elseif ($precioBuscado < $valor - $eps) {
            echo "↶ Voy a la IZQUIERDA (" . number_format($precioBuscado, 2)
                . " < " . number_format($valor, 2) . ")" . PHP_EOL;
            $der = $mid - 1;
        } else {
            echo "↷ Voy a la DERECHA (" . number_format($precioBuscado, 2)
                . " > " . number_format($valor, 2) . ")" . PHP_EOL;
            $izq = $mid + 1;
        }
    }
    echo "✘ No encontrado → -1" . PHP_EOL . PHP_EOL;
    return -1;
}

//pruebas
$pruebas = [0.75, 4.00, 5.00, 0.26, 2.50, 0.50, 1.00];

echo "=== Resultados (sin pasos) ===" . PHP_EOL;
foreach ($pruebas as $p) {
    $idx = buscarPrecio($precios, $p);
    printf("buscarPrecio(..., %.2f) = %d\n", $p, $idx);
}

echo PHP_EOL . "=== Paso a paso (opcional) ===" . PHP_EOL;
buscarPrecioPasoAPaso($precios, 0.75); // debería encontrar
buscarPrecioPasoAPaso($precios, 4.00); // no existe → -1
