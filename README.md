# Site Ponto da Esfiha Centro 🌯

Um site moderno e responsivo criado especialmente para a bio do Instagram do Ponto da Esfiha Centro, com animações suaves e design profissional.

## 🎨 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Modernas**: Efeitos visuais suaves e interativos
- **Performance Otimizada**: Carregamento rápido e animações fluidas
- **Cores Temáticas**: Paleta de cores quente (vermelho, laranja, amarelo) 
- **Efeitos Interativos**: Hover effects, loading animations, ripple effects
- **Partículas Flutuantes**: Elementos visuais decorativos
- **Ícones FontAwesome**: Interface moderna e intuitiva

## 📁 Estrutura dos Arquivos

```
/workspace/
├── index.html          # Página principal
├── styles.css          # Estilos e animações
├── script.js           # Funcionalidades JavaScript
└── README.md          # Documentação
```

## 🔗 Links para Personalizar

Você precisa substituir os links marcados com `href="#"` pelos seus links reais:

### 1. **Navegação (Linha 30-34 do index.html)**
```html
<a href="#" class="nav-btn active">Início</a>
<a href="SEU_LINK_CARDAPIO" class="nav-btn">Cardápio</a>
<a href="SEU_LINK_CONTATO" class="nav-btn">Contato</a>
```

### 2. **Botões "Pedir agora" (Linhas 49, 61, 73)**
```html
<button class="order-btn pulse">Pedir agora</button>
```
**Substitua por:**
```html
<a href="SEU_LINK_PEDIDO_CARNE" class="order-btn pulse">Pedir agora</a>
```

### 3. **Botões de Contato (Linhas 89-96)**
```html
<a href="SEU_LINK_WHATSAPP" class="contact-btn whatsapp-btn bounce">
<a href="SEU_LINK_DELIVERY" class="contact-btn delivery-btn bounce">
```

### 4. **Redes Sociais (Linhas 135-142)**
```html
<a href="SEU_LINK_INSTAGRAM" class="location-link">
<a href="SEU_LINK_FACEBOOK" class="location-link">
```

### 5. **Footer Links (Linhas 153-157)**
```html
<a href="SEU_LINK_INSTAGRAM" class="footer-link">Instagram</a>
<a href="SEU_LINK_FACEBOOK" class="footer-link">Facebook</a>
<a href="SEU_LINK_WHATSAPP" class="footer-link">WhatsApp</a>
```

## 🖼️ Personalizando Imagens

### Logo (Linhas 18 e 148)
Substitua `logo-placeholder.png` pelo arquivo da sua logo:
```html
<img src="sua-logo.png" alt="Ponto da Esfiha" class="logo">
```

### Ícones dos Sabores
Os ícones atuais são do FontAwesome. Se quiser usar imagens:
```html
<!-- Ao invés de -->
<div class="placeholder-image">
    <i class="fas fa-utensils"></i>
</div>

<!-- Use -->
<div class="placeholder-image">
    <img src="carne.jpg" alt="Esfiha de Carne" style="width: 80px; height: 80px; border-radius: 50%;">
</div>
```

## 🎯 Exemplos de Links Reais

### WhatsApp
```html
<a href="https://wa.me/5574999999999?text=Olá! Gostaria de fazer um pedido" class="contact-btn whatsapp-btn bounce">
```

### Instagram
```html
<a href="https://instagram.com/pontodaesfihacentro" class="location-link">
```

### iFood/Delivery
```html
<a href="https://www.ifood.com.br/delivery/irece-ba/ponto-da-esfiha-centro" class="contact-btn delivery-btn bounce">
```

## 🚀 Como Usar

1. **Hospedagem**: Faça upload dos arquivos para qualquer serviço de hospedagem (GitHub Pages, Netlify, Vercel, etc.)

2. **Domínio**: Use um encurtador de links (bit.ly, tinyurl) se necessário

3. **Bio do Instagram**: Adicione o link na bio do Instagram

4. **Teste**: Verifique se todos os links funcionam corretamente

## 📱 Recursos Mobile

- Layout responsivo otimizado para celular
- Botões com tamanho adequado para touch
- Navegação simplificada
- Carregamento rápido

## 🎨 Personalização Avançada

### Alterar Cores
No arquivo `styles.css`, modifique as variáveis CSS (linha 7-16):
```css
:root {
    --primary-red: #d32f2f;      /* Cor principal vermelha */
    --primary-orange: #ff9800;    /* Cor laranja */
    --secondary-yellow: #ffc107;  /* Cor amarela */
    /* ... */
}
```

### Adicionar Mais Sabores
Copie um dos blocos `.menu-item` e modifique:
```html
<div class="menu-item">
    <div class="menu-card">
        <div class="placeholder-image">
            <i class="fas fa-leaf"></i> <!-- Ícone para vegetariano -->
        </div>
        <h3>Vegetariana</h3>
        <p class="price">R$ 5,50</p>
        <button class="order-btn pulse">Pedir agora</button>
    </div>
</div>
```

## ⚡ Performance

- **Animações CSS**: Utiliza GPU para animações suaves
- **Lazy Loading**: Elementos animam apenas quando visíveis
- **Compressão**: Código otimizado para carregamento rápido
- **CDN**: FontAwesome e Google Fonts via CDN

## 🛠️ Suporte

O site é compatível com:
- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS Safari, Chrome Mobile
- ✅ Todos os tamanhos de tela
- ✅ Conexões lentas

---

**Desenvolvido com ❤️ para o Ponto da Esfiha Centro**

Lembre-se de testar todos os links antes de publicar!