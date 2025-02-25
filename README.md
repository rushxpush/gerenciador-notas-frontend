# Gerenciador de Notas - Frontend

[Tecnologias](#tecnologias) | [Funcionalidades](#funcionalidades) | [Descrição](#descrição) | [Instalação](#instalação) | [Avisos](#avisos) | [Imagens](#imagens) | [Suporte](#suporte) | [Todo](#todo) | [Lista de bugs](#lista-de-bugs) | [Bugs Resolvidos](#bugs-resolvidos)

## Tecnologias

<ul>
  <li>Vue</li>
  <li>Axios</li>
  <li>Pinia</li>
  <li>Vue Router</li>
</ul>

[Ir para o topo](#gerenciador-de-notas---frontend)

## Funcionalidades

<ul>
  <li>Cadastro de notas</li>
  <li>Visualização de notas criadas</li>
  <li>Logger de status de requisições</li>
  <li>Validador para criação de notas</li>
</ul>

[Ir para o topo](#gerenciador-de-notas---frontend)

## Descrição

Frontend do projeto Gerenciador de Notas. Descrição mais detalhada no repositório principal: [Gerenciador de Notas](https://github.com/rushxpush/gerenciador-notas)

[Ir para o topo](#gerenciador-de-notas---frontend)

## Instalação

1. Faça um clone do repositório central:

```bash
git clone git@github.com:rushxpush/gerenciador-notas.git
```

2. Entre na pasta criada do repositório central
```bash
cd gerenciador-notas
```

3. Clone os repositórios do frontend e do backend
```bash
git clone git@github.com:rushxpush/gerenciador-notas-frontend.git
git clone git@github.com:rushxpush/gerenciador-notas-backend.git
```

4. Monte a imagem e rode:
```bash
docker compose up --build
```

5. Acesse a página em [localhost:8085](http://localhost:8085)

[Ir para o topo](#gerenciador-de-notas---frontend)

## Avisos

Futuros avisos

[Ir para o topo](#gerenciador-de-notas---frontend)

## Imagens

![Alt text](Screenshot_1.png)

![Alt text](Screenshot_2.png)

[Ir para o topo](#gerenciador-de-notas---frontend)

## Suporte

Qualquer dúvida mande um email para [rafagarciadev@gmail.com](mailto:rafagarciadev@gmail.com)

[Ir para o topo](#gerenciador-de-notas---frontend)

## Todo 

- &check; Componente ui Input.vue
- &check; Componente ui Navbar.vue
- &check; View de Criação de Notas (HomeView.vue)
- &check; View de Visualização de Notas criadas (NotesListView.vue)
- &check; Componente de Criação de Notas (CreateNoteForm.vue)
- &check; Componente de Visualização de Notas (NotesList.vue)
- &check; Setup do router (router.ts)
- &check; API para interação com rota /notes (notesAPI.ts)
- &check; Notes Store para encapsulamento das funções de notesAPI (useNotes.ts)
- &check; Status Store para gerenciamento da exibição de status de requisições (useStatus.ts)
- &check; Teste unitário CreateNoteForm.spec.ts
- &check; Teste unitário NotesListView.spec.ts
- &check; Teste unitário Input.spec.ts
- &check; Teste unitário Navbar.spec.ts
- &check; Teste unitário noteStore.spec.ts 
- &check; Teste unitário statusStore.spec.ts 
- &#x2610; Teste unitário api/notesAPI.ts
- &#x2610; Media queries para tablet e mobile

[Ir para o topo](#gerenciador-de-notas---frontend)

## Lista de bugs

- &#x2610; Acessar qualquer link que não seja http://localhost:8085 na barra de navegação gera um erro de página não encontrada (falta configurar o servidor para dar suporte ao Vue Router)

[Ir para o topo](#gerenciador-de-notas---frontend)

## Bugs Resolvidos

[Ir para o topo](#gerenciador-de-notas---frontend)