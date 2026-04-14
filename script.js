/**
 * Advanced Portfolio Engine
 * Author: Wildan Soleh
 */

const PROJECTS = [
    { 
        title: 'FOR DISMUKAP Logo', 
        category: 'Design', 
        desc: 'Konsep logo diskusi mahasiswa dengan filosofi infinity.',
        tags: ['Illustrator', 'Branding'],
        image: 'https://via.placeholder.com/400x250'
    },
    { 
        title: 'BCA Mobile Audit', 
        category: 'Research', 
        desc: 'Analisis kognitif antarmuka menggunakan hukum Miller.',
        tags: ['UX Research', 'Audit'],
        image: 'https://via.placeholder.com/400x250'
    },
    { 
        title: 'Personal Portfolio', 
        category: 'Web', 
        desc: 'CV Digital responsif dengan integrasi GitHub Pages.',
        tags: ['HTML', 'Tailwind', 'JS'],
        image: 'https://via.placeholder.com/400x250'
    }
];

class PortfolioManager {
    constructor(items) {
        this.items = items;
        this.container = document.querySelector('#portfolio-grid');
        this.filterButtons = document.querySelectorAll('.filter-btn');
    }

    init() {
        this.render(this.items);
        this.setupFilters();
    }

    render(data) {
        if (!this.container) return;
        
        // Efek transisi halus saat ganti data
        this.container.style.opacity = '0';
        
        setTimeout(() => {
            this.container.innerHTML = data.map(item => this.createCard(item)).join('');
            this.container.style.opacity = '1';
        }, 200);
    }

    createCard(item) {
        return `
            <div class="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div class="relative overflow-hidden">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500">
                    <span class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">${item.category}</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">${item.title}</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-4">${item.desc}</p>
                    <div class="flex flex-wrap gap-2">
                        ${item.tags.map(tag => `<span class="text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md">#${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    setupFilters() {
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state button
                this.filterButtons.forEach(b => b.classList.remove('bg-indigo-600', 'text-white'));
                btn.classList.add('bg-indigo-600', 'text-white');

                const category = btn.dataset.category;
                const filtered = category === 'all' 
                    ? this.items 
                    : this.items.filter(item => item.category === category);
                
                this.render(filtered);
            });
        });
    }
}

// Jalankan saat halaman siap
document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioManager(PROJECTS);
    app.init();
});
