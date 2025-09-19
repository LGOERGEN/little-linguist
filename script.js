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
        this.activeChildId = this.data.activeChildId || null;

        this.initializeChildren();
        this.initializeKidName();
        this.initializeWordData();
        this.initializeChildProfile();
        this.bindEventListeners();
        this.renderChildProfiles();
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
                },
                other: {
                    title: 'Other',
                    language: 'english',
                    words: []
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
                },
                other: {
                    title: 'Outros',
                    language: 'portuguese',
                    words: []
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

    initializeChildProfile() {
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        // Initialize child name
        const nameInput = document.getElementById('child-name');
        if (nameInput) {
            nameInput.value = activeChild.name || '';
        }

        // Initialize birth date
        const birthDateInput = document.getElementById('birth-date');
        if (birthDateInput) {
            birthDateInput.value = activeChild.birthDate || '';
        }

        // Initialize language checkboxes
        const selectedLanguages = activeChild.selectedLanguages || ['english', 'portuguese'];
        const languageCheckboxes = document.querySelectorAll('.language-checkbox input[type="checkbox"]');
        languageCheckboxes.forEach(checkbox => {
            checkbox.checked = selectedLanguages.includes(checkbox.value);
        });

        // Update age display
        this.updateAgeDisplay();
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
        // Birth date input
        const birthDateInput = document.getElementById('birth-date');
        if (birthDateInput) {
            birthDateInput.addEventListener('change', (e) => this.updateBirthDate(e.target.value));
        }

        // Child name input
        const childNameInput = document.getElementById('child-name');
        if (childNameInput) {
            childNameInput.addEventListener('input', (e) => this.updateChildName(e.target.value));
        }

        // Language checkboxes
        const languageCheckboxes = document.querySelectorAll('.language-checkbox input[type="checkbox"]');
        languageCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updateSelectedLanguages());
        });

        // Add child button - add both click and touchend for mobile
        const addChildBtn = document.getElementById('add-child-btn');
        if (addChildBtn) {
            addChildBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.addNewChild();
            });
            addChildBtn.addEventListener('touchend', (e) => {
                e.preventDefault();
                this.addNewChild();
            });
        }

        // Child edit close button
        const childEditClose = document.getElementById('child-edit-close');
        if (childEditClose) {
            childEditClose.addEventListener('click', () => this.closeChildEdit());
        }

        // Legacy age input (keeping for backward compatibility)
        const ageInput = document.getElementById('baby-age');
        if (ageInput) {
            ageInput.addEventListener('input', (e) => this.updateAge(e.target.value));
            ageInput.addEventListener('change', () => this.checkMilestones());
        }


        // Search functionality
        const searchInput = document.getElementById('search-input');
        const searchClear = document.getElementById('search-clear');

        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        searchClear.addEventListener('click', () => this.clearSearch());

        // Hide search dropdown when clicking outside
        document.addEventListener('click', (e) => {
            const searchContainer = document.querySelector('.search-container');
            if (searchContainer && !searchContainer.contains(e.target)) {
                this.hideSearchSuggestions();
            }
        });

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


    updateBirthDate(birthDate) {
        const activeChild = this.getActiveChild();
        if (activeChild) {
            activeChild.birthDate = birthDate;
            this.saveData();
            this.updateAgeDisplay();
            this.renderChildProfiles();
            this.checkMilestones();
        }
    }

    updateChildName(name) {
        const activeChild = this.getActiveChild();
        if (activeChild) {
            activeChild.name = name;
            this.saveData();
            this.updateChildSummary();
            this.renderChildProfiles();
        }
    }

    updateSelectedLanguages() {
        const selectedLanguages = [];
        const checkboxes = document.querySelectorAll('.language-checkbox input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            selectedLanguages.push(checkbox.value);
        });

        const activeChild = this.getActiveChild();
        if (activeChild) {
            activeChild.selectedLanguages = selectedLanguages;
            this.saveData();
            this.renderCategories(); // Re-render categories based on selected languages
            this.updateStatistics();
        }
    }

    calculateAgeInMonths(birthDate) {
        if (!birthDate) return 0;

        const birth = new Date(birthDate);
        const today = new Date();

        console.log('🔍 Age calculation debug:', {
            birthDate,
            birth: birth.toISOString(),
            today: today.toISOString(),
            birthYear: birth.getFullYear(),
            todayYear: today.getFullYear(),
            birthMonth: birth.getMonth(),
            todayMonth: today.getMonth(),
            birthDay: birth.getDate(),
            todayDay: today.getDate()
        });

        let months = (today.getFullYear() - birth.getFullYear()) * 12;
        months -= birth.getMonth();
        months += today.getMonth();

        if (today.getDate() < birth.getDate()) {
            months--;
        }

        console.log('🔍 Calculated age in months:', months);
        return Math.max(0, months);
    }

    calculateAge() {
        const activeChild = this.getActiveChild();
        if (!activeChild || !activeChild.birthDate) return null;

        const months = this.calculateAgeInMonths(activeChild.birthDate);
        if (months < 12) {
            return `${months} month${months !== 1 ? 's' : ''}`;
        } else {
            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;
            if (remainingMonths === 0) {
                return `${years} year${years !== 1 ? 's' : ''}`;
            } else {
                return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
            }
        }
    }

    updateAgeDisplay() {
        const ageDisplay = document.getElementById('age-display');
        const activeChild = this.getActiveChild();
        if (ageDisplay && activeChild && activeChild.birthDate) {
            const age = this.calculateAge();
            ageDisplay.textContent = age ? `Age: ${age}` : '';
        }
    }


    addNewChild() {
        // For mobile compatibility, use a more reliable approach than prompt()
        let name = null;

        // Try prompt first, but handle mobile issues
        try {
            name = prompt('Enter the child\'s name:', 'New Child');
        } catch (error) {
            console.log('Prompt failed, using fallback');
        }

        // If prompt failed or was cancelled, create with default name and let user edit
        if (!name || !name.trim()) {
            name = 'New Child';
        }

        const childId = this.createNewChild(name.trim(), null, ['english', 'portuguese'], true);
        this.renderChildProfiles();
        this.renderCategories();
        this.updateStatistics();
        this.checkMilestones();

        // Open edit section for new child setup (especially important on mobile)
        this.editChild(childId);
    }

    handleSearch(term) {
        this.searchTerm = term.toLowerCase();
        this.filterWords();

        const clearBtn = document.getElementById('search-clear');
        clearBtn.style.display = term ? 'flex' : 'none';

        // Show search suggestions
        if (term.length > 0) {
            this.showSearchSuggestions(term);
        } else {
            this.hideSearchSuggestions();
        }
    }

    clearSearch() {
        const searchInput = document.getElementById('search-input');
        searchInput.value = '';
        this.searchTerm = '';
        this.filterWords();
        document.getElementById('search-clear').style.display = 'none';
        this.hideSearchSuggestions();
    }

    showSearchSuggestions(term) {
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        // Get all words from both languages
        const allWords = [];
        ['english', 'portuguese'].forEach(language => {
            if (activeChild.categories[language]) {
                Object.keys(activeChild.categories[language]).forEach(categoryKey => {
                    const category = activeChild.categories[language][categoryKey];
                    category.words.forEach((word, index) => {
                        allWords.push({
                            word: word.word,
                            language,
                            categoryKey,
                            index,
                            speaking: word.speaking,
                            understanding: word.understanding
                        });
                    });
                });
            }
        });

        // Filter words that match search term
        const matchingWords = allWords.filter(item =>
            item.word.toLowerCase().includes(term.toLowerCase())
        ).slice(0, 6); // Limit to 6 suggestions

        // Check if search term exactly matches any word
        const exactMatch = allWords.find(item =>
            item.word.toLowerCase() === term.toLowerCase()
        );

        this.renderSearchDropdown(matchingWords, term, !exactMatch);
    }

    hideSearchSuggestions() {
        const dropdown = document.getElementById('search-dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    }

    renderSearchDropdown(suggestions, searchTerm, showAddOption) {
        let dropdown = document.getElementById('search-dropdown');
        if (!dropdown) {
            dropdown = this.createSearchDropdown();
        }

        let html = '';

        // Add matching words
        suggestions.forEach(item => {
            const languageFlag = item.language === 'english' ? '🇬🇧' : '🇧🇷';
            const statusIcons = [];
            if (item.understanding) statusIcons.push('👂');
            if (item.speaking) statusIcons.push('💬');

            html += `
                <div class="search-suggestion-item" data-word="${item.word}">
                    <div class="suggestion-word">${item.word}</div>
                    <div class="suggestion-meta">
                        <span class="suggestion-language">${languageFlag}</span>
                        <span class="suggestion-status">${statusIcons.join(' ')}</span>
                    </div>
                </div>
            `;
        });

        // Add "Add new word" option if no exact match
        if (showAddOption && searchTerm.trim()) {
            html += `
                <div class="search-suggestion-item add-word-option" data-action="add-word" data-word="${searchTerm}">
                    <div class="suggestion-word">
                        <span class="add-icon">➕</span> Add "${searchTerm}"
                    </div>
                    <div class="suggestion-meta">New word</div>
                </div>
            `;
        }

        dropdown.innerHTML = html;
        dropdown.style.display = html ? 'block' : 'none';

        // Add click handlers
        dropdown.querySelectorAll('.search-suggestion-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (item.dataset.action === 'add-word') {
                    this.handleAddWordFromSearch(item.dataset.word);
                } else {
                    this.handleWordSuggestionClick(item.dataset.word);
                }
            });
        });
    }

    createSearchDropdown() {
        const searchContainer = document.querySelector('.search-container');
        const dropdown = document.createElement('div');
        dropdown.id = 'search-dropdown';
        dropdown.className = 'search-dropdown';
        searchContainer.appendChild(dropdown);
        return dropdown;
    }

    handleWordSuggestionClick(word) {
        const searchInput = document.getElementById('search-input');
        searchInput.value = word;
        this.handleSearch(word);
        this.hideSearchSuggestions();
    }

    handleAddWordFromSearch(word) {
        this.hideSearchSuggestions();

        // Show language selection for the new word
        this.showLanguageSelectionForNewWord(word);
    }

    showLanguageSelectionForNewWord(word) {
        // Create a simple language selection overlay
        const overlay = document.createElement('div');
        overlay.className = 'language-selection-overlay';
        overlay.innerHTML = `
            <div class="language-selection-modal">
                <h3>Add "${word}" to which language?</h3>
                <div class="language-options">
                    <button class="language-option-btn english" data-language="english">
                        🇬🇧 English
                    </button>
                    <button class="language-option-btn portuguese" data-language="portuguese">
                        🇧🇷 Portuguese
                    </button>
                </div>
                <button class="cancel-btn">Cancel</button>
            </div>
        `;

        document.body.appendChild(overlay);

        // Add event listeners
        overlay.querySelectorAll('.language-option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const language = btn.dataset.language;
                document.body.removeChild(overlay);
                this.showCategorySelectionForNewWord(word, language);
            });
        });

        overlay.querySelector('.cancel-btn').addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    }

    showCategorySelectionForNewWord(word, language) {
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        const categories = activeChild.categories[language];
        if (!categories || Object.keys(categories).length === 0) {
            alert(`No ${language} categories available. Please add categories first.`);
            return;
        }

        // Create category selection overlay
        const overlay = document.createElement('div');
        overlay.className = 'language-selection-overlay';

        let categoryOptionsHTML = '';
        Object.keys(categories).forEach(categoryKey => {
            const category = categories[categoryKey];
            categoryOptionsHTML += `
                <button class="category-option-btn" data-category="${categoryKey}">
                    ${category.title}
                </button>
            `;
        });

        overlay.innerHTML = `
            <div class="category-selection-modal">
                <h3>Add "${word}" to which category?</h3>
                <div class="category-selection-section">
                    <div class="category-options">
                        ${categoryOptionsHTML}
                    </div>
                </div>
                <button class="cancel-btn">Cancel</button>
            </div>
        `;

        document.body.appendChild(overlay);

        // Add event listeners for existing categories
        overlay.querySelectorAll('.category-option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const categoryKey = btn.dataset.category;
                this.addWordToCategory(word, language, categoryKey);
                document.body.removeChild(overlay);
            });
        });

        overlay.querySelector('.cancel-btn').addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    }

    addWordToCategory(word, language, categoryKey) {
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        const categories = activeChild.categories[language];
        if (!categories || !categories[categoryKey]) {
            alert(`Category not found.`);
            return;
        }

        const category = categories[categoryKey];

        // Check if word already exists in this category
        const existingWord = category.words.find(w => w.word.toLowerCase() === word.toLowerCase());
        if (existingWord) {
            alert(`"${word}" already exists in ${category.title}`);
            return;
        }

        // Add the new word
        const newWord = {
            word: word,
            understanding: false,
            speaking: false,
            age: null
        };

        category.words.push(newWord);
        const wordIndex = category.words.length - 1;

        // Save data
        this.saveData();

        // Re-render the language sections to show the new word
        this.renderCategories();

        // Clear search and show success
        this.clearSearch();
        this.showToast(`Added "${word}" to ${category.title}!`);

        // Optionally scroll to the new word and switch to that category tab
        setTimeout(() => {
            // Switch to the category tab where the word was added
            this.switchCategoryTab(language, categoryKey);

            // Scroll to the new word
            const wordElement = document.querySelector(`[data-language="${language}"][data-category="${categoryKey}"][data-word-id="${wordIndex}"]`);
            if (wordElement) {
                wordElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                wordElement.style.animation = 'highlight-new-word 2s ease-out';
            }
        }, 100);
    }

    createCustomCategoryAndAddWord(word, language, categoryName) {
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        // Create a category key from the name (lowercase, replace spaces with hyphens)
        const categoryKey = categoryName.toLowerCase().replace(/\s+/g, '-');

        // Check if category already exists
        if (activeChild.categories[language][categoryKey]) {
            alert(`Category "${categoryName}" already exists. Adding word to existing category.`);
            this.addWordToCategory(word, language, categoryKey);
            return;
        }

        // Create new category
        activeChild.categories[language][categoryKey] = {
            title: categoryName,
            words: []
        };

        // Add the word to the new category
        this.addWordToCategory(word, language, categoryKey);
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
        const languageSections = document.querySelectorAll('.language-section');

        languageSections.forEach(languageSection => {
            const language = languageSection.dataset.language;
            const wordsContainers = languageSection.querySelectorAll('.words-container');
            let hasVisibleWords = false;

            wordsContainers.forEach(wordsContainer => {
                const wordContainers = wordsContainer.querySelectorAll('.word-item-container');

                wordContainers.forEach(wordContainer => {
                    const wordId = wordContainer.dataset.wordId;
                    const categoryKey = wordContainer.dataset.category;

                    const activeChild = this.getActiveChild();
                    if (!activeChild) return;

                    const word = activeChild.categories[language][categoryKey].words[parseInt(wordId)];

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
            });

            // Only hide language section if no words are visible and not collapsed
            const isExpanded = languageSection.querySelector('.language-content').classList.contains('expanded');
            if (isExpanded) {
                languageSection.style.display = hasVisibleWords ? 'block' : 'none';
            }
        });
    }

    renderCategories() {
        const container = document.getElementById('categories-container');
        container.innerHTML = '';

        const activeChild = this.getActiveChild();
        if (!activeChild) {
            container.innerHTML = '<div style="text-align: center; color: white; padding: 2rem;">No active child selected</div>';
            return;
        }

        console.log('Rendering categories for child:', activeChild.name);
        console.log('Child categories:', activeChild.categories);
        console.log('Selected languages:', activeChild.selectedLanguages);

        // Get selected languages, default to both if none selected
        const selectedLanguages = activeChild.selectedLanguages || ['english', 'portuguese'];

        // Render consolidated language sections (auto-expanded)
        selectedLanguages.forEach(language => {
            if (activeChild.categories[language]) {
                console.log(`Rendering ${language} consolidated section:`, Object.keys(activeChild.categories[language]));
                const languageSection = this.createConsolidatedLanguageSection(language, activeChild.categories[language]);
                container.appendChild(languageSection);
            } else {
                console.log(`No ${language} categories found for child`);
            }
        });

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

    createConsolidatedLanguageSection(language, categories) {
        const section = document.createElement('div');
        section.className = `language-section ${language}-section`;
        section.dataset.language = language;

        // Create language header with toggle
        const header = document.createElement('div');
        header.className = 'language-header';
        header.onclick = () => this.toggleLanguageSection(language);

        const title = document.createElement('h2');
        title.className = 'language-title';
        const languageFlag = language === 'english' ? '🇬🇧' : '🇧🇷';
        const languageName = language === 'english' ? 'English' : 'Portuguese';
        title.textContent = `${languageFlag} ${languageName}`;

        const toggle = document.createElement('div');
        toggle.className = 'language-toggle';
        toggle.innerHTML = '▼';

        header.appendChild(title);
        header.appendChild(toggle);

        // Create category tabs
        const categoryTabs = this.createCategoryTabs(language, categories);

        // Create words container (expandable)
        const content = document.createElement('div');
        content.className = 'language-content expanded';
        content.id = `language-content-${language}`;

        // Create words container that will be filtered by category tabs
        const wordsContainer = document.createElement('div');
        wordsContainer.className = 'words-container';
        wordsContainer.id = `words-container-${language}`;

        // Initially show all words from all categories
        this.renderWordsForLanguage(language, categories, wordsContainer);

        content.appendChild(categoryTabs);
        content.appendChild(wordsContainer);
        section.appendChild(header);
        section.appendChild(content);

        // Set default active category (first one or "all")
        section.dataset.activeCategory = 'all';

        return section;
    }

    createCategoryTabs(language, categories) {
        const tabsContainer = document.createElement('div');
        tabsContainer.className = 'category-tabs';

        // Add "All" tab
        const allTab = document.createElement('button');
        allTab.className = 'category-tab active';
        allTab.dataset.category = 'all';
        allTab.dataset.language = language;
        allTab.textContent = 'All';
        allTab.onclick = () => this.switchCategoryTab(language, 'all');

        tabsContainer.appendChild(allTab);

        // Add tabs for each category
        Object.keys(categories).forEach(categoryKey => {
            const category = categories[categoryKey];
            const tab = document.createElement('button');
            tab.className = 'category-tab';
            tab.dataset.category = categoryKey;
            tab.dataset.language = language;
            tab.textContent = category.title;
            tab.onclick = () => this.switchCategoryTab(language, categoryKey);

            tabsContainer.appendChild(tab);
        });

        return tabsContainer;
    }

    renderWordsForLanguage(language, categories, container, filterCategory = null) {
        const wordsList = document.createElement('div');
        wordsList.className = 'words-list';

        Object.keys(categories).forEach(categoryKey => {
            // Skip if filtering by category and this isn't the one
            if (filterCategory && filterCategory !== 'all' && filterCategory !== categoryKey) {
                return;
            }

            const category = categories[categoryKey];
            category.words.forEach((word, wordIndex) => {
                const wordItem = this.createWordItem(language, categoryKey, word, wordIndex);
                wordsList.appendChild(wordItem);
            });
        });

        container.innerHTML = '';
        container.appendChild(wordsList);
    }

    switchCategoryTab(language, categoryKey) {
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        const categories = activeChild.categories[language];
        if (!categories) return;

        // Update active tab styling
        const languageSection = document.querySelector(`.language-section[data-language="${language}"]`);
        const tabs = languageSection.querySelectorAll('.category-tab');
        tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.category === categoryKey);
        });

        // Update words display
        const wordsContainer = document.getElementById(`words-container-${language}`);
        this.renderWordsForLanguage(language, categories, wordsContainer, categoryKey);

        // Update section's active category
        languageSection.dataset.activeCategory = categoryKey;

        // Re-apply current filters
        this.filterWords();
    }

    toggleLanguageSection(language) {
        const content = document.getElementById(`language-content-${language}`);
        const toggle = document.querySelector(`.language-section[data-language="${language}"] .language-toggle`);

        const isExpanded = content.classList.contains('expanded');

        if (isExpanded) {
            content.classList.remove('expanded');
            content.style.maxHeight = '0';
            toggle.innerHTML = '▶';
        } else {
            content.classList.add('expanded');
            content.style.maxHeight = content.scrollHeight + 'px';
            toggle.innerHTML = '▼';
        }
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

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'word-delete-btn';
        deleteButton.title = 'Delete word';
        deleteButton.innerHTML = '×';
        deleteButton.onclick = (e) => {
            e.stopPropagation();
            this.confirmDeleteWord(language, categoryKey, wordIndex, word.word);
        };

        controls.appendChild(understandingToggle);
        controls.appendChild(speakingToggle);
        controls.appendChild(deleteButton);

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
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        const word = activeChild.categories[language][categoryKey].words[wordIndex];
        const currentAge = word.firstSpokenAge || (activeChild.birthDate ? this.calculateAgeInMonths(activeChild.birthDate) : 12);
        const newAge = Math.max(1, currentAge + delta);

        // Don't allow age greater than current child's age
        const maxAge = activeChild.birthDate ? this.calculateAgeInMonths(activeChild.birthDate) : 60;
        word.firstSpokenAge = Math.min(newAge, maxAge);

        this.saveData();
        this.updateWordAgeDisplay(language, categoryKey, wordIndex);
        this.generateTimelineChart();
    }

    updateWordAgeDisplay(language, categoryKey, wordIndex) {
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        const word = activeChild.categories[language][categoryKey].words[wordIndex];
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
        console.log('toggleWordUnderstanding called:', { language, categoryKey, wordIndex });
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        const word = activeChild.categories[language][categoryKey].words[wordIndex];
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
        console.log('toggleWordSpeaking called:', { language, categoryKey, wordIndex });
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        const word = activeChild.categories[language][categoryKey].words[wordIndex];

        if (!word.speaking) {
            // Turning speaking ON
            word.speaking = true;
            word.understanding = true;
            // Set default age to current calculated age
            if (activeChild.birthDate) {
                const ageInMonths = this.calculateAgeInMonths(activeChild.birthDate);
                console.log('🔍 Setting firstSpokenAge for word:', word.word, 'to age:', ageInMonths, 'months');
                word.firstSpokenAge = ageInMonths;
            } else {
                // If no birth date set, use a default reasonable age and prompt user to set birth date
                word.firstSpokenAge = 12;
                console.log('🔍 No birth date, setting firstSpokenAge to default 12 months');
            }
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
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        const word = activeChild.categories[language][categoryKey].words[wordIndex];

        // Check if child has a birth date set
        if (!activeChild.birthDate) {
            alert(`Please set ${activeChild.name}'s birth date first in their profile settings to track word ages accurately.`);
            return;
        }

        const currentAge = this.calculateAgeInMonths(activeChild.birthDate);
        const languageName = language === 'english' ? 'English' : 'Portuguese';
        const wordText = word.word;

        console.log('Prompting for age:', { language, categoryKey, wordIndex, wordText, childName: activeChild.name, currentAge });

        // Use a simple prompt for now - can be enhanced with a custom modal later
        const ageInput = prompt(
            `At what age (in months) did ${activeChild.name} first say "${wordText}" in ${languageName}?\n\nCurrent age: ${currentAge} months\nLeave empty to use current age (${currentAge}):`,
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
            alert(`Age cannot be more than ${activeChild.name}'s current age (${currentAge} months)`);
            return;
        }

        // Set the age and call the callback
        word.firstSpokenAge = age;
        console.log('✅ Set first spoken age for word:', word.word, 'Age:', age, 'Child:', activeChild.name);
        onConfirm();
    }

    // Update individual word display without re-rendering entire categories
    updateWordDisplay(language, categoryKey, wordIndex) {
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        const word = activeChild.categories[language][categoryKey].words[wordIndex];
        const wordElement = document.querySelector(`[data-language="${language}"][data-category="${categoryKey}"][data-word-id="${wordIndex}"]`);

        console.log('updateWordDisplay called:', { language, categoryKey, wordIndex, word, wordElement });

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
        const activeChild = this.getActiveChild();
        if (!activeChild) {
            // No active child, reset stats
            document.getElementById('total-speaking').textContent = 0;
            document.getElementById('total-understanding').textContent = 0;
            document.getElementById('english-percentage').textContent = '0 words (0%)';
            document.getElementById('portuguese-percentage').textContent = '0 words (0%)';
            document.getElementById('english-progress').style.width = '0%';
            document.getElementById('portuguese-progress').style.width = '0%';
            return;
        }

        let totalSpeaking = 0;
        let totalUnderstanding = 0;
        let englishSpeaking = 0;
        let portugueseSpeaking = 0;
        let englishUnderstanding = 0;
        let portugueseUnderstanding = 0;

        // Count English words
        if (activeChild.categories.english) {
            Object.values(activeChild.categories.english).forEach(category => {
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
        if (activeChild.categories.portuguese) {
            Object.values(activeChild.categories.portuguese).forEach(category => {
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
        const childName = document.getElementById('child-name').value.trim();
        const nameText = childName ? `${childName} is ` : 'Your baby is ';

        let message = '';

        if (age >= 12 && age < 18) {
            if (totalSpeaking >= 3) {
                message = `Fantastic! ${nameText}saying first words! 🌟`;
            } else {
                message = `${nameText.replace('is ', '')}first words are coming soon! Keep talking! 💬`;
            }
        } else if (age >= 18 && age < 24) {
            if (totalSpeaking >= 10) {
                message = `Amazing! ${nameText}developing an incredible vocabulary! 🚀`;
            } else {
                message = `Great progress! ${nameText}building up words! 📈`;
            }
        } else if (age >= 24 && age < 36) {
            if (totalSpeaking >= 50) {
                message = `Incredible! ${nameText}very expressive! 🎉`;
            } else {
                message = `Wonderful! ${nameText}showing great language growth! 💪`;
            }
        } else if (age >= 36) {
            if (totalSpeaking >= 100) {
                message = `Outstanding! ${nameText}a future linguist! 🌍`;
            } else {
                message = `Excellent! ${nameText}developing language beautifully! 📚`;
            }
        } else {
            message = `Every sound and babble from ${childName || 'your baby'} counts! 🤗`;
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

        const activeChild = this.getActiveChild();
        if (!activeChild) {
            this.renderEmptyChart(chartContainer);
            return;
        }

        // Collect all word data with ages for the active child
        const wordData = [];

        // Collect English words
        if (activeChild.categories.english) {
            Object.values(activeChild.categories.english).forEach(category => {
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
        if (activeChild.categories.portuguese) {
            Object.values(activeChild.categories.portuguese).forEach(category => {
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
        console.log('📊 Rendering cumulative bar chart with data:', wordData);

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

        console.log('📊 Age groups (individual):', ageGroups);

        // Create cumulative counts
        const ages = Object.keys(ageGroups).sort((a, b) => parseInt(a) - parseInt(b));
        const cumulativeData = {};
        let cumulativeEnglish = 0;
        let cumulativePortuguese = 0;

        ages.forEach(age => {
            cumulativeEnglish += ageGroups[age].english;
            cumulativePortuguese += ageGroups[age].portuguese;
            cumulativeData[age] = {
                english: cumulativeEnglish,
                portuguese: cumulativePortuguese,
                total: cumulativeEnglish + cumulativePortuguese
            };
        });

        console.log('📊 Cumulative data:', cumulativeData);

        const maxWords = Math.max(...ages.map(age => cumulativeData[age].total), 5);

        let html = '<div class="chart-content">';

        // Create bar chart
        html += '<div class="bar-chart" style="display: flex; align-items: end; height: 150px; padding: 10px; gap: 6px; background: #f8f9fa; border-radius: 8px; overflow-x: auto;">';

        ages.forEach(age => {
            const englishCount = cumulativeData[age].english;
            const portugueseCount = cumulativeData[age].portuguese;
            const total = cumulativeData[age].total;

            // Calculate heights as percentages of the bar area (stacked)
            const englishHeight = Math.max((englishCount / maxWords) * 100, englishCount > 0 ? 12 : 0);
            const portugueseHeight = Math.max((portugueseCount / maxWords) * 100, portugueseCount > 0 ? 12 : 0);

            html += `
                <div style="display: flex; flex-direction: column; align-items: center; min-width: 50px;">
                    <div style="display: flex; flex-direction: column; align-items: center; height: 120px; justify-content: end; width: 30px;">
                        <div style="width: 100%; height: ${Math.max((total / maxWords) * 100, total > 0 ? 12 : 0)}px; background: linear-gradient(to top, #f4a261 0%, #f4a261 ${(portugueseCount/total)*100}%, #6c9bd1 ${(portugueseCount/total)*100}%, #6c9bd1 100%); border-radius: 2px; min-height: ${total > 0 ? 12 : 0}px; position: relative;">
                            ${total > 0 ? `<div style="position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%); font-size: 8px; color: white; font-weight: bold; text-shadow: 1px 1px 1px rgba(0,0,0,0.5);">${total}</div>` : ''}
                        </div>
                    </div>
                    <div style="font-size: 11px; margin-top: 6px; color: #6c757d; font-weight: 600;">${age}m</div>
                    <div style="font-size: 9px; color: #6c757d;">🇬🇧${englishCount} 🇧🇷${portugueseCount}</div>
                </div>
            `;
        });

        html += '</div>';

        // Legend
        html += `
            <div style="display: flex; justify-content: center; gap: 16px; margin-top: 12px; font-size: 11px;">
                <div style="display: flex; align-items: center; gap: 4px;">
                    <div style="width: 12px; height: 12px; background: #6c9bd1; border-radius: 2px;"></div>
                    <span>English (Cumulative)</span>
                </div>
                <div style="display: flex; align-items: center; gap: 4px;">
                    <div style="width: 12px; height: 12px; background: #f4a261; border-radius: 2px;"></div>
                    <span>Portuguese (Cumulative)</span>
                </div>
            </div>
        `;

        html += '<div style="text-align: center; margin-top: 8px; font-size: 10px; color: #6c757d; font-style: italic;">Shows total words learned by each age</div>';

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
            const data = saved ? JSON.parse(saved) : { categories: {}, babyAge: 0 };

            // Migrate old single-child data to multi-child format
            if (!data.children) {
                data.children = {};

                // If there's existing data, create a default child
                if (data.categories && Object.keys(data.categories).length > 0) {
                    const defaultChildId = this.generateChildId();
                    data.children[defaultChildId] = {
                        id: defaultChildId,
                        name: data.childName || data.kidName || 'My Child',
                        birthDate: data.birthDate || null,
                        selectedLanguages: data.selectedLanguages || ['english', 'portuguese'],
                        categories: data.categories
                    };
                    data.activeChildId = defaultChildId;
                }
            }

            return data;
        } catch (error) {
            console.error('Error loading data:', error);
            return { categories: {}, babyAge: 0, children: {} };
        }
    }

    saveData() {
        try {
            localStorage.setItem('babyWordsData', JSON.stringify(this.data));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    generateChildId() {
        return 'child_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    initializeChildren() {
        // If no children exist, create a default one
        if (!this.data.children || Object.keys(this.data.children).length === 0) {
            this.createNewChild('My Child', null, ['english', 'portuguese'], true);
        }

        // If no active child, set the first one as active
        if (!this.activeChildId && Object.keys(this.data.children).length > 0) {
            this.activeChildId = Object.keys(this.data.children)[0];
            this.data.activeChildId = this.activeChildId;
        }
    }

    createNewChild(name = 'New Child', birthDate = null, languages = ['english', 'portuguese'], setAsActive = false) {
        const childId = this.generateChildId();
        const child = {
            id: childId,
            name: name,
            birthDate: birthDate,
            selectedLanguages: languages,
            categories: this.getDefaultWordData()
        };

        this.data.children[childId] = child;

        if (setAsActive) {
            this.activeChildId = childId;
            this.data.activeChildId = childId;
        }

        this.saveData();
        return childId;
    }

    getActiveChild() {
        return this.data.children[this.activeChildId] || null;
    }

    switchToChild(childId) {
        if (this.data.children[childId]) {
            this.activeChildId = childId;
            this.data.activeChildId = childId;
            this.saveData();

            // Update UI
            this.renderChildProfiles();
            this.initializeChildProfile();
            this.renderCategories();
            this.updateStatistics();
            this.checkMilestones();
            this.generateTimelineChart();
        }
    }

    editChild(childId) {
        // Switch to the child first
        this.switchToChild(childId);

        // Show the edit section
        const editSection = document.getElementById('child-edit-section');
        const editTitle = document.getElementById('child-edit-title');

        if (editSection && editTitle) {
            const child = this.getActiveChild();
            editTitle.textContent = `Edit ${child?.name || 'Child'} Profile`;
            editSection.style.display = 'block';

            // Re-initialize the form with current child data
            this.initializeChildProfile();

            // Add click-outside-to-close functionality
            this.addChildEditClickOutside();

            // Focus on the name input
            setTimeout(() => {
                const nameInput = document.getElementById('child-name');
                if (nameInput) {
                    nameInput.focus();
                    nameInput.select();
                }
            }, 100);
        }
    }

    closeChildEdit() {
        const editSection = document.getElementById('child-edit-section');
        if (editSection) {
            editSection.style.display = 'none';
            // Remove click-outside event listener
            this.removeChildEditClickOutside();
        }
    }

    addChildEditClickOutside() {
        // Remove any existing listener first
        this.removeChildEditClickOutside();

        this.childEditClickOutsideHandler = (event) => {
            const editSection = document.getElementById('child-edit-section');
            const editContent = editSection?.querySelector('.child-edit-content');

            if (editSection && editSection.style.display === 'block') {
                // Check if click is outside the edit content area
                if (editContent && !editContent.contains(event.target)) {
                    this.closeChildEdit();
                }
            }
        };

        document.addEventListener('click', this.childEditClickOutsideHandler);
    }

    removeChildEditClickOutside() {
        if (this.childEditClickOutsideHandler) {
            document.removeEventListener('click', this.childEditClickOutsideHandler);
            this.childEditClickOutsideHandler = null;
        }
    }

    confirmDeleteWord(language, categoryKey, wordIndex, wordText) {
        if (confirm(`Are you sure you want to delete the word "${wordText}"?`)) {
            this.deleteWord(language, categoryKey, wordIndex);
        }
    }

    deleteWord(language, categoryKey, wordIndex) {
        const activeChild = this.getActiveChild();
        if (!activeChild) return;

        const category = activeChild.categories[language][categoryKey];
        if (!category || !category.words || wordIndex < 0 || wordIndex >= category.words.length) {
            console.error('Invalid word deletion parameters:', { language, categoryKey, wordIndex });
            return;
        }

        // Remove the word from the array
        category.words.splice(wordIndex, 1);

        // Save data and update display
        this.saveData();
        this.renderWords();
        this.updateStatistics();
        this.generateTimelineChart();
    }

    confirmDeleteChild(childId) {
        if (Object.keys(this.data.children).length <= 1) {
            alert('Cannot delete the last child. At least one child profile is required.');
            return;
        }

        const child = this.data.children[childId];
        const childName = child ? child.name : 'this child';

        const confirmed = confirm(
            `Are you sure you want to delete ${childName}'s profile?\n\n` +
            'This will permanently remove:\n' +
            '• All word progress and tracking data\n' +
            '• Personal information (name, birth date, languages)\n' +
            '• Timeline and milestone records\n\n' +
            'This action cannot be undone.'
        );

        if (confirmed) {
            this.deleteChild(childId);
        }
    }

    deleteChild(childId) {
        delete this.data.children[childId];

        // If deleted child was active, switch to another child
        if (this.activeChildId === childId) {
            const remainingChildIds = Object.keys(this.data.children);
            this.activeChildId = remainingChildIds[0];
            this.data.activeChildId = this.activeChildId;
        }

        this.saveData();

        // Update UI
        this.renderChildProfiles();
        this.initializeChildProfile();
        this.renderCategories();
        this.updateStatistics();
        this.checkMilestones();
        this.generateTimelineChart();

        // Show success message
        this.showToast('Child profile deleted successfully');
    }

    renderChildProfiles() {
        const container = document.getElementById('child-profiles-section');

        // Clear container but keep the add child section
        const addChildSection = container.querySelector('.add-child-section');
        container.innerHTML = '';

        Object.values(this.data.children).forEach(child => {
            const profileWrapper = this.createChildProfileWrapper(child);
            container.appendChild(profileWrapper);
        });

        // Re-add the add child section at the end
        if (addChildSection) {
            container.appendChild(addChildSection);
        }
    }

    createChildProfileWrapper(child) {
        const wrapper = document.createElement('div');
        wrapper.className = 'child-profile-wrapper';

        const card = this.createChildProfileCard(child);
        const actions = this.createChildActions(child);

        wrapper.appendChild(card);
        wrapper.appendChild(actions);

        return wrapper;
    }

    createChildProfileCard(child) {
        const card = document.createElement('div');
        card.className = `child-profile-card ${child.id === this.activeChildId ? 'active' : ''}`;
        card.onclick = () => this.switchToChild(child.id);

        // Create a shortened name for the circle (first name only or initials)
        const displayName = this.getDisplayName(child.name);

        card.innerHTML = `
            <div class="child-profile-info">
                <div class="child-profile-name">${displayName}</div>
            </div>
        `;

        return card;
    }

    createChildActions(child) {
        const actions = document.createElement('div');
        actions.className = 'child-actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'child-action-btn edit';
        editBtn.innerHTML = '✏️';
        editBtn.title = 'Edit child profile';
        editBtn.onclick = (e) => {
            e.stopPropagation();
            this.editChild(child.id);
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'child-action-btn delete';
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.title = 'Delete child profile';
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            this.confirmDeleteChild(child.id);
        };

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        return actions;
    }

    getDisplayName(fullName) {
        if (!fullName || fullName.trim().length === 0) return '?';

        const name = fullName.trim();

        // If name is short (8 chars or less), use it as is
        if (name.length <= 8) {
            return name;
        }

        // Split by spaces and use first name
        const parts = name.split(' ');
        const firstName = parts[0];

        // If first name is still too long, use initials
        if (firstName.length > 8) {
            return parts.map(part => part.charAt(0).toUpperCase()).join('');
        }

        return firstName;
    }

    calculateChildAge(birthDate) {
        if (!birthDate) return 'Unknown age';

        const birth = new Date(birthDate);
        const today = new Date();

        let months = (today.getFullYear() - birth.getFullYear()) * 12;
        months -= birth.getMonth();
        months += today.getMonth();

        if (today.getDate() < birth.getDate()) {
            months--;
        }

        months = Math.max(0, months);

        if (months < 12) {
            return `${months} month${months !== 1 ? 's' : ''}`;
        } else {
            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;
            if (remainingMonths === 0) {
                return `${years} year${years !== 1 ? 's' : ''}`;
            } else {
                return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
            }
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