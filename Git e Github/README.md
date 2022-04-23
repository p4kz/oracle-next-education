
### Comands list 
https://devhints.io/git-log

### log de commits
git log                         = mostra historico de commits 
git log --oneline               = mostra historico de commits em uma linha
git log -p                      = mostra historico de commits e alterações
git log --author="nome"         = mostra historico de commits de um autor expecifico 
git log --pretty="format:%h %s" = mostra hash do commit e a mensagem 

### Simular branch
git branch titulo                = cria branch 
git checkout titulo              = entra na branch
git merge titulo                 = unifica a branch - junção de 2 branch
git rebase titulo                = atualiza a branch master - com os commits das branch secundaria 
https://git-school.github.io/visualizing-git/

### ctrl-z
git reset HEAD nomedoarquivo     = remove do git add
git revert HashDocommit          = desfaz o commit

### stash

git stash                          = salva os dados para ser alterado depois

