// Intersection Observer para animações quando elementos entram na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    // Elementos para observar
    const elementsToAnimate = document.querySelectorAll(
        '.menu-card, .delivery-card, .contact-btn, .hours-card, .location-card'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Adicionar classes de animação CSS
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Efeito de hover nos cards do menu
    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animação de loading para os botões
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Salvar texto original
            const originalText = btn.textContent;
            
            // Adicionar animação de loading
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
            btn.disabled = true;
            
            // Simular processamento
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
                btn.style.background = 'linear-gradient(135deg, #4caf50, #66bb6a)';
                
                // Voltar ao estado original após 2 segundos
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                }, 2000);
            }, 1500);
        });
    });

    // Efeito de partículas flutuantes
    createFloatingParticles();

    // Navegação suave
    setupSmoothNavigation();

    // Contador animado para o preço
    animateNumbers();

    // Efeito de typing para o texto de qualidade
    typeWriterEffect();
});

// Função para criar partículas flutuantes
function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);

    // Criar partículas
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 152, 0, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
        `;
        particlesContainer.appendChild(particle);
    }

    // Adicionar keyframes para as partículas
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(particleStyle);
}

// Navegação suave
function setupSmoothNavigation() {
    const navLinks = document.querySelectorAll('.nav-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remover classe active de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adicionar classe active ao link clicado
            link.classList.add('active');
            
            // Efeito de feedback visual
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
        });
    });
}

// Animação de números (preços)
function animateNumbers() {
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        const finalValue = parseFloat(price.textContent.replace('R$ ', '').replace(',', '.'));
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const animate = () => {
            currentValue += increment;
            if (currentValue < finalValue) {
                price.textContent = `R$ ${currentValue.toFixed(2).replace('.', ',')}`;
                requestAnimationFrame(animate);
            } else {
                price.textContent = `R$ ${finalValue.toFixed(2).replace('.', ',')}`;
            }
        };
        
        // Iniciar animação quando o elemento estiver visível
        const priceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate();
                    priceObserver.unobserve(entry.target);
                }
            });
        });
        
        priceObserver.observe(price);
    });
}

// Efeito de typing para texto
function typeWriterEffect() {
    const qualityText = document.querySelector('.quality-text p');
    if (qualityText) {
        const text = qualityText.textContent;
        qualityText.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            qualityText.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(typeInterval);
            }
        }, 50);
    }
}

// Efeito de paralaxe no scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Efeito de hover nos botões de contato
document.addEventListener('DOMContentLoaded', () => {
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Adicionar efeito de ripple aos botões
function addRippleEffect() {
    const buttons = document.querySelectorAll('.order-btn, .contact-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Adicionar keyframes para o ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// Inicializar efeito de ripple quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', addRippleEffect);

// Função para simular carregamento de imagens
function simulateImageLoading() {
    const placeholders = document.querySelectorAll('.placeholder-image');
    
    placeholders.forEach((placeholder, index) => {
        setTimeout(() => {
            placeholder.style.background = `linear-gradient(135deg, 
                hsl(${index * 60}, 70%, 60%), 
                hsl(${index * 60 + 30}, 70%, 70%))`;
            placeholder.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                placeholder.style.transform = 'scale(1)';
            }, 300);
        }, index * 200);
    });
}

// Chamar simulação de carregamento após DOM carregar
document.addEventListener('DOMContentLoaded', simulateImageLoading);

// Easter egg: Sequência de cliques no logo
let logoClickCount = 0;
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo-circle');
    if (logo) {
        logo.addEventListener('click', () => {
            logoClickCount++;
            if (logoClickCount === 5) {
                logo.style.animation = 'spin 2s linear infinite';
                setTimeout(() => {
                    logo.style.animation = '';
                    logoClickCount = 0;
                }, 2000);
            }
        });
    }
    
    // Adicionar keyframes para o spin
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
});