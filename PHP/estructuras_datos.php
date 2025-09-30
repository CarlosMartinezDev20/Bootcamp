<?php

//Arrays
//Declaracion
//Array indexados
$array = [1, 2, 3, 4, 5];
$array2 = array();
$array3 = new ArrayObject();

//Array asociativos
$arrayAsociativo = [
    "nombre" => "Jairo",
    "edad" => 30,
    "departamento" => "La libertad"
];

print_r($arrayAsociativo["nombre"] . "\n");

//Array propiedades y metodos

//Saber el largo del array
print count($array) . "\n";

//Agregar un elemento al final del array
array_push($array, 6);
$array[] = 7;

//Agregar un elemento al inicio del array
array_unshift($array, 0);

print_r($array);

//Eliminar el ultimo elemento del array
array_pop($array);
print_r($array);

//Eliminar el primer elemento del array
array_shift($array);
print_r($array);

//Recorrer un array
foreach ($array as $valor) {
    echo "Valor: {$valor}\n";
}

//Arrays multidimensionales
$arrayMultimensional = [
    "nombre" => "Jairo",
    "edad" => 30,
    "hobbies" => ["Programar", "Leer", "Correr", "otros" => ["Jugar jueguitos" => ["LOL", "DOTA2", "CS2"]]]

];

print_r($arrayMultimensional);


//Clases y objetos 

class Persona
{
    //Atributos o propiedades
    private $nombre;
    private $edad;

    //constructor
    function __construct($nombreParam, $edadParam)
    {
        $this->nombre = $nombreParam;
        $this->edad = $edadParam;
    }

    //Metodos o funciones
    public function getNombre()
    {
        return $this->nombre;
    }

    public function getEdad()
    {
        return $this->edad;
    }

    /**
     * Set the value of nombre
     * @param string $nombre
     * @return  self
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Set the value of edad
     * @param int $edad
     * @return  self
     */
    public function setEdad($edad)
    {
        $this->edad = $edad;

        return $this;
    }
}

//Crear un objeto
$persona1 = new Persona("Jairo", 30);

//Acceder a los metodos del objeto
echo $persona1->getNombre() . "\n";


//LIFO -> Stack -> Last In First Out

class Stack
{
    private $data;

    //Constructor con parametros OPCIONALES
    function __construct($dataParams = [])
    {
        $this->data = $dataParams;
    }

    //Agregar un elemento
    function add($element)
    {
        array_push($this->data, $element);
        //$this->data[] = $element;
    }

    //Eliminar un elemento
    function remove()
    {
        return array_pop($this->data);
    }
}

$stacito = new Stack([1, 2, 3, 4]);
//FIFO -> Queue -> First In First Out

class Queue
{
    private $data;

    function __construct($dataParams = [])
    {
        $this->data = $dataParams;
    }

    //Agregar un elemento
    function add($element)
    {
        array_push($this->data, $element);
    }

    //Eliminar un elemento
    function remove()
    {
        return array_shift($this->data);
    }
}



// ===================================
//              CLASE NODE
// ===================================
class Node
{
    private $value;
    private $next;

    function __construct($valueParam)
    {
        $this->value = $valueParam;
        $this->next = null;
    }

    public function getValue()
    {
        return $this->value;
    }

    public function getNext()
    {
        return $this->next;
    }

    public function setNext($next)
    {
        $this->next = $next;
    }
}

// ===================================
//           CLASE LINKEDLIST
// ===================================
class LinkedList
{
    private $head;

    function __construct()
    {
        $this->head = null;
    }

    function add($value)
    {
        $newNode = new Node($value);

        if ($this->head === null) {
            $this->head = $newNode;
        } else {
            $current = $this->head;
            while ($current->getNext() !== null) {
                $current = $current->getNext();
            }
            $current->setNext($newNode);
        }
    }
    
    // Función para encontrar un dato en la lista
    function find($value)
    {
        $current = $this->head;
        while ($current !== null) {
            if ($current->getValue() === $value) {
                return "El dato {$value} existe en la lista.";
            }
            $current = $current->getNext();
        }
        return "El dato {$value} no existe en la lista.";
    }

    function delete($value)
{
    // Maneja el caso de lista vacía
    if ($this->head === null) {
        return "La lista está vacía.";
    }

    // Maneja el caso donde el nodo a eliminar es el primero (head)
    if ($this->head->getValue() === $value) {
        $this->head = $this->head->getNext();
        return "El dato {$value} ha sido eliminado.";
    }

    $current = $this->head;
    $previous = null;

    // Recorre la lista para encontrar el nodo a eliminar
    while ($current !== null && $current->getValue() !== $value) {
        $previous = $current;
        $current = $current->getNext();
    }

    // Si el bucle termina, pero el nodo no fue encontrado
    if ($current === null) {
        return "El dato {$value} no se encontró para ser eliminado.";
    }

    // El nodo fue encontrado y no es el head, así que $previous existe
    
}
    
    public function printList()
    {
        $current = $this->head;
        $output = "Lista: ";
        while ($current !== null) {
            $output .= $current->getValue() . " -> ";
            $current = $current->getNext();
        }
        $output .= "NULL\n";
        return $output;
    }
}

// ===================================
//              CLASE NODO
// ===================================
class Nodo
{
    private $value;
    private $left;
    private $right;

    function __construct($valueParam)
    {
        $this->value = $valueParam;
        $this->left = null;
        $this->right = null;
    }

    function getValue()
    {
        return $this->value;
    }
    function setValue($value)
    {
        $this->value = $value;
    }

    function setRight($right)
    {
        $this->right = $right;
    }

    function getRight()
    {
        return $this->right;
    }
    function setLeft($left)
    {
        $this->left = $left;
    }
    function getLeft()
    {
        return $this->left;
    }
}

// ===================================
//           CLASE BINARYTREE
// ===================================
class BinaryTree
{
    public $root;

    function __construct($data = null)
    {
        if ($data !== null) {
            $this->root = new Nodo($data);
        } else {
            $this->root = null;
        }
    }

    function insert($data)
    {
        $newNode = new Nodo($data);
        if ($this->root === null) {
            $this->root = $newNode;
            return $this->root;
        }
        $current = $this->root;
        while (true) {
            if ($newNode->getValue() > $current->getValue()) {
                if ($current->getRight() === null) {
                    $current->setRight($newNode);
                    return $newNode;
                } else {
                    $current = $current->getRight();
                }
            } else {
                if ($current->getLeft() === null) {
                    $current->setLeft($newNode);
                    return $newNode;
                } else {
                    $current = $current->getLeft();
                }
            }
        }
    }

    // Función para encontrar un dato en el árbol
    function find($value)
    {
        if ($this->root === null) {
            return "El arbol esta vacio.";
        }
        $current = $this->root;
        while ($current !== null) {
            if ($current->getValue() === $value) {
                return "El dato {$value} existe en el arbol";
            } elseif ($value < $current->getValue()) {
                $current = $current->getLeft();
            } else {
                $current = $current->getRight();
            }
        }
        return "El dato {$value} no existe en el arbol";
    }

    // Función para eliminar un dato (versión pública)
    function delete($value)
    {
        $this->root = $this->deleteRecursive($this->root, $value);
        return "Proceso de eliminación de {$value} finalizado.";
    }

    // Función auxiliar recursiva para la eliminación
    private function deleteRecursive($node, $value)
    {
        if ($node === null) {
            return null;
        }
        if ($value < $node->getValue()) {
            $node->setLeft($this->deleteRecursive($node->getLeft(), $value));
        } elseif ($value > $node->getValue()) {
            $node->setRight($this->deleteRecursive($node->getRight(), $value));
        } else {
            // Caso 1 y 2: el nodo no tiene hijos o solo tiene uno
            if ($node->getLeft() === null) {
                return $node->getRight();
            } elseif ($node->getRight() === null) {
                return $node->getLeft();
            }

            // Caso 3: el nodo tiene dos hijos
            $minRightNode = $this->findMin($node->getRight());
            $node->setValue($minRightNode->getValue());
            $node->setRight($this->deleteRecursive($node->getRight(), $minRightNode->getValue()));
        }
        return $node;
    }

    // Función auxiliar para encontrar el nodo con el valor mínimo
    private function findMin($node)
    {
        while ($node->getLeft() !== null) {
            $node = $node->getLeft();
        }
        return $node;
    }
    
    public function printInOrder()
    {
        $this->inOrderTraversal($this->root);
        echo "\n";
    }

    private function inOrderTraversal($node)
    {
        if ($node !== null) {
            $this->inOrderTraversal($node->getLeft());
            echo $node->getValue() . " ";
            $this->inOrderTraversal($node->getRight());
        }
    }
}

// ===================================
//           PRUEBAS
// ===================================

echo "### Pruebas de LinkedList ###\n";
$listita = new LinkedList();
$listita->add(3);
$listita->add(1);
$listita->add(5);
echo $listita->printList();
echo $listita->find(1) . "\n";
echo $listita->find(10) . "\n";
echo $listita->delete(1) . "\n";
echo $listita->printList();
echo $listita->delete(5) . "\n";
echo $listita->printList();
echo $listita->delete(3) . "\n";
echo $listita->printList();

echo "\n--- Fin de pruebas de LinkedList ---\n";

echo "\n### Pruebas de BinaryTree ###\n";
$arbolito = new BinaryTree();
$arbolito->insert(10);
$arbolito->insert(17);
$arbolito->insert(19);
$arbolito->insert(13);
$arbolito->insert(5);
$arbolito->insert(2);
$arbolito->insert(7);

echo "Árbol inicial (recorrido in-order): ";
$arbolito->printInOrder();

echo $arbolito->find(13) . "\n";
echo $arbolito->find(50) . "\n";

echo $arbolito->delete(10) . "\n";
echo "Árbol después de eliminar 10: ";
$arbolito->printInOrder();

echo $arbolito->delete(19) . "\n";
echo "Árbol después de eliminar 19: ";
$arbolito->printInOrder();

echo $arbolito->delete(5) . "\n";
echo "Árbol después de eliminar 5: ";
$arbolito->printInOrder();

echo "\n--- Fin de pruebas de BinaryTree ---\n";

?>