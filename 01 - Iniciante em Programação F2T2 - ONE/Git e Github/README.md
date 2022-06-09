
<h1>Git e Github</h1>

<a href="https://devhints.io/git-log">Git log cheatsheet</a><em> - Site com comandos do Gitbash.</em>
<br> 
<a href="https://git-school.github.io/visualizing-git/">Visualizing Git</a><em> - Site que simula o terminal do Gitbash, para praticar comandos e manipular branch de uma forma mais visual.</em> 

<h2>Comandos</h2>

<ul>
  <h3><strong>Comandos Básicos</strong></h3>
  <li>git clone (HTTPS link ou SSH link)<em style="color:#2b2a33;"> - Clona o repositório do git</em></li>

  <li>git add (Nome do arquivo)<em style="color:#2b2a33;"> - Seleciona o arquivo que você modificou quer enviar para GitHub.</em></li>

  
  <li>
    git commit -m "Detalhes"
  <em style="color:#2b2a33;"> - Entre string detalhes e informaçoes do que foi alterado</em></li>

  <li>
  git push -u (Nome da branch)
  <em style="color:#2b2a33;"> - Empurra as modificações para o repositório do GitHub</em></li>
</ul>


<ul> 
  <h3><strong>Hitórico de commits</strong></h3>
  <li>
  git log
  <em style="color:#2b2a33;"> - Mostra historico de commits </em></li>
  <li>
  git log --oneline 
  <em style="color:#2b2a33;"> - Mostra historico de commits em uma linha</em></li>
  <li>git log -p<em style="color:#2b2a33;"> - Mostra historico de commits e alterações</em></li>
  <li>git log --author="nome"<em style="color:#2b2a33;"> - Mostra historico de commits de um autor expecifico</em></li>
  <li>git log --pretty="format:%h %s"<em style="color:#2b2a33;"> - Mostra hash do commit e a mensagem</em></li>
</ul>

<ul>
  <h3><strong>Branch</strong></h3>
  <li>git branch (Nome da branch)<em style="color:#2b2a33;"> - Cria branch </em></li>
  <li>git checkout (Nome da branch)<em style="color:#2b2a33;"> - Entra na branch</em></li>
  <li>git merge (Nome da branch)<em style="color:#2b2a33;"> - Unifica duas branch</em></li>
  <li>git rebase (Nome da branch)<em style="color:#2b2a33;"> - Atualiza a branch master com os commits da branch secundaria</em></li>
</ul>

<ul>
  <h3><strong>Ctrl-Z</strong></h3>
  <li>git reset HEAD (Nome do arquivo)<em style="color:#2b2a33;"> - Remove do git add </em></li>
  <li>git revert (Hash do commit)<em style="color:#2b2a33;"> - Desfaz o commit</em></li>
  <li>git stash<em style="color:#2b2a33;"> - Salva os dados para ser alterado depois</em></li>
</ul>

<ul>
  <h3><strong>Diff</strong></h3>
  <li>git diff<em style="color:#2b2a33;"> - Mostra a diferença de um arquivo que não foi commitado ainda</em></li>
  <li>git diff (Hash do commit) ... (Hash do commit)<em style="color:#2b2a33;"> - Mostra a diferença entre dois commits</em></li>
</ul>

<ul>
  <h3><strong>Versão</strong></h3>
  <li>git tag -a v0.1.0 -m 'lançando a primeira versão (beta) da aplicação'<em style="color:#2b2a33;"> - Cria versão do app </em></li>
</ul>
