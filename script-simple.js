// Baby Words Tracker Application - Simple Single Child Version
console.log('🚀 Loading Baby Words Tracker - Simple Single Child Version');

class BabyWordsTracker {
    constructor() {
        console.log('🏗️ Constructing BabyWordsTracker');

        // Load data from localStorage
        this.data = this.loadData();

        // Basic tracking
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.currentCategory = null;
        this.expandedCategories = new Set();

        // Language selection state
        this.selectedLanguages = this.data.selectedLanguages || ['english', 'portuguese'];
        this.availableLanguages = {
            english: { name: 'English', flag: '🇬🇧', active: true },
            portuguese: { name: 'Portuguese', flag: '🇧🇷', active: true },
            german: { name: 'German', flag: '🇩🇪', active: false }
        };

        this.initializeProfile();
        this.initializeWordData();
        this.initializeLanguageSelection();
        this.bindEventListeners();

        console.log('✅ BabyWordsTracker construction complete');
    }

    loadData() {
        const defaultData = {
            name: '',
            babyAge: 12,
            selectedLanguages: ['english', 'portuguese'],
            categories: this.getDefaultWordData()
        };

        try {
            const savedData = localStorage.getItem('babyWordsData');
            if (savedData) {
                const parsed = JSON.parse(savedData);
                // Merge with defaults to ensure all properties exist
                return { ...defaultData, ...parsed };
            }
        } catch (e) {
            console.warn('Error loading data:', e);
        }

        return defaultData;
    }

    saveData() {
        try {
            localStorage.setItem('babyWordsData', JSON.stringify(this.data));
            console.log('💾 Data saved successfully');
        } catch (e) {
            console.error('Error saving data:', e);
        }
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
                    ]
                },
                animals: {
                    title: 'Animals',
                    language: 'english',
                    words: [
                        { word: 'dog', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cat', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bird', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'fish', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cow', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'horse', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pig', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'duck', understanding: false, speaking: false, firstSpokenAge: null },
                    ]
                },
                food: {
                    title: 'Food',
                    language: 'english',
                    words: [
                        { word: 'milk', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'water', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'apple', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'banana', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bread', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cookie', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cheese', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'yogurt', understanding: false, speaking: false, firstSpokenAge: null },
                    ]
                }
            },
            portuguese: {
                family: {
                    title: 'Família',
                    language: 'portuguese',
                    words: [
                        { word: 'mamã', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'papá', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bebé', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'irmão', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'irmã', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'avó', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'avô', understanding: false, speaking: false, firstSpokenAge: null },
                    ]
                },
                animals: {
                    title: 'Animais',
                    language: 'portuguese',
                    words: [
                        { word: 'cão', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'gato', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pássaro', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'peixe', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'vaca', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'cavalo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'porco', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pato', understanding: false, speaking: false, firstSpokenAge: null },
                    ]
                },
                food: {
                    title: 'Comida',
                    language: 'portuguese',
                    words: [
                        { word: 'leite', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'água', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'maçã', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'banana', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'pão', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bolacha', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'queijo', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'iogurte', understanding: false, speaking: false, firstSpokenAge: null },
                    ]
                }
            },
            german: {
                family: {
                    title: 'Familie',
                    language: 'german',
                    words: [
                        { word: 'mama', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'papa', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'baby', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'bruder', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'schwester', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'oma', understanding: false, speaking: false, firstSpokenAge: null },
                        { word: 'opa', understanding: false, speaking: false, firstSpokenAge: null },
                    ]
                }
            }
        };
    }

    initializeProfile() {
        const nameInput = document.getElementById('child-name');
        if (nameInput) {
            nameInput.value = this.data.name || '';
            nameInput.addEventListener('input', (e) => {
                this.data.name = e.target.value;
                this.saveData();
                this.updateProfileDisplay();
            });
        }
    }

    updateProfileDisplay() {
        const profileName = document.getElementById('current-profile-name');
        if (profileName) {
            profileName.textContent = this.data.name || 'My Child';
        }
    }

    initializeWordData() {
        // Ensure all selected languages have word data
        this.selectedLanguages.forEach(language => {
            if (!this.data.categories[language]) {
                const defaultData = this.getDefaultWordData();
                if (defaultData[language]) {
                    this.data.categories[language] = defaultData[language];
                }
            }
        });
    }

    initializeLanguageSelection() {
        this.renderLanguageSelection();
    }

    renderLanguageSelection() {
        const container = document.getElementById('language-toggles');
        if (!container) return;

        container.innerHTML = '';

        // Add available languages
        Object.keys(this.availableLanguages).forEach(langCode => {
            const language = this.availableLanguages[langCode];
            if (!language.active) return;

            const isSelected = this.selectedLanguages.includes(langCode);

            const toggle = document.createElement('div');
            toggle.className = `language-toggle ${isSelected ? 'active' : ''}`;
            toggle.dataset.language = langCode;

            toggle.innerHTML = `
                <div class="language-toggle-content">
                    <span class="language-flag">${language.flag}</span>
                    <span class="language-name">${language.name}</span>
                    <button class="remove-language" data-language="${langCode}" style="display: ${isSelected && Object.keys(this.availableLanguages).filter(l => this.availableLanguages[l].active).length > 1 ? 'block' : 'none'};">×</button>
                </div>
            `;

            // Add click handler
            toggle.addEventListener('click', (e) => {
                if (e.target.classList.contains('remove-language')) {
                    this.removeLanguage(langCode);
                } else {
                    this.toggleLanguage(langCode);
                }
            });

            container.appendChild(toggle);
        });
    }

    toggleLanguage(language) {
        const index = this.selectedLanguages.indexOf(language);

        if (index === -1) {
            // Add language
            this.selectedLanguages.push(language);
            // Add default word data if needed
            if (!this.data.categories[language]) {
                const defaultData = this.getDefaultWordData();
                if (defaultData[language]) {
                    this.data.categories[language] = defaultData[language];
                }
            }
        } else {
            // Remove language (but keep at least one)
            if (this.selectedLanguages.length > 1) {
                this.selectedLanguages.splice(index, 1);
                // Remove categories for this language
                delete this.data.categories[language];
            }
        }

        this.data.selectedLanguages = this.selectedLanguages;
        this.saveData();

        this.renderLanguageSelection();
        this.renderCategories();
        this.updateStatistics();
    }

    removeLanguage(language) {
        if (this.selectedLanguages.length > 1) {
            const index = this.selectedLanguages.indexOf(language);
            if (index !== -1) {
                this.selectedLanguages.splice(index, 1);
                delete this.data.categories[language];
            }
        }

        this.data.selectedLanguages = this.selectedLanguages;
        this.saveData();

        this.renderLanguageSelection();
        this.renderCategories();
        this.updateStatistics();
    }

    addCustomLanguage(name, flag) {
        const langCode = name.toLowerCase().replace(/\s+/g, '');

        // Add to available languages
        this.availableLanguages[langCode] = {
            name: name,
            flag: flag,
            active: true
        };

        // Add to selected languages
        this.selectedLanguages.push(langCode);

        // Create empty data structure
        this.data.categories[langCode] = {
            family: {
                title: 'Family',
                language: langCode,
                words: []
            }
        };

        this.data.selectedLanguages = this.selectedLanguages;
        this.saveData();

        this.renderLanguageSelection();
        this.renderCategories();
        this.updateStatistics();
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

        // Language modal functionality
        const languageModalOverlay = document.getElementById('language-modal-overlay');
        const languageModalClose = document.getElementById('language-modal-close');
        const languageModalCancel = document.getElementById('language-modal-cancel');
        const languageModalSave = document.getElementById('language-modal-save');
        const addLanguageBtn = document.getElementById('add-language-btn');

        if (addLanguageBtn) {
            addLanguageBtn.addEventListener('click', () => this.showLanguageModal());
        }

        if (languageModalOverlay) {
            languageModalOverlay.addEventListener('click', (e) => {
                if (e.target === languageModalOverlay) this.closeLanguageModal();
            });
        }
        if (languageModalClose) {
            languageModalClose.addEventListener('click', () => this.closeLanguageModal());
        }
        if (languageModalCancel) {
            languageModalCancel.addEventListener('click', () => this.closeLanguageModal());
        }
        if (languageModalSave) {
            languageModalSave.addEventListener('click', () => this.saveCustomLanguage());
        }

        // Language option buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('language-option')) {
                const name = e.target.dataset.name;
                const flag = e.target.dataset.flag;
                document.getElementById('new-language-name').value = name;
                document.getElementById('new-language-flag').value = flag;
            }
        });

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

                // Status filter
                if (this.currentFilter !== 'all') {
                    if (this.currentFilter === 'speaking') {
                        matchesFilter = word.speaking;
                    } else if (this.currentFilter === 'understanding') {
                        matchesFilter = word.understanding;
                    }
                }

                const shouldShow = matchesSearch && matchesFilter;
                wordContainer.style.display = shouldShow ? 'block' : 'none';

                if (shouldShow) {
                    hasVisibleWords = true;
                }
            });

            // Show/hide category based on whether it has visible words
            categoryCard.style.display = hasVisibleWords ? 'block' : 'none';
        });
    }

    renderCategories() {
        const container = document.getElementById('categories-container');
        container.innerHTML = '';

        // Only render categories for selected languages
        this.selectedLanguages.forEach(language => {
            if (this.data.categories[language]) {
                Object.keys(this.data.categories[language]).forEach(categoryKey => {
                    const category = this.data.categories[language][categoryKey];
                    const categoryCard = this.createCategoryCard(language, categoryKey, category);
                    container.appendChild(categoryCard);
                });
            }
        });
    }

    createCategoryCard(language, categoryKey, category) {
        const isExpanded = this.expandedCategories.has(`${language}-${categoryKey}`);

        const card = document.createElement('div');
        card.className = 'category-card';
        card.dataset.language = language;
        card.dataset.category = categoryKey;

        const languageInfo = this.availableLanguages[language];
        const flag = languageInfo ? languageInfo.flag : '🌐';

        card.innerHTML = `
            <div class="category-header" data-category="${categoryKey}" data-language="${language}">
                <div class="category-info">
                    <h3 class="category-title">${category.title}</h3>
                    <p class="category-subtitle">${flag} ${languageInfo ? languageInfo.name : language}</p>
                </div>
                <div class="category-controls">
                    <button class="add-word-btn" data-category="${categoryKey}" data-language="${language}">
                        <span class="icon">+</span>
                        <span class="text">Add Word</span>
                    </button>
                    <button class="toggle-category-btn ${isExpanded ? 'expanded' : ''}" data-category="${categoryKey}" data-language="${language}">
                        <span class="icon">${isExpanded ? '−' : '+'}</span>
                    </button>
                </div>
            </div>
            <div class="category-content ${isExpanded ? 'expanded' : ''}" data-category="${categoryKey}" data-language="${language}">
                <div class="words-grid">
                    ${category.words.map((word, index) => this.createWordItem(word, index, language, categoryKey)).join('')}
                </div>
            </div>
        `;

        // Add event listeners
        const header = card.querySelector('.category-header');
        const toggleBtn = card.querySelector('.toggle-category-btn');
        const addWordBtn = card.querySelector('.add-word-btn');

        header.addEventListener('click', (e) => {
            if (e.target.closest('.add-word-btn') || e.target.closest('.toggle-category-btn')) return;
            this.toggleCategory(language, categoryKey);
        });

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleCategory(language, categoryKey);
        });

        addWordBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showAddWordModal(language, categoryKey);
        });

        return card;
    }

    createWordItem(word, index, language, categoryKey) {
        const speakingClass = word.speaking ? 'speaking' : '';
        const understandingClass = word.understanding ? 'understanding' : '';

        return `
            <div class="word-item-container" data-word-id="${index}">
                <div class="word-item ${speakingClass} ${understandingClass}">
                    <div class="word-text">${word.word}</div>
                    <div class="word-controls">
                        <button class="word-toggle understanding ${word.understanding ? 'active' : ''}"
                                data-type="understanding"
                                data-word-index="${index}"
                                data-language="${language}"
                                data-category="${categoryKey}"
                                title="Understands">
                            👂
                        </button>
                        <button class="word-toggle speaking ${word.speaking ? 'active' : ''}"
                                data-type="speaking"
                                data-word-index="${index}"
                                data-language="${language}"
                                data-category="${categoryKey}"
                                title="Says">
                            💬
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    toggleCategory(language, categoryKey) {
        const categoryId = `${language}-${categoryKey}`;
        const isExpanded = this.expandedCategories.has(categoryId);

        if (isExpanded) {
            this.expandedCategories.delete(categoryId);
        } else {
            this.expandedCategories.add(categoryId);
        }

        // Re-render to update the display
        this.renderCategories();
        this.bindWordEventListeners();
    }

    bindWordEventListeners() {
        // Word toggle buttons
        document.querySelectorAll('.word-toggle').forEach(button => {
            button.addEventListener('click', (e) => this.toggleWordStatus(e));
        });
    }

    toggleWordStatus(event) {
        const button = event.target;
        const type = button.dataset.type;
        const wordIndex = parseInt(button.dataset.wordIndex);
        const language = button.dataset.language;
        const categoryKey = button.dataset.category;

        const word = this.data.categories[language][categoryKey].words[wordIndex];
        word[type] = !word[type];

        // Track first spoken age
        if (type === 'speaking' && word[type] && !word.firstSpokenAge) {
            word.firstSpokenAge = this.data.babyAge;
        }

        this.saveData();
        this.renderCategories();
        this.bindWordEventListeners();
        this.updateStatistics();
        this.checkMilestones();
    }

    updateStatistics() {
        let totalSpeaking = 0;
        let totalUnderstanding = 0;

        // Count words across all selected languages
        this.selectedLanguages.forEach(language => {
            if (this.data.categories[language]) {
                Object.values(this.data.categories[language]).forEach(category => {
                    category.words.forEach(word => {
                        if (word.speaking) totalSpeaking++;
                        if (word.understanding) totalUnderstanding++;
                    });
                });
            }
        });

        // Update display
        document.getElementById('total-speaking').textContent = totalSpeaking;
        document.getElementById('total-understanding').textContent = totalUnderstanding;

        // Update language breakdown
        this.updateLanguageBreakdown();
        this.updateTimeline();
    }

    updateLanguageBreakdown() {
        const container = document.getElementById('language-bars');
        container.innerHTML = '';

        this.selectedLanguages.forEach(language => {
            const languageInfo = this.availableLanguages[language];
            if (!languageInfo) return;

            let speaking = 0;
            let understanding = 0;

            if (this.data.categories[language]) {
                Object.values(this.data.categories[language]).forEach(category => {
                    category.words.forEach(word => {
                        if (word.speaking) speaking++;
                        if (word.understanding) understanding++;
                    });
                });
            }

            const bar = document.createElement('div');
            bar.className = 'language-bar';
            bar.innerHTML = `
                <div class="language-info">
                    <span class="language-flag">${languageInfo.flag}</span>
                    <span class="language-name">${languageInfo.name}</span>
                </div>
                <div class="language-stats">
                    <div class="stat">
                        <span class="stat-number">${speaking}</span>
                        <span class="stat-label">Speaking</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${understanding}</span>
                        <span class="stat-label">Understanding</span>
                    </div>
                </div>
            `;
            container.appendChild(bar);
        });
    }

    checkMilestones() {
        const age = this.data.babyAge;
        const speakingCount = parseInt(document.getElementById('total-speaking').textContent);
        const understandingCount = parseInt(document.getElementById('total-understanding').textContent);

        let message = '';
        let emoji = '🌟';

        if (age <= 12) {
            if (speakingCount >= 3) {
                message = `Amazing! Your little one is ahead of the curve! 🎉`;
                emoji = '🎉';
            } else if (speakingCount >= 1) {
                message = `Great start! First words are so exciting! ✨`;
                emoji = '✨';
            } else if (understandingCount >= 10) {
                message = `Wonderful understanding! Speaking will come soon! 👂`;
                emoji = '👂';
            } else {
                message = `Every baby develops at their own pace! 💝`;
                emoji = '💝';
            }
        } else if (age <= 18) {
            if (speakingCount >= 50) {
                message = `Incredible vocabulary explosion! 🚀`;
                emoji = '🚀';
            } else if (speakingCount >= 20) {
                message = `Fantastic progress! What a chatterbox! 💬`;
                emoji = '💬';
            } else if (speakingCount >= 10) {
                message = `Great vocabulary building! 📚`;
                emoji = '📚';
            } else {
                message = `Growing stronger every day! 🌱`;
                emoji = '🌱';
            }
        } else {
            if (speakingCount >= 100) {
                message = `Amazing little linguist! 🏆`;
                emoji = '🏆';
            } else if (speakingCount >= 50) {
                message = `Wonderful language development! 🌟`;
                emoji = '🌟';
            } else {
                message = `Every word is a victory! 👏`;
                emoji = '👏';
            }
        }

        const indicator = document.getElementById('milestone-indicator');
        if (indicator) {
            indicator.innerHTML = `<span class="milestone-text">${message} ${emoji}</span>`;
        }
    }

    showAddWordModal(language, categoryKey) {
        this.currentLanguage = language;
        this.currentCategory = categoryKey;

        const modal = document.getElementById('modal-overlay');
        const categorySelect = document.getElementById('custom-word-category');

        // Clear and populate category select
        categorySelect.innerHTML = '<option value="">Select category...</option>';

        this.selectedLanguages.forEach(lang => {
            if (this.data.categories[lang]) {
                Object.keys(this.data.categories[lang]).forEach(catKey => {
                    const category = this.data.categories[lang][catKey];
                    const langInfo = this.availableLanguages[lang];
                    const flag = langInfo ? langInfo.flag : '🌐';
                    const option = document.createElement('option');
                    option.value = `${lang}-${catKey}`;
                    option.textContent = `${flag} ${category.title}`;
                    if (lang === language && catKey === categoryKey) {
                        option.selected = true;
                    }
                    categorySelect.appendChild(option);
                });
            }
        });

        // Clear input
        document.getElementById('custom-word-en').value = '';

        modal.style.display = 'flex';
        modal.classList.add('active');
    }

    closeModal() {
        const modal = document.getElementById('modal-overlay');
        modal.style.display = 'none';
        modal.classList.remove('active');
    }

    saveCustomWord() {
        const wordInput = document.getElementById('custom-word-en');
        const categorySelect = document.getElementById('custom-word-category');

        const word = wordInput.value.trim();
        const categoryValue = categorySelect.value;

        if (!word || !categoryValue) {
            alert('Please enter a word and select a category');
            return;
        }

        const [language, categoryKey] = categoryValue.split('-');

        const newWord = {
            word: word,
            understanding: false,
            speaking: false,
            firstSpokenAge: null
        };

        this.data.categories[language][categoryKey].words.push(newWord);
        this.saveData();
        this.renderCategories();
        this.bindWordEventListeners();
        this.closeModal();
    }

    showLanguageModal() {
        const modal = document.getElementById('language-modal-overlay');
        document.getElementById('new-language-name').value = '';
        document.getElementById('new-language-flag').value = '';
        modal.style.display = 'flex';
        modal.classList.add('active');
    }

    closeLanguageModal() {
        const modal = document.getElementById('language-modal-overlay');
        modal.style.display = 'none';
        modal.classList.remove('active');
    }

    saveCustomLanguage() {
        const nameInput = document.getElementById('new-language-name');
        const flagInput = document.getElementById('new-language-flag');

        const name = nameInput.value.trim();
        const flag = flagInput.value.trim();

        if (!name || !flag) {
            alert('Please enter both language name and flag');
            return;
        }

        this.addCustomLanguage(name, flag);
        this.closeLanguageModal();
    }

    exportData() {
        const exportData = {
            childName: this.data.name || 'My Child',
            age: this.data.babyAge || 0,
            exportDate: new Date().toLocaleDateString(),
            languages: this.selectedLanguages.map(lang => ({
                language: this.availableLanguages[lang]?.name || lang,
                flag: this.availableLanguages[lang]?.flag || '🌐',
                categories: this.data.categories[lang] ? Object.keys(this.data.categories[lang]).map(catKey => {
                    const category = this.data.categories[lang][catKey];
                    const speaking = category.words.filter(w => w.speaking).length;
                    const understanding = category.words.filter(w => w.understanding).length;
                    return {
                        name: category.title,
                        speaking,
                        understanding,
                        total: category.words.length,
                        words: category.words.map(w => ({
                            word: w.word,
                            speaking: w.speaking,
                            understanding: w.understanding,
                            firstSpokenAge: w.firstSpokenAge
                        }))
                    };
                }) : []
            })),
            summary: {
                totalSpeaking: parseInt(document.getElementById('total-speaking').textContent),
                totalUnderstanding: parseInt(document.getElementById('total-understanding').textContent)
            }
        };

        const jsonString = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${exportData.childName.replace(/\s+/g, '_')}_language_progress_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    initializeTimeline() {
        // Default to expanded
        const content = document.getElementById('timeline-content');
        const toggle = document.getElementById('timeline-toggle');
        const icon = toggle.querySelector('.timeline-toggle-icon');

        content.style.display = 'block';
        icon.textContent = '▲';

        this.updateTimeline();
    }

    toggleTimeline() {
        const content = document.getElementById('timeline-content');
        const toggle = document.getElementById('timeline-toggle');
        const icon = toggle.querySelector('.timeline-toggle-icon');

        if (content.style.display === 'none') {
            content.style.display = 'block';
            icon.textContent = '▲';
            this.updateTimeline();
        } else {
            content.style.display = 'none';
            icon.textContent = '▼';
        }
    }

    updateTimeline() {
        const chartContainer = document.getElementById('timeline-chart');
        if (!chartContainer || chartContainer.style.display === 'none') return;

        // Collect timeline data
        const timelineData = new Map();

        this.selectedLanguages.forEach(language => {
            if (this.data.categories[language]) {
                Object.values(this.data.categories[language]).forEach(category => {
                    category.words.forEach(word => {
                        if (word.firstSpokenAge !== null) {
                            const age = word.firstSpokenAge;
                            if (!timelineData.has(age)) {
                                timelineData.set(age, { speaking: 0, understanding: 0 });
                            }
                            timelineData.get(age).speaking++;
                        }
                        if (word.understanding) {
                            // Assume understanding comes before speaking
                            const age = word.firstSpokenAge !== null ? word.firstSpokenAge - 1 : this.data.babyAge;
                            if (age >= 0) {
                                if (!timelineData.has(age)) {
                                    timelineData.set(age, { speaking: 0, understanding: 0 });
                                }
                                timelineData.get(age).understanding++;
                            }
                        }
                    });
                });
            }
        });

        // Create cumulative data
        const maxAge = Math.max(this.data.babyAge, ...Array.from(timelineData.keys()), 24);
        const cumulativeData = [];
        let totalSpeaking = 0;
        let totalUnderstanding = 0;

        for (let age = 0; age <= maxAge; age++) {
            const ageData = timelineData.get(age) || { speaking: 0, understanding: 0 };
            totalSpeaking += ageData.speaking;
            totalUnderstanding += ageData.understanding;

            cumulativeData.push({
                age,
                speaking: totalSpeaking,
                understanding: totalUnderstanding,
                isCurrent: age === this.data.babyAge
            });
        }

        // Render chart
        this.renderTimelineChart(cumulativeData);
    }

    renderTimelineChart(data) {
        const chartContainer = document.getElementById('timeline-chart');
        chartContainer.innerHTML = '';

        if (data.length === 0) {
            chartContainer.innerHTML = '<p class="no-data">No timeline data available yet. Start tracking words to see progress!</p>';
            return;
        }

        const maxWords = Math.max(...data.map(d => Math.max(d.speaking, d.understanding)), 10);
        const chartHeight = 200;
        const chartWidth = chartContainer.offsetWidth - 40;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', chartWidth);
        svg.setAttribute('height', chartHeight + 40);
        svg.setAttribute('viewBox', `0 0 ${chartWidth} ${chartHeight + 40}`);

        // Create lines
        const speakingLine = data.map((d, i) => {
            const x = (i / (data.length - 1)) * (chartWidth - 40) + 20;
            const y = chartHeight - (d.speaking / maxWords) * (chartHeight - 20) + 10;
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');

        const understandingLine = data.map((d, i) => {
            const x = (i / (data.length - 1)) * (chartWidth - 40) + 20;
            const y = chartHeight - (d.understanding / maxWords) * (chartHeight - 20) + 10;
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');

        // Add paths
        const speakingPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        speakingPath.setAttribute('d', speakingLine);
        speakingPath.setAttribute('stroke', '#88c3a7');
        speakingPath.setAttribute('stroke-width', '3');
        speakingPath.setAttribute('fill', 'none');
        svg.appendChild(speakingPath);

        const understandingPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        understandingPath.setAttribute('d', understandingLine);
        understandingPath.setAttribute('stroke', '#9eb7dd');
        understandingPath.setAttribute('stroke-width', '2');
        understandingPath.setAttribute('stroke-dasharray', '5,5');
        understandingPath.setAttribute('fill', 'none');
        svg.appendChild(understandingPath);

        // Add current age marker
        const currentData = data.find(d => d.isCurrent);
        if (currentData) {
            const currentIndex = data.indexOf(currentData);
            const x = (currentIndex / (data.length - 1)) * (chartWidth - 40) + 20;

            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            marker.setAttribute('cx', x);
            marker.setAttribute('cy', chartHeight - (currentData.speaking / maxWords) * (chartHeight - 20) + 10);
            marker.setAttribute('r', '6');
            marker.setAttribute('fill', '#e7984d');
            marker.setAttribute('stroke', '#fff');
            marker.setAttribute('stroke-width', '2');
            svg.appendChild(marker);
        }

        chartContainer.appendChild(svg);

        // Update legend
        const legend = document.getElementById('timeline-legend');
        if (legend) {
            legend.innerHTML = `
                <div class="legend-item">
                    <div class="legend-color" style="background: #88c3a7;"></div>
                    <span>Speaking</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #9eb7dd; opacity: 0.7;"></div>
                    <span>Understanding</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #e7984d; border-radius: 50%;"></div>
                    <span>Current Age</span>
                </div>
            `;
        }
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    window.babyTracker = new BabyWordsTracker();

    // Make sure categories are rendered and event listeners are bound
    window.babyTracker.renderCategories();
    window.babyTracker.bindWordEventListeners();
    window.babyTracker.updateStatistics();
});

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

// Add viewport height fix for mobile browsers
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setViewportHeight);
setViewportHeight();