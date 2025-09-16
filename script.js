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

        this.initializeWordData();
        this.bindEventListeners();
        this.renderCategories();
        this.updateStatistics();
        this.checkMilestones();

        console.log('✅ BabyWordsTracker construction complete');
    }

    // Research-based top 100+ words babies typically learn before age 3
    // Based on developmental research from Stanford Children's Health, NIDCD, and Brazilian Portuguese studies
    getDefaultWordData() {
        return {
            english: {
                people: {
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
                        { word: 'papa', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                food: {
                    title: 'Food',
                    language: 'english',
                    words: [
                        { word: 'milk', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'water', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'banana', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'apple', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'biscuit', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bread', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'juice', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'yoghurt', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cheese', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'finished', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                actions: {
                    title: 'Actions',
                    language: 'english',
                    words: [
                        { word: 'go', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'come', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'stop', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sit', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'walk', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'run', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'play', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sleep', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'eat', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'drink', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                body: {
                    title: 'Body',
                    language: 'english',
                    words: [
                        { word: 'head', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'hair', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'eyes', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'nose', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'mouth', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'ears', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'hands', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'feet', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'tummy', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'teeth', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                toys: {
                    title: 'Toys & Things',
                    language: 'english',
                    words: [
                        { word: 'ball', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'book', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'car', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cup', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'shoes', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'hat', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bottle', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'spoon', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'nappy', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'teddy', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                colours: {
                    title: 'Colours & Words',
                    language: 'english',
                    words: [
                        { word: 'red', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'blue', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'yellow', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'green', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'big', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'little', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'hot', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cold', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'yes', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'no', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                animals: {
                    title: 'Animals',
                    language: 'english',
                    words: [
                        { word: 'dog', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cat', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cow', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'duck', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'fish', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bird', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'horse', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pig', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'chicken', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bunny', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                manners: {
                    title: 'Manners',
                    language: 'english',
                    words: [
                        { word: 'please', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'thank you', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sorry', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'hello', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bye-bye', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'night-night', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'lovely', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'good', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                places: {
                    title: 'Places',
                    language: 'english',
                    words: [
                        { word: 'home', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'outside', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'upstairs', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'downstairs', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'garden', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'park', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bed', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bath', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                }
            },
            portuguese: {
                people: {
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
                        { word: 'tio', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                food: {
                    title: 'Comida',
                    language: 'portuguese',
                    words: [
                        { word: 'leite', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'água', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'banana', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'maçã', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'biscoito', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pão', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'suco', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'iogurte', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'queijo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'acabou', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                actions: {
                    title: 'Ações',
                    language: 'portuguese',
                    words: [
                        { word: 'vai', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'vem', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'para', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'senta', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'anda', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'corre', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'brinca', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'dorme', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'comer', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'beber', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                body: {
                    title: 'Corpo',
                    language: 'portuguese',
                    words: [
                        { word: 'cabeça', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cabelo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'olhos', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'nariz', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'boca', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'orelhas', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'mãos', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pés', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'barriga', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'dentes', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                toys: {
                    title: 'Brinquedos',
                    language: 'portuguese',
                    words: [
                        { word: 'bola', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'livro', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'carro', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'copo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sapatos', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'chapéu', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'mamadeira', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'colher', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'fralda', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'ursinho', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                colours: {
                    title: 'Cores & Palavras',
                    language: 'portuguese',
                    words: [
                        { word: 'vermelho', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'azul', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'amarelo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'verde', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'grande', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pequeno', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'quente', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'frio', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'sim', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'não', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                animals: {
                    title: 'Animais',
                    language: 'portuguese',
                    words: [
                        { word: 'cachorro', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'gato', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'vaca', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pato', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'peixe', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'passarinho', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cavalo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'porco', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'galinha', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'coelho', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                manners: {
                    title: 'Educação',
                    language: 'portuguese',
                    words: [
                        { word: 'por favor', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'obrigado', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'desculpa', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'olá', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'tchau', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'boa noite', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bonito', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bom', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                },
                places: {
                    title: 'Lugares',
                    language: 'portuguese',
                    words: [
                        { word: 'casa', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'fora', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'em cima', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'embaixo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'jardim', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'parque', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cama', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'banho', understanding: false, speaking: false, firstSpokenAge: null }
                    ]
                }
            }
        };
    }


    initializeWordData() {
        console.log('🔧 Initializing word data...');
        console.log('📋 Current categories:', this.data.categories);

        // Check if we have the new separated structure
        const hasNewStructure = this.data.categories &&
                               this.data.categories.english &&
                               this.data.categories.portuguese &&
                               Object.keys(this.data.categories.english).length > 0;

        if (!hasNewStructure) {
            console.log('🔥 Creating new separated English/Portuguese structure');
            this.data.categories = this.getDefaultWordData();
            this.saveData();
            console.log('✅ New structure created and saved');
        } else {
            console.log('✅ Using existing separated structure');
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

        container.appendChild(wordDisplay);
        container.appendChild(controls);

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
            // Turning speaking ON - ask for age
            this.promptForAge(language, categoryKey, wordIndex, () => {
                word.speaking = true;
                word.understanding = true;
                this.saveData();
                this.updateWordDisplay(language, categoryKey, wordIndex);
                this.updateStatistics();
                this.checkMilestones();
                this.generateTimelineChart();
            });
        } else {
            // Turning speaking OFF
            word.speaking = false;
            word.firstSpokenAge = null;
            this.saveData();
            this.updateWordDisplay(language, categoryKey, wordIndex);
            this.updateStatistics();
            this.checkMilestones();
            this.generateTimelineChart();
        }
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