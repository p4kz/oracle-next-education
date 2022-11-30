# nome = 'Eric'
# idade = 24

# print ( nome, idade)

# ##template string
# print (f'meu nome é {nome} e tenho {idade} anos')

##function
# def saudacao(nome_da_pessoa):
#   nome = input('qual seu nome?')
#   print(f'Olá, {nome_da_pessoa}')
# saudacao(nome)

##conditional
# def verifica_idade(idade):
#   if idade >= 18:
#     print('tem permissão para dirigir')
# verifica_idade(idade)

#array
idades = [15, 16, 17, 18]

##loop
def verifica_se_pode_dirigir(idade):
  if idade >=18:
    print(f'{idade} anos de idade, tem permissão para dirigir')
  else: 
    print(f'{idade} anos de idade, não tem permissão para dirigir')

for idade in idades:
  verifica_se_pode_dirigir(idade)
  

 


