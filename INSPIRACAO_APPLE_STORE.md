# Inspiração: Apple Store

Este documento destaca os elementos da Apple Store que foram implementados no aplicativo.

## Referência: Apple Store (apple.com/store)

### Elementos de Design Implementados

#### 1. Página Principal / Lista de Produtos
**Inspiração da Apple Store:**
- Design minimalista com fundo branco/cinza claro
- Cards de produtos com imagens grandes
- Categoria em texto pequeno acima do nome do produto
- Preço em destaque abaixo do nome
- Espaçamento generoso entre elementos
- Tipografia San Francisco (SF Pro Display)

**Implementado no App:**
- Tela de produtos (index.tsx) com FlatList
- ProductCard component com mesmo layout
- Cores: fundo #f5f5f7, textos #1d1d1f
- Sombras sutis nos cards

#### 2. Página de Detalhes do Produto
**Inspiração da Apple Store:**
- Imagem grande do produto no topo
- Categoria em vermelho/laranja em uppercase
- Nome do produto em fonte grande e bold
- Preço destacado
- Seção de descrição
- Lista de especificações com bullets
- Botão de compra proeminente em azul
- Navegação com setas de volta

**Implementado no App:**
- Tela product/[id].tsx com ScrollView
- Imagem 400px de altura
- Categoria em vermelho (#ff3b30)
- Título 28pt bold
- Lista de specs com bullets cinzas
- Botão "Add to Cart" azul (#007AFF)
- Feedback visual ao adicionar (mensagem verde)

#### 3. Carrinho de Compras
**Inspiração da Apple Store:**
- Lista limpa de itens
- Miniatura do produto à esquerda
- Controles de quantidade (+/-)
- Preço individual e subtotal
- Total em destaque
- Botão de checkout proeminente
- Estado vazio elegante

**Implementado no App:**
- Tela cart.tsx com FlatList
- CartItemComponent com layout similar
- Controles de quantidade com ícones +/-
- Badge no ícone da tab mostrando quantidade
- Cálculo de total em tempo real
- Botão "Check Out" em azul
- Ícone e mensagem para carrinho vazio

#### 4. Sistema de Navegação
**Inspiração da Apple Store:**
- Navegação por tabs na parte inferior (mobile)
- Ícones minimalistas line-based
- Indicadores de estado (badges)
- Cores: azul para ativo, cinza para inativo

**Implementado no App:**
- Tabs do Expo Router
- Ícones Lucide React Native
- Badge vermelho com contador
- Cores #007AFF (ativo) e #8e8e93 (inativo)

#### 5. Tipografia
**Inspiração da Apple Store:**
- Hierarquia clara de tamanhos
- Títulos: 34pt bold
- Subtítulos: 20-28pt semibold
- Corpo: 15-17pt regular
- Categorias: 12-14pt uppercase

**Implementado no App:**
- Mesmas proporções de tamanhos
- System font (SF Pro Display style no iOS)
- Pesos variados (400, 600, 700)

#### 6. Paleta de Cores
**Inspiração da Apple Store:**
- Fundo: Branco e cinza claro
- Textos primários: Cinza muito escuro (quase preto)
- Textos secundários: Cinza médio
- Destaque: Azul Apple
- Badges/Alertas: Vermelho Apple
- Sucesso: Verde Apple

**Implementado no App:**
- #f5f5f7 (fundo cinza claro)
- #1d1d1f (texto principal)
- #86868b (texto secundário)
- #007AFF (azul Apple)
- #ff3b30 (vermelho Apple)
- #34c759 (verde Apple)

#### 7. Interações e Feedback
**Inspiração da Apple Store:**
- Transições suaves
- Feedback visual ao tocar (opacity)
- Mensagens de confirmação
- Loading states
- Animações sutis

**Implementado no App:**
- activeOpacity={0.7} em TouchableOpacity
- Mensagem verde ao adicionar item
- Persistência com AsyncStorage
- Estados de erro tratados

#### 8. Produtos e Imagens
**Inspiração da Apple Store:**
- Fotos de produtos em alta qualidade
- Fundo neutro (cinza claro ou branco)
- Produtos centralizados
- Aspect ratio preservado
- Imagens do Pexels com produtos de tecnologia

**Implementado no App:**
- 8 produtos mockados
- Imagens do Pexels
- resizeMode="cover"
- Containers com background #f5f5f7

## Capturas de Tela de Referência

Para visualizar a Apple Store original que serviu de inspiração, visite:
- **Desktop**: https://www.apple.com/store
- **Mobile**: App da Apple Store (iOS/Android)

### Principais URLs de Referência:
1. Página principal da loja: apple.com/store
2. iPhone: apple.com/iphone
3. Mac: apple.com/mac
4. iPad: apple.com/ipad
5. Carrinho: apple.com/shop/bag

## Diferenças Intencionais

Por ser um projeto educacional, algumas simplificações foram feitas:
- Checkout não implementado (apenas alerta)
- Sem integração com pagamento
- Sem autenticação de usuário
- Dados mockados (sem backend)
- Persistência local apenas (AsyncStorage)
- Sem variações de produtos (cores, tamanhos)

## Conclusão

O aplicativo captura a essência do design da Apple Store:
- Minimalismo e elegância
- Foco no produto
- Hierarquia visual clara
- Experiência de usuário fluida
- Atenção aos detalhes
- Design responsivo e acessível
