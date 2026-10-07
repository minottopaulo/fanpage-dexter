import dextermorgan from '../assets/dextermorgan.png'
import debra from '../assets/debra.png'
import harrymorgan from '../assets/harrymorgan.png'
import batista from '../assets/batista.png'
import brain from '../assets/brain.png'
import laguerta from '../assets/laguerta.png'
import masuka from '../assets/masuka.png'
import rita from '../assets/rita.png'
import quin from '../assets/quin.png'

export interface Character {
  id: string
  name: string
  role: string
  description: string
  image: string
}

export const characters: Character[] = [
  {
    id: '1',
    name: 'Dexter Morgan',
    role: 'Analista de Respingo de Sangue Forense',
    description: 'Especialista em padrões de sangue no Departamento de Polícia de Miami. Por trás da rotina como analista forense, Dexter esconde uma vida secreta guiada pelo Código de Harry.',
    image: dextermorgan,
  },
  {
    id: '2',
    name: 'Debra Morgan',
    role: 'Detetive',
    description: 'Irmã adotiva de Dexter e uma detetive determinada. Impulsiva, direta e extremamente dedicada ao trabalho, Debra enfrenta diversos desafios ao longo da série.',
    image: debra,
  },
  {
    id: '3',
    name: 'Harry Morgan',
    role: 'Pai Adotivo',
    description: 'Policial de Miami e pai adotivo de Dexter. Ao perceber os impulsos sombrios do filho, Harry criou um código para ensiná-lo a controlá-los e direcioná-los.',
    image: harrymorgan,
  },
  {
    id: '4',
    name: 'Angel Batista',
    role: 'Detetive',
    description: 'Angel Batista é um dos detetives mais experientes da polícia de Miami. Leal, empático e dedicado ao trabalho, ele frequentemente funciona como uma das figuras mais humanas dentro do ambiente policial da série.',
    image: batista,
  },
  {
    id: '5',
    name: 'Brian Moser',
    role: 'Especialista em Próteses',
    description: 'Brian Moser é uma figura diretamente ligada ao passado de Dexter. Inteligente e manipulador, ele esconde uma identidade perturbadora enquanto se aproxima de Dexter e revela uma conexão que muda completamente a compreensão de seu passado.',
    image: brain,
  },
  {
    id: '6',
    name: 'Maria LaGuerta',
    role: 'Tenente',
    description: 'Maria LaGuerta é uma das principais figuras da polícia de Miami. Ambiciosa, inteligente e determinada a crescer profissionalmente, ela sabe navegar pelas disputas internas do departamento enquanto conduz investigações importantes.',
    image: laguerta,
  },
  {
    id: '7',
    name: 'Vince Masuka',
    role: 'Especialista Forense',
    description: 'Vince Masuka é o especialista forense da equipe de Miami. Extremamente competente em seu trabalho, ele utiliza seu conhecimento científico para auxiliar nas investigações e possui uma personalidade bastante descontraída e irreverente.',
    image: masuka,
  },
  {
    id: '8',
    name: 'Rita Bennett',
    role: 'Assistente Social',
    description: 'Rita é uma mulher gentil e determinada que se torna uma das pessoas mais importantes na vida de Dexter. Mãe dedicada, ela busca reconstruir sua vida enquanto tenta lidar com os próprios traumas e com a relação cada vez mais próxima com Dexter.',
    image: rita,
  },
  {
    id: '9',
    name: 'Joey Quinn',
    role: 'Detetive',
    description: 'Joey Quinn é um detetive do Departamento de Polícia de Miami. Experiente e desconfiado, ele costuma seguir seus próprios métodos para investigar os casos e, ao longo da série, desenvolve relações importantes com seus colegas.',
    image: quin,
  },
]