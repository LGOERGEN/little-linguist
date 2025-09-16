// Baby Words Tracker Application - NEW VERSION WITH SEPARATED LANGUAGES
console.log('🚀 Loading Baby Words Tracker - New Version with Independent Languages');

class BabyWordsTracker {
    constructor() {
        console.log('🏗️ Constructing BabyWordsTracker');
        this.data = this.loadData();
        console.log('📊 Loaded data:', this.data);

        this.currentFilter = 'all';
        this.searchTerm = '';
        this.currentCategory = null;
        this.expandedCategories = new Set(); // Track which categories are expanded

        this.initializeKidName();
        this.initializeWordData();
        this.bindEventListeners();
        this.renderCategories();
        this.updateStatistics();
        this.checkMilestones();

        console.log('✅ BabyWordsTracker construction complete');
    }

    getDefaultWordData() {
        return {
            english: {
                family: {
                    title: 'Family',
                    language: 'english',
                    words: [
                        { word: 'mummy', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'daddy', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'baby', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'brother', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sister', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'grandma', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'grandpa', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'nana', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'papa', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'auntie', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'uncle', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                food: {
                    title: 'Food & Drink',
                    language: 'english',
                    words: [
                        { word: 'milk', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'water', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'banana', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'apple', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bread', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'biscuit', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'juice', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'yoghurt', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cheese', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'chicken', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pasta', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'rice', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'egg', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cereal', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'orange', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'grapes', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'strawberry', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'carrots', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'peas', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'potato', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'finished', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'more', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'yummy', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                actions: {
                    title: 'Actions & Verbs',
                    language: 'english',
                    words: [
                        { word: 'go', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'come', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'stop', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sit', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'stand', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'walk', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'run', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'jump', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'play', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sleep', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'eat', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'drink', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'wash', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'brush', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'read', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sing', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'dance', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'help', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'give', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'take', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'open', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'close', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                body: {
                    title: 'Body Parts',
                    language: 'english',
                    words: [
                        { word: 'head', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'hair', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'eyes', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'nose', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'mouth', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'ears', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'teeth', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'hands', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'fingers', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'arms', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'legs', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'feet', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'toes', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'tummy', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'back', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'knee', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                toys: {
                    title: 'Toys & Objects',
                    language: 'english',
                    words: [
                        { word: 'ball', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'book', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'car', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'train', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'plane', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bike', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'doll', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'teddy', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'blocks', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'puzzle', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cup', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'plate', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'spoon', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'fork', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bottle', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'shoes', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'socks', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'hat', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'coat', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'nappy', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                colours: {
                    title: 'Colours & Descriptions',
                    language: 'english',
                    words: [
                        { word: 'red', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'blue', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'yellow', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'green', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pink', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'purple', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'orange', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'black', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'white', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'big', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'small', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'little', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'tall', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'short', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'hot', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cold', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'fast', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'slow', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'happy', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sad', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                animals: {
                    title: 'Animals',
                    language: 'english',
                    words: [
                        { word: 'dog', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cat', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cow', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pig', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sheep', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'horse', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'duck', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'chicken', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'fish', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bird', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'rabbit', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'mouse', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'elephant', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'lion', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'tiger', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'monkey', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bear', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'butterfly', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                social: {
                    title: 'Social & Manners',
                    language: 'english',
                    words: [
                        { word: 'hello', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'hi', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bye-bye', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'please', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'thank you', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sorry', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'excuse me', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'yes', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'no', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'mine', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'yours', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'share', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'turn', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'friend', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'love', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'kiss', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'hug', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                places: {
                    title: 'Places & Locations',
                    language: 'english',
                    words: [
                        { word: 'home', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'house', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'garden', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'park', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'shop', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'school', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bedroom', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'kitchen', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bathroom', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'outside', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'inside', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'upstairs', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'downstairs', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bed', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bath', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'car', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'playground', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                }
            },
            portuguese: {
                family: {
                    title: 'Família',
                    language: 'portuguese',
                    words: [
                        { word: 'mamãe', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'papai', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bebê', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'irmão', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'irmã', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'vovó', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'vovô', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'tia', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'tio', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'primo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'prima', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                food: {
                    title: 'Comida & Bebida',
                    language: 'portuguese',
                    words: [
                        { word: 'leite', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'água', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'banana', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'maçã', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pão', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'biscoito', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'suco', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'iogurte', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'queijo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'frango', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'macarrão', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'arroz', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'ovo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cereal', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'laranja', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'uva', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'morango', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cenoura', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'ervilha', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'batata', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'acabou', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'mais', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'gostoso', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                actions: {
                    title: 'Ações & Verbos',
                    language: 'portuguese',
                    words: [
                        { word: 'vai', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'vem', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'para', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'senta', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'levanta', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'anda', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'corre', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pula', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'brinca', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'dorme', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'comer', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'beber', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'lavar', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'escovar', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'ler', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cantar', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'dançar', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'ajudar', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'dar', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pegar', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'abrir', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'fechar', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                body: {
                    title: 'Partes do Corpo',
                    language: 'portuguese',
                    words: [
                        { word: 'cabeça', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cabelo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'olhos', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'nariz', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'boca', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'orelhas', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'dentes', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'mãos', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'dedos', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'braços', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pernas', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pés', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'dedos do pé', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'barriga', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'costas', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'joelho', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                toys: {
                    title: 'Brinquedos & Objetos',
                    language: 'portuguese',
                    words: [
                        { word: 'bola', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'livro', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'carro', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'trem', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'avião', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bicicleta', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'boneca', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'ursinho', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'blocos', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'quebra-cabeça', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'copo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'prato', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'colher', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'garfo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'mamadeira', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sapatos', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'meias', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'chapéu', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'casaco', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'fralda', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                colours: {
                    title: 'Cores & Descrições',
                    language: 'portuguese',
                    words: [
                        { word: 'vermelho', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'azul', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'amarelo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'verde', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'rosa', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'roxo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'laranja', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'preto', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'branco', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'grande', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pequeno', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'alto', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'baixo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'quente', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'frio', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'rápido', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'devagar', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'feliz', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'triste', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                animals: {
                    title: 'Animais',
                    language: 'portuguese',
                    words: [
                        { word: 'cachorro', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'gato', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'vaca', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'porco', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'ovelha', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cavalo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pato', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'galinha', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'peixe', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'passarinho', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'coelho', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'ratinho', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'elefante', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'leão', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'tigre', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'macaco', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'urso', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'borboleta', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                social: {
                    title: 'Social & Educação',
                    language: 'portuguese',
                    words: [
                        { word: 'olá', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'oi', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'tchau', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'por favor', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'obrigado', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'desculpa', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'com licença', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sim', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'não', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'meu', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'seu', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'dividir', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'vez', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'amigo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'amor', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'beijo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'abraço', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                places: {
                    title: 'Lugares & Locais',
                    language: 'portuguese',
                    words: [
                        { word: 'casa', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'jardim', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'parque', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'loja', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'escola', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'quarto', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cozinha', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'banheiro', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'fora', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'dentro', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'em cima', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'embaixo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cama', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'banho', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'carro', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'playground', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                }
            }
        };
    }

    initializeKidName() {
        const nameInput = document.getElementById('child-name');
        if (nameInput) {
            // Load saved name
            if (this.data.kidName) {
                nameInput.value = this.data.kidName;
            }

            // Add event listeners
            nameInput.addEventListener('input', (e) => this.updateKidName(e.target.value));
            nameInput.addEventListener('blur', () => this.saveData());
        }
    }

    updateKidName(name) {
        this.data.kidName = name.trim();
        if (this.data.kidName) {
            this.saveData();
        }
    }

    initializeWordData() {
        console.log('🔧 Initializing word data...');
        console.log('📋 Current categories:', this.data.categories);

        // Check if we have the new extensive structure with all categories
        const hasExtensiveStructure = this.data.categories &&
                                     this.data.categories.english &&
                                     this.data.categories.portuguese &&
                                     Object.keys(this.data.categories.english).length >= 8 &&
                                     Object.keys(this.data.categories.portuguese).length >= 8;

        if (!hasExtensiveStructure) {
            console.log('🔥 Updating to extensive category structure with 300+ words');
            // Preserve existing progress
            const oldProgress = this.extractExistingProgress();
            // Get new extensive data
            this.data.categories = this.getDefaultWordData();
            // Apply old progress to matching words
            this.applyExistingProgress(oldProgress);
            this.saveData();
            console.log('✅ Extensive structure created and saved');
        } else {
            console.log('✅ Using existing extensive structure');
            // Ensure all words have the firstSpokenAge property
            this.ensureFirstSpokenAgeProperty();
        }
    }

    extractExistingProgress() {
        const progress = {};
        if (this.data.categories) {
            ['english', 'portuguese'].forEach(language => {
                if (this.data.categories[language]) {
                    progress[language] = {};
                    Object.values(this.data.categories[language]).forEach(category => {
                        if (category.words) {
                            category.words.forEach(word => {
                                progress[language][word.word] = {
                                    understanding: word.understanding,
                                    speaking: word.speaking,
                                    firstSpokenAge: word.firstSpokenAge
                                };
                            });
                        }
                    });
                }
            });
        }
        return progress;
    }

    applyExistingProgress(progress) {
        ['english', 'portuguese'].forEach(language => {
            if (progress[language] && this.data.categories[language]) {
                Object.values(this.data.categories[language]).forEach(category => {
                    if (category.words) {
                        category.words.forEach(word => {
                            if (progress[language][word.word]) {
                                const savedProgress = progress[language][word.word];
                                word.understanding = savedProgress.understanding;
                                word.speaking = savedProgress.speaking;
                                word.firstSpokenAge = savedProgress.firstSpokenAge;
                            }
                        });
                    }
                });
            }
        });
    }

    ensureFirstSpokenAgeProperty() {
        console.log('🔧 Ensuring all words have firstSpokenAge property...');
        let updated = false;

        ['english', 'portuguese'].forEach(language => {
            if (this.data.categories[language]) {
                Object.values(this.data.categories[language]).forEach(category => {
                    if (category.words) {
                        category.words.forEach(word => {
                            if (word.firstSpokenAge === undefined) {
                                word.firstSpokenAge = word.speaking ? (this.data.babyAge || 12) : null;
                                updated = true;
                            }
                        });
                    }
                });
            }
        });

        if (updated) {
            this.saveData();
            console.log('✅ Updated existing words with firstSpokenAge property');
        }
    }

    migrateExistingData() {
        let needsMigration = false;

        // Check if we have old paired format (with 'en' and 'pt' properties)
        const hasOldPairedFormat = Object.values(this.data.categories).some(category =>
            category.words && category.words.some(word => word.en !== undefined || word.pt !== undefined)
        );

        if (hasOldPairedFormat) {
            console.log('Migrating from old paired format to new separated format');
            const newData = this.getDefaultWordData();
            const oldCategories = this.data.categories;

            // Transfer any user progress from old format
            Object.keys(oldCategories).forEach(categoryKey => {
                const oldCategory = oldCategories[categoryKey];
                if (oldCategory.words) {
                    oldCategory.words.forEach(oldWord => {
                        // Find matching English word and transfer data
                        if (oldWord.en) {
                            this.findAndUpdateWordInNewData(newData.english, oldWord.en, {
                                understanding: oldWord.enUnderstanding || oldWord.understanding || false,
                                speaking: oldWord.enSpeaking || oldWord.speaking || false,
                                firstSpokenAge: oldWord.enFirstSpokenAge || (oldWord.speaking ? this.data.babyAge : null)
                            });
                        }

                        // Find matching Portuguese word and transfer data
                        if (oldWord.pt) {
                            this.findAndUpdateWordInNewData(newData.portuguese, oldWord.pt, {
                                understanding: oldWord.ptUnderstanding || oldWord.understanding || false,
                                speaking: oldWord.ptSpeaking || oldWord.speaking || false,
                                firstSpokenAge: oldWord.ptFirstSpokenAge || (oldWord.speaking ? this.data.babyAge : null)
                            });
                        }
                    });
                }
            });

            this.data.categories = newData;
            needsMigration = true;
        }

        // Check if we have new separated format but missing language property
        if (!hasOldPairedFormat) {
            ['english', 'portuguese'].forEach(lang => {
                if (this.data.categories[lang]) {
                    Object.values(this.data.categories[lang]).forEach(category => {
                        if (!category.language) {
                            category.language = lang;
                            needsMigration = true;
                        }
                        if (category.words) {
                            category.words.forEach(word => {
                                if (word.firstSpokenAge === undefined) {
                                    word.firstSpokenAge = null;
                                    needsMigration = true;
                                }
                            });
                        }
                    });
                }
            });
        }

        if (needsMigration) {
            console.log('Migration completed - data updated to new format');
            this.saveData();
        }
    }

    findAndUpdateWordInNewData(languageData, wordText, progressData) {
        Object.values(languageData).forEach(category => {
            if (category.words) {
                const foundWord = category.words.find(w => w.word === wordText);
                if (foundWord) {
                    foundWord.understanding = progressData.understanding;
                    foundWord.speaking = progressData.speaking;
                    foundWord.firstSpokenAge = progressData.firstSpokenAge;
                }
            }
        });
    }

    bindEventListeners() {
        // Age input
        const ageInput = document.getElementById('baby-age');
        ageInput.addEventListener('input', (e) => this.updateAge(e.target.value));
        ageInput.addEventListener('change', () => this.checkMilestones());


        // Search functionality
        const searchInput = document.getElementById('search-input');
        const searchClear = document.getElementById('search-clear');

        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        searchClear.addEventListener('click', () => this.clearSearch());

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e.target.dataset.filter));
        });

        // Modal functionality
        const modalOverlay = document.getElementById('modal-overlay');
        const modalClose = document.getElementById('modal-close');
        const modalCancel = document.getElementById('modal-cancel');
        const modalSave = document.getElementById('modal-save');

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) this.closeModal();
        });
        modalClose.addEventListener('click', () => this.closeModal());
        modalCancel.addEventListener('click', () => this.closeModal());
        modalSave.addEventListener('click', () => this.saveCustomWord());

        // Export functionality
        const exportBtn = document.getElementById('export-btn');
        exportBtn.addEventListener('click', () => this.exportData());

        // Timeline functionality
        const timelineToggle = document.getElementById('timeline-toggle');
        timelineToggle.addEventListener('click', () => this.toggleTimeline());

        // Start with timeline expanded and generate initial chart
        this.initializeTimeline();

        // Load saved age
        if (this.data.babyAge) {
            ageInput.value = this.data.babyAge;
        }
    }

    updateAge(age) {
        this.data.babyAge = parseInt(age) || 0;
        this.saveData();
        this.checkMilestones();
    }

    handleSearch(term) {
        this.searchTerm = term.toLowerCase();
        this.filterWords();

        const clearBtn = document.getElementById('search-clear');
        clearBtn.style.display = term ? 'flex' : 'none';
    }

    clearSearch() {
        const searchInput = document.getElementById('search-input');
        searchInput.value = '';
        this.searchTerm = '';
        this.filterWords();
        document.getElementById('search-clear').style.display = 'none';
    }

    handleFilter(filter) {
        this.currentFilter = filter;

        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');

        this.filterWords();
    }

    filterWords() {
        const categories = document.querySelectorAll('.category-card');

        categories.forEach(categoryCard => {
            const language = categoryCard.dataset.language;
            const categoryKey = categoryCard.dataset.category;
            const wordContainers = categoryCard.querySelectorAll('.word-item-container');
            let hasVisibleWords = false;

            wordContainers.forEach(wordContainer => {
                const wordId = wordContainer.dataset.wordId;
                const word = this.data.categories[language][categoryKey].words[parseInt(wordId)];

                let matchesSearch = true;
                let matchesFilter = true;

                // Search filter
                if (this.searchTerm) {
                    matchesSearch = word.word.toLowerCase().includes(this.searchTerm);
                }

                // Comprehension filter
                if (this.currentFilter === 'speaking') {
                    matchesFilter = word.speaking;
                } else if (this.currentFilter === 'understanding') {
                    matchesFilter = word.understanding || word.speaking;
                }

                const shouldShow = matchesSearch && matchesFilter;
                wordContainer.classList.toggle('hidden', !shouldShow);

                if (shouldShow) hasVisibleWords = true;
            });

            // Hide category if no words are visible
            categoryCard.classList.toggle('hidden', !hasVisibleWords);
        });
    }

    renderCategories() {
        const container = document.getElementById('categories-container');
        container.innerHTML = '';

        console.log('Rendering categories. Data structure:', this.data.categories);

        // Render English categories first
        if (this.data.categories.english) {
            console.log('Rendering English categories:', Object.keys(this.data.categories.english));
            Object.keys(this.data.categories.english).forEach(categoryKey => {
                const category = this.data.categories.english[categoryKey];
                const categoryCard = this.createCategoryCard('english', categoryKey, category);
                container.appendChild(categoryCard);
            });
        } else {
            console.log('No English categories found');
        }

        // Render Portuguese categories
        if (this.data.categories.portuguese) {
            console.log('Rendering Portuguese categories:', Object.keys(this.data.categories.portuguese));
            Object.keys(this.data.categories.portuguese).forEach(categoryKey => {
                const category = this.data.categories.portuguese[categoryKey];
                const categoryCard = this.createCategoryCard('portuguese', categoryKey, category);
                container.appendChild(categoryCard);
            });
        } else {
            console.log('No Portuguese categories found');
        }

        this.populateCustomWordCategoryOptions();
    }

    createCategoryCard(language, categoryKey, category) {
        const card = document.createElement('div');
        card.className = `category-card ${language}-category`;
        card.dataset.language = language;
        card.dataset.category = categoryKey;

        const header = document.createElement('div');
        header.className = 'category-header';
        header.onclick = () => this.toggleCategory(language, categoryKey);

        const title = document.createElement('h2');
        title.className = 'category-title';
        const languageFlag = language === 'english' ? '🇬🇧' : '🇧🇷';
        title.textContent = `${languageFlag} ${category.title}`;

        const toggle = document.createElement('div');
        toggle.className = 'category-toggle';
        toggle.innerHTML = '▼';

        header.appendChild(title);
        header.appendChild(toggle);

        const content = document.createElement('div');
        content.className = 'category-content';
        content.id = `category-${language}-${categoryKey}`;

        // Restore expanded state
        const expandedKey = `${language}-${categoryKey}`;
        if (this.expandedCategories.has(expandedKey)) {
            content.classList.add('expanded');
            toggle.classList.add('expanded');
        }

        const wordsList = document.createElement('div');
        wordsList.className = 'words-list';

        category.words.forEach((word, index) => {
            const wordItem = this.createWordItem(language, categoryKey, word, index);
            wordsList.appendChild(wordItem);
        });

        const addButton = document.createElement('button');
        addButton.className = 'add-word-btn';
        addButton.innerHTML = '+ Add custom word';
        addButton.onclick = () => this.openAddWordModal(language, categoryKey);

        wordsList.appendChild(addButton);
        content.appendChild(wordsList);

        card.appendChild(header);
        card.appendChild(content);

        return card;
    }

    createWordItem(language, categoryKey, word, wordIndex) {
        const container = document.createElement('div');
        container.className = `word-item-container ${language}-word`;
        container.dataset.language = language;
        container.dataset.category = categoryKey;
        container.dataset.wordId = wordIndex;

        // Create word display
        const wordDisplay = document.createElement('div');
        wordDisplay.className = 'word-display';
        wordDisplay.textContent = word.word;

        // Create controls
        const controls = document.createElement('div');
        controls.className = 'word-controls';

        const understandingToggle = this.createToggle(
            `${language}-understands`,
            'Understands Only',
            word.understanding,
            () => this.toggleWordUnderstanding(language, categoryKey, wordIndex)
        );

        const speakingToggle = this.createToggle(
            `${language}-speaks`,
            'Understands & Uses',
            word.speaking,
            () => this.toggleWordSpeaking(language, categoryKey, wordIndex)
        );

        controls.appendChild(understandingToggle);
        controls.appendChild(speakingToggle);

        // Create age selector (only show when speaking is true)
        const ageSelector = this.createAgeSelector(language, categoryKey, wordIndex, word);

        container.appendChild(wordDisplay);
        container.appendChild(controls);
        container.appendChild(ageSelector);

        return container;
    }


    createToggle(className, label, checked, onClick) {
        const toggle = document.createElement('div');
        toggle.className = `comprehension-toggle ${className}`;
        toggle.onclick = onClick;

        const checkbox = document.createElement('div');
        checkbox.className = `toggle-checkbox ${checked ? 'checked' : ''}`;

        const labelElement = document.createElement('span');
        labelElement.textContent = label;

        toggle.appendChild(checkbox);
        toggle.appendChild(labelElement);

        return toggle;
    }

    createAgeSelector(language, categoryKey, wordIndex, word) {
        const ageSelector = document.createElement('div');
        ageSelector.className = 'age-selector';
        ageSelector.dataset.language = language;
        ageSelector.dataset.category = categoryKey;
        ageSelector.dataset.wordIndex = wordIndex;

        // Only show if word is marked as speaking
        if (!word.speaking) {
            ageSelector.style.display = 'none';
        }

        const label = document.createElement('span');
        label.className = 'age-label';
        label.textContent = 'First said at:';

        const ageControls = document.createElement('div');
        ageControls.className = 'age-controls';

        const decreaseBtn = document.createElement('button');
        decreaseBtn.className = 'age-btn decrease';
        decreaseBtn.innerHTML = '−';
        decreaseBtn.onclick = (e) => {
            e.stopPropagation();
            this.changeWordAge(language, categoryKey, wordIndex, -1);
        };

        const ageDisplay = document.createElement('span');
        ageDisplay.className = 'age-display';
        ageDisplay.textContent = `${word.firstSpokenAge || this.data.babyAge || 12}m`;

        const increaseBtn = document.createElement('button');
        increaseBtn.className = 'age-btn increase';
        increaseBtn.innerHTML = '+';
        increaseBtn.onclick = (e) => {
            e.stopPropagation();
            this.changeWordAge(language, categoryKey, wordIndex, 1);
        };

        ageControls.appendChild(decreaseBtn);
        ageControls.appendChild(ageDisplay);
        ageControls.appendChild(increaseBtn);

        ageSelector.appendChild(label);
        ageSelector.appendChild(ageControls);

        return ageSelector;
    }

    changeWordAge(language, categoryKey, wordIndex, delta) {
        const word = this.data.categories[language][categoryKey].words[wordIndex];
        const currentAge = word.firstSpokenAge || this.data.babyAge || 12;
        const newAge = Math.max(1, Math.min(60, currentAge + delta));

        // Don't allow age greater than current baby age
        const maxAge = this.data.babyAge || 12;
        word.firstSpokenAge = Math.min(newAge, maxAge);

        this.saveData();
        this.updateWordAgeDisplay(language, categoryKey, wordIndex);
        this.generateTimelineChart();
    }

    updateWordAgeDisplay(language, categoryKey, wordIndex) {
        const word = this.data.categories[language][categoryKey].words[wordIndex];
        const ageSelector = document.querySelector(`[data-language="${language}"][data-category="${categoryKey}"] [data-word-index="${wordIndex}"] .age-display`);

        if (ageSelector) {
            ageSelector.textContent = `${word.firstSpokenAge}m`;
        }
    }

    toggleCategory(language, categoryKey) {
        const content = document.getElementById(`category-${language}-${categoryKey}`);
        const toggle = content.parentElement.querySelector('.category-toggle');

        const isExpanded = content.classList.contains('expanded');
        const expandedKey = `${language}-${categoryKey}`;

        if (isExpanded) {
            content.classList.remove('expanded');
            toggle.classList.remove('expanded');
            this.expandedCategories.delete(expandedKey);
        } else {
            content.classList.add('expanded');
            toggle.classList.add('expanded');
            this.expandedCategories.add(expandedKey);
        }
    }

    toggleWordUnderstanding(language, categoryKey, wordIndex) {
        const word = this.data.categories[language][categoryKey].words[wordIndex];
        word.understanding = !word.understanding;

        // If speaking is true and understanding becomes false, turn off speaking too
        if (!word.understanding && word.speaking) {
            word.speaking = false;
        }

        this.saveData();
        this.updateWordDisplay(language, categoryKey, wordIndex);
        this.updateStatistics();
        this.checkMilestones();
        this.generateTimelineChart();
    }

    toggleWordSpeaking(language, categoryKey, wordIndex) {
        const word = this.data.categories[language][categoryKey].words[wordIndex];

        if (!word.speaking) {
            // Turning speaking ON
            word.speaking = true;
            word.understanding = true;
            // Set default age to current baby age
            word.firstSpokenAge = this.data.babyAge || 12;
        } else {
            // Turning speaking OFF
            word.speaking = false;
            word.firstSpokenAge = null;
        }

        this.saveData();
        this.updateWordDisplay(language, categoryKey, wordIndex);
        this.updateStatistics();
        this.checkMilestones();
        this.generateTimelineChart();
    }

    promptForAge(language, categoryKey, wordIndex, onConfirm) {
        const word = this.data.categories[language][categoryKey].words[wordIndex];
        const currentAge = this.data.babyAge || 12;
        const languageName = language === 'english' ? 'English' : 'Portuguese';
        const wordText = word.word;

        console.log('Prompting for age:', { language, categoryKey, wordIndex, wordText });

        // Use a simple prompt for now - can be enhanced with a custom modal later
        const ageInput = prompt(
            `At what age (in months) did your baby first say "${wordText}" in ${languageName}?\n\nCurrent age: ${currentAge} months\nLeave empty to use current age (${currentAge}):`,
            currentAge.toString()
        );

        if (ageInput === null) {
            // User cancelled
            console.log('User cancelled age input');
            return;
        }

        const age = parseInt(ageInput) || currentAge;
        console.log('Age entered:', age);

        // Validate age
        if (age < 1) {
            alert('Age must be at least 1 month');
            return;
        }

        if (age > currentAge) {
            alert(`Age cannot be more than baby's current age (${currentAge} months)`);
            return;
        }

        // Set the age and call the callback
        word.firstSpokenAge = age;
        console.log('✅ Set first spoken age for word:', word.word, 'Age:', age);
        onConfirm();
    }

    // Update individual word display without re-rendering entire categories
    updateWordDisplay(language, categoryKey, wordIndex) {
        const word = this.data.categories[language][categoryKey].words[wordIndex];
        const wordElement = document.querySelector(`[data-language="${language}"][data-category="${categoryKey}"] [data-word-id="${wordIndex}"]`);

        if (wordElement) {
            // Update understanding toggle
            const understanding = wordElement.querySelector(`.${language}-understands .toggle-checkbox`);
            const speaking = wordElement.querySelector(`.${language}-speaks .toggle-checkbox`);

            if (understanding) {
                understanding.classList.toggle('checked', word.understanding);
            }
            if (speaking) {
                speaking.classList.toggle('checked', word.speaking);
            }

            // Show/hide age selector based on speaking status
            const ageSelector = wordElement.querySelector('.age-selector');
            if (ageSelector) {
                ageSelector.style.display = word.speaking ? 'flex' : 'none';
                if (word.speaking) {
                    const ageDisplay = ageSelector.querySelector('.age-display');
                    if (ageDisplay) {
                        ageDisplay.textContent = `${word.firstSpokenAge}m`;
                    }
                }
            }
        }

        this.filterWords();
    }

    updateStatistics() {
        let totalSpeaking = 0;
        let totalUnderstanding = 0;
        let englishSpeaking = 0;
        let portugueseSpeaking = 0;
        let englishUnderstanding = 0;
        let portugueseUnderstanding = 0;

        // Count English words
        if (this.data.categories.english) {
            Object.values(this.data.categories.english).forEach(category => {
                if (category.words) {
                    category.words.forEach(word => {
                        if (word.speaking) {
                            englishSpeaking++;
                            totalSpeaking++;
                        }
                        if (word.understanding || word.speaking) {
                            englishUnderstanding++;
                            totalUnderstanding++;
                        }
                    });
                }
            });
        }

        // Count Portuguese words
        if (this.data.categories.portuguese) {
            Object.values(this.data.categories.portuguese).forEach(category => {
                if (category.words) {
                    category.words.forEach(word => {
                        if (word.speaking) {
                            portugueseSpeaking++;
                            totalSpeaking++;
                        }
                        if (word.understanding || word.speaking) {
                            portugueseUnderstanding++;
                            totalUnderstanding++;
                        }
                    });
                }
            });
        }

        // Update statistics display
        document.getElementById('total-speaking').textContent = totalSpeaking;
        document.getElementById('total-understanding').textContent = totalUnderstanding;

        // Calculate language percentages
        const totalWords = englishSpeaking + portugueseSpeaking;
        const englishPercentage = totalWords > 0 ? Math.round((englishSpeaking / totalWords) * 100) : 0;
        const portuguesePercentage = totalWords > 0 ? Math.round((portugueseSpeaking / totalWords) * 100) : 0;

        document.getElementById('english-percentage').textContent = `${englishSpeaking} words (${englishPercentage}%)`;
        document.getElementById('portuguese-percentage').textContent = `${portugueseSpeaking} words (${portuguesePercentage}%)`;

        document.getElementById('english-progress').style.width = `${englishPercentage}%`;
        document.getElementById('portuguese-progress').style.width = `${portuguesePercentage}%`;
    }

    checkMilestones() {
        const age = this.data.babyAge || 0;
        const totalSpeaking = parseInt(document.getElementById('total-speaking').textContent) || 0;
        const milestoneIndicator = document.getElementById('milestone-indicator');
        const milestoneText = milestoneIndicator.querySelector('.milestone-text');

        let message = '';

        if (age >= 12 && age < 18) {
            if (totalSpeaking >= 3) {
                message = "Fantastic! Your baby is saying first words! 🌟";
            } else {
                message = "First words are coming soon! Keep talking! 💬";
            }
        } else if (age >= 18 && age < 24) {
            if (totalSpeaking >= 10) {
                message = "Amazing vocabulary development! 🚀";
            } else {
                message = "Great progress! Words are building up! 📈";
            }
        } else if (age >= 24 && age < 36) {
            if (totalSpeaking >= 50) {
                message = "Incredible! Your toddler is very expressive! 🎉";
            } else {
                message = "Wonderful language growth! Keep it up! 💪";
            }
        } else if (age >= 36) {
            if (totalSpeaking >= 100) {
                message = "Outstanding vocabulary! Future linguist! 🌍";
            } else {
                message = "Excellent language development! 📚";
            }
        } else {
            message = "Every sound and babble counts! 🤗";
        }

        milestoneText.textContent = message;
    }

    openAddWordModal(language, categoryKey) {
        this.currentCategory = { language, categoryKey };
        const modal = document.getElementById('modal-overlay');
        modal.classList.add('active');

        // Clear form
        document.getElementById('custom-word-en').value = '';
        document.getElementById('custom-word-pt').value = '';
        document.getElementById('custom-word-category').value = `${language}-${categoryKey}`;

        // Focus first input
        setTimeout(() => {
            document.getElementById('custom-word-en').focus();
        }, 300);
    }

    closeModal() {
        const modal = document.getElementById('modal-overlay');
        modal.classList.remove('active');
        this.currentCategory = null;
    }

    saveCustomWord() {
        const wordText = document.getElementById('custom-word-en').value.trim(); // Repurpose this field for any word
        const categorySelection = document.getElementById('custom-word-category').value;

        if (!wordText || !categorySelection) {
            alert('Please fill in the word and select a category');
            return;
        }

        const [language, categoryKey] = categorySelection.split('-');

        if (!language || !categoryKey) {
            alert('Invalid category selection');
            return;
        }

        // Add word to category
        this.data.categories[language][categoryKey].words.push({
            word: wordText,
            understanding: false,
            speaking: false,
            firstSpokenAge: null
        });

        this.saveData();
        this.renderCategories();
        this.closeModal();
        this.filterWords();

        // Show success feedback
        const categoryTitle = this.data.categories[language][categoryKey].title;
        this.showToast(`Added "${wordText}" to ${categoryTitle}!`);
    }

    initializeTimeline() {
        console.log('📈 Initializing timeline...');
        const toggle = document.getElementById('timeline-toggle');
        const content = document.getElementById('timeline-content');

        if (!toggle || !content) {
            console.error('❌ Timeline elements not found!');
            return;
        }

        console.log('📊 Setting timeline to expanded...');
        // Start expanded
        content.classList.add('expanded');
        toggle.classList.add('expanded');
        this.generateTimelineChart();
        console.log('✅ Timeline initialized');
    }

    toggleTimeline() {
        const toggle = document.getElementById('timeline-toggle');
        const content = document.getElementById('timeline-content');

        const isExpanded = content.classList.contains('expanded');

        if (isExpanded) {
            content.classList.remove('expanded');
            toggle.classList.remove('expanded');
        } else {
            content.classList.add('expanded');
            toggle.classList.add('expanded');
            this.generateTimelineChart();
        }
    }

    generateTimelineChart() {
        const chartContainer = document.getElementById('timeline-chart');
        console.log('Generating timeline chart...');

        // Collect all word data with ages
        const wordData = [];

        // Collect English words
        if (this.data.categories.english) {
            Object.values(this.data.categories.english).forEach(category => {
                if (category.words) {
                    category.words.forEach(word => {
                        if (word.speaking && word.firstSpokenAge) {
                            wordData.push({
                                age: word.firstSpokenAge,
                                language: 'english',
                                word: word.word
                            });
                        }
                    });
                }
            });
        }

        // Collect Portuguese words
        if (this.data.categories.portuguese) {
            Object.values(this.data.categories.portuguese).forEach(category => {
                if (category.words) {
                    category.words.forEach(word => {
                        if (word.speaking && word.firstSpokenAge) {
                            wordData.push({
                                age: word.firstSpokenAge,
                                language: 'portuguese',
                                word: word.word
                            });
                        }
                    });
                }
            });
        }

        console.log('Timeline word data collected:', wordData);

        // Sort by age
        wordData.sort((a, b) => a.age - b.age);

        if (wordData.length === 0) {
            // Show empty chart with axes
            this.renderEmptyChart(chartContainer);
            return;
        }

        // Generate chart
        this.renderTimelineChart(chartContainer, wordData);
    }

    renderEmptyChart(container) {
        let html = '<div class="chart-content">';

        // Create empty bar chart
        html += '<div class="bar-chart" style="display: flex; align-items: end; height: 150px; padding: 10px; gap: 8px; background: #f8f9fa; border-radius: 8px;">';

        // Show placeholder bars for common ages
        for (let age = 12; age <= 24; age += 3) {
            html += `
                <div style="display: flex; flex-direction: column; align-items: center; flex: 1; min-width: 40px;">
                    <div style="display: flex; flex-direction: column; align-items: center; height: 120px; justify-content: end;">
                        <div style="width: 100%; background: #e9ecef; height: 8px; border-radius: 2px; border: 1px dashed #6c757d;"></div>
                    </div>
                    <div style="font-size: 11px; margin-top: 6px; color: #6c757d; font-weight: 600;">${age}m</div>
                    <div style="font-size: 9px; color: #6c757d;">0</div>
                </div>
            `;
        }

        html += '</div>';

        // Legend
        html += `
            <div style="display: flex; justify-content: center; gap: 16px; margin-top: 12px; font-size: 11px;">
                <div style="display: flex; align-items: center; gap: 4px;">
                    <div style="width: 12px; height: 12px; background: #6c9bd1; border-radius: 2px;"></div>
                    <span>English</span>
                </div>
                <div style="display: flex; align-items: center; gap: 4px;">
                    <div style="width: 12px; height: 12px; background: #f4a261; border-radius: 2px;"></div>
                    <span>Portuguese</span>
                </div>
            </div>
        `;

        html += '<div style="text-align: center; margin-top: 12px; font-size: 12px; color: #6c757d;">';
        html += 'Mark words as "speaking" and enter ages to see your progress!';
        html += '</div>';

        html += '</div>';
        container.innerHTML = html;
    }

    renderTimelineChart(container, wordData) {
        console.log('📊 Rendering bar chart with data:', wordData);

        if (wordData.length === 0) {
            this.renderEmptyChart(container);
            return;
        }

        // Group words by age
        const ageGroups = {};
        wordData.forEach(word => {
            if (!ageGroups[word.age]) {
                ageGroups[word.age] = { english: 0, portuguese: 0 };
            }
            ageGroups[word.age][word.language]++;
        });

        console.log('📊 Age groups:', ageGroups);

        const ages = Object.keys(ageGroups).sort((a, b) => parseInt(a) - parseInt(b));
        const maxWords = Math.max(...ages.map(age => ageGroups[age].english + ageGroups[age].portuguese), 5);

        let html = '<div class="chart-content">';

        // Create bar chart
        html += '<div class="bar-chart" style="display: flex; align-items: end; height: 150px; padding: 10px; gap: 6px; background: #f8f9fa; border-radius: 8px; overflow-x: auto;">';

        ages.forEach(age => {
            const englishCount = ageGroups[age].english;
            const portugueseCount = ageGroups[age].portuguese;
            const total = englishCount + portugueseCount;

            const englishHeight = Math.max((englishCount / maxWords) * 100, englishCount > 0 ? 12 : 0);
            const portugueseHeight = Math.max((portugueseCount / maxWords) * 100, portugueseCount > 0 ? 12 : 0);

            html += `
                <div style="display: flex; flex-direction: column; align-items: center; min-width: 50px;">
                    <div style="display: flex; flex-direction: column; align-items: center; height: 120px; justify-content: end; gap: 1px; width: 30px;">
                        ${englishCount > 0 ? `<div style="width: 100%; background: #6c9bd1; height: ${englishHeight}px; border-radius: 2px; min-height: 12px;"></div>` : ''}
                        ${portugueseCount > 0 ? `<div style="width: 100%; background: #f4a261; height: ${portugueseHeight}px; border-radius: 2px; min-height: 12px;"></div>` : ''}
                    </div>
                    <div style="font-size: 11px; margin-top: 6px; color: #6c757d; font-weight: 600;">${age}m</div>
                    <div style="font-size: 9px; color: #6c757d;">${total}</div>
                </div>
            `;
        });

        html += '</div>';

        // Legend
        html += `
            <div style="display: flex; justify-content: center; gap: 16px; margin-top: 12px; font-size: 11px;">
                <div style="display: flex; align-items: center; gap: 4px;">
                    <div style="width: 12px; height: 12px; background: #6c9bd1; border-radius: 2px;"></div>
                    <span>English</span>
                </div>
                <div style="display: flex; align-items: center; gap: 4px;">
                    <div style="width: 12px; height: 12px; background: #f4a261; border-radius: 2px;"></div>
                    <span>Portuguese</span>
                </div>
            </div>
        `;

        html += '</div>';
        container.innerHTML = html;
    }

    populateCustomWordCategoryOptions() {
        const select = document.getElementById('custom-word-category');
        select.innerHTML = '<option value="">Select category...</option>';

        // Add English categories
        if (this.data.categories.english) {
            Object.keys(this.data.categories.english).forEach(key => {
                const option = document.createElement('option');
                option.value = `english-${key}`;
                option.textContent = `🇬🇧 ${this.data.categories.english[key].title}`;
                select.appendChild(option);
            });
        }

        // Add Portuguese categories
        if (this.data.categories.portuguese) {
            Object.keys(this.data.categories.portuguese).forEach(key => {
                const option = document.createElement('option');
                option.value = `portuguese-${key}`;
                option.textContent = `🇧🇷 ${this.data.categories.portuguese[key].title}`;
                select.appendChild(option);
            });
        }
    }

    exportData() {
        const exportData = {
            babyAge: this.data.babyAge,
            categories: this.data.categories,
            exportDate: new Date().toISOString(),
            statistics: {
                totalSpeaking: parseInt(document.getElementById('total-speaking').textContent) || 0,
                totalUnderstanding: parseInt(document.getElementById('total-understanding').textContent) || 0
            }
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], {
            type: 'application/json'
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `baby-words-progress-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showToast('Progress exported successfully! 📤');
    }

    showToast(message) {
        // Simple toast notification
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--soft-blue);
            color: white;
            padding: 12px 24px;
            border-radius: 24px;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            font-weight: 500;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => toast.style.opacity = '1', 100);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }

    loadData() {
        try {
            const saved = localStorage.getItem('babyWordsData');
            return saved ? JSON.parse(saved) : { categories: {}, babyAge: 0 };
        } catch (error) {
            console.error('Error loading data:', error);
            return { categories: {}, babyAge: 0 };
        }
    }

    saveData() {
        try {
            localStorage.setItem('babyWordsData', JSON.stringify(this.data));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }
}

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BabyWordsTracker();
});

// Add viewport height fix for mobile browsers
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setViewportHeight);
setViewportHeight();
