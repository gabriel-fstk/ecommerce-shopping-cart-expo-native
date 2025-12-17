# Apple Store Clone - E-commerce App

Este aplicativo de e-commerce foi desenvolvido usando Expo/React Native e inspirado na Apple Store.

## Funcionalidades Implementadas

### 1. Tela de Produtos
- Lista completa de produtos disponíveis na loja
- Exibição de nome, categoria, preço e imagem de cada produto
- Design em cards com sombras sutis
- Navegação por scroll vertical
- **Filtro por categoria** - Navegação horizontal com categorias
- **Botão de favoritar** - Diretamente no card do produto
- **Botão de adicionar ao carrinho** - Ação rápida sem entrar nos detalhes
- Feedback visual quando item é adicionado ao carrinho

### 2. Tela de Detalhes do Produto
- Visualização ampliada da imagem do produto
- Descrição detalhada do produto
- Lista de especificações técnicas
- Botão proeminente para adicionar ao carrinho
- Feedback visual quando o item é adicionado
- Navegação de volta para a lista

### 3. Tela de Favoritos (NOVA!)
- Lista de todos os produtos favoritados
- Badge com contador no ícone da tab
- Botões rápidos de adicionar ao carrinho e remover dos favoritos
- Estado vazio com mensagem quando não há favoritos
- Persistência local dos favoritos

### 4. Tela do Carrinho
- Lista de todos os itens adicionados
- Controle de quantidade (aumentar/diminuir)
- Remoção de itens
- Cálculo do valor total
- Contador de itens no badge do ícone da tab
- Estado vazio com mensagem quando não há itens

## Componentes Reutilizáveis

### ProductCard (Atualizado)
- Exibe informações resumidas do produto
- **Botão de favoritar integrado** no topo da imagem
- **Botão circular de adicionar ao carrinho** na parte inferior
- Feedback visual ao adicionar ao carrinho
- Estado visual diferente quando favoritado (coração vermelho preenchido)
- Responde a toques para navegação aos detalhes

### CartItemComponent
- Exibe item individual no carrinho
- Controles de quantidade integrados
- Botão de remoção
- Cálculo de subtotal por item

## Gerenciamento de Estado

### Context API (CartContext)
- Gerenciamento global do carrinho
- Funções para adicionar, remover e atualizar quantidade
- Cálculo de totais
- Persistência local usando AsyncStorage

### Context API (FavoritesContext) (NOVO!)
- Gerenciamento global dos favoritos
- Funções para adicionar e remover favoritos
- Verificação se produto está nos favoritos
- Contador de favoritos
- Persistência local usando AsyncStorage

## Persistência de Dados

- **AsyncStorage**: Todos os itens do carrinho são salvos localmente
- Os dados persistem mesmo após fechar o aplicativo
- Carregamento automático na inicialização

## Core Components Utilizados

- **FlatList**: Lista de produtos e itens do carrinho
- **Image**: Exibição de imagens dos produtos
- **Text**: Todos os textos do app
- **TouchableOpacity**: Botões e cards clicáveis
- **View**: Estruturação e layout
- **SafeAreaView**: Áreas seguras para diferentes dispositivos
- **ScrollView**: Scroll na tela de detalhes

## Inspiração: Apple Store

### Elementos de Design Implementados

1. **Paleta de Cores**
   - Fundo branco/cinza claro (#f5f5f7)
   - Textos em cinza escuro (#1d1d1f)
   - Azul característico da Apple (#007AFF)
   - Cinza para textos secundários (#86868b)

2. **Tipografia**
   - Títulos grandes e bold (34pt)
   - Hierarquia clara de tamanhos
   - Fonte system padrão (SF Pro Display style)

3. **Layout Minimalista**
   - Espaçamento generoso
   - Cards com bordas arredondadas (12px)
   - Sombras sutis para profundidade
   - Design clean e focado no conteúdo

4. **Botões**
   - Botões azuis com bordas arredondadas
   - Sombras coloridas para destaque
   - Estados de pressed sutis (opacity)

5. **Navegação**
   - Tabs na parte inferior
   - Ícones minimalistas
   - Badge vermelho para contador de itens
   - Transições suaves

6. **Imagens**
   - Imagens grandes e de alta qualidade
   - Fundo cinza claro para contraste
   - Aspect ratio preservado

7. **Categorias**
   - Texto pequeno em uppercase
   - Cor cinza clara
   - Espaçamento de letras aumentado

8. **Feedback Visual**
   - Mensagem verde quando item é adicionado
   - Estado vazio elegante no carrinho
   - Ícones line-based do Lucide

## Catálogo de Produtos

O app inclui 8 produtos inspirados em produtos reais da Apple:
- iPhone 15 Pro
- MacBook Pro 16"
- iPad Pro 12.9"
- AirPods Pro
- Apple Watch Series 9
- Mac Studio
- HomePod
- Magic Keyboard

Cada produto possui especificações detalhadas e imagens de alta qualidade.

## Tecnologias Utilizadas

- **Expo SDK**: Framework para desenvolvimento
- **Expo Router**: Navegação file-based
- **React Native**: Base do framework
- **TypeScript**: Tipagem estática
- **AsyncStorage**: Persistência local
- **Lucide React Native**: Ícones
- **Context API**: Gerenciamento de estado

## Estrutura do Projeto

```
project/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx          # Layout das tabs (com safe area)
│   │   ├── index.tsx             # Tela de produtos (com filtros)
│   │   ├── favorites.tsx         # Tela de favoritos (NOVA!)
│   │   ├── cart.tsx              # Tela do carrinho
│   │   └── product/
│   │       └── [id].tsx          # Tela de detalhes
│   └── _layout.tsx               # Layout raiz (com providers)
├── components/
│   ├── ProductCard.tsx           # Card do produto (com botões rápidos)
│   └── CartItemComponent.tsx     # Item do carrinho
├── contexts/
│   ├── CartContext.tsx           # Context do carrinho
│   └── FavoritesContext.tsx      # Context dos favoritos (NOVO!)
├── data/
│   └── products.ts               # Dados dos produtos
└── types/
    └── product.ts                # Tipos TypeScript
```

## Como Executar

1. Instalar dependências:
```bash
npm install
```

2. Iniciar o servidor de desenvolvimento:
```bash
npm run dev
```

3. Build para web:
```bash
npm run build:web
```

## Melhorias Implementadas

### 1. Menu Corrigido
- **Safe Area Insets**: O menu de navegação agora respeita a área segura do dispositivo
- Não sobrepõe mais o menu do sistema no Android
- Ajuste automático para iOS com notch

### 2. Botões Rápidos nos Cards
- **Favoritar**: Botão de coração no topo do card
  - Ícone branco em fundo vermelho quando favoritado
  - Ícone preto em fundo branco quando não favoritado
- **Adicionar ao Carrinho**: Botão circular azul na parte inferior
  - Feedback visual "Added" ao adicionar
  - Não precisa entrar nos detalhes do produto

### 3. Sistema de Favoritos
- Nova tab "Favorites" na navegação
- Badge com contador de favoritos
- Persistência local com AsyncStorage
- Mesmos botões rápidos na lista de favoritos

### 4. Filtros por Categoria
- Navegação horizontal com pills de categoria
- Categorias disponíveis: All, iPhone, Mac, iPad, AirPods, Apple Watch, Home, Accessories
- Feedback visual da categoria selecionada (azul)
- Filtragem em tempo real

## Requisitos Atendidos

- ✅ Componentização completa
- ✅ Uso de states para gerenciar interações
- ✅ Core components do React Native
- ✅ Inspiração em e-commerce real (Apple Store)
- ✅ **Quatro telas funcionais** (Produtos, Favoritos, Detalhes, Carrinho)
- ✅ Adicionar/remover itens do carrinho
- ✅ Gerenciamento de quantidade
- ✅ Cálculo de valores totais
- ✅ Persistência com localStorage (AsyncStorage)
- ✅ **Botões de ação rápida nos cards**
- ✅ **Sistema de favoritos completo**
- ✅ **Filtros por categoria**
- ✅ **Menu com safe area corrigido**
