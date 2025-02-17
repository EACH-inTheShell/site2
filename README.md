# site2

Este é o [site](https://intheshell.page/) do Each in the Shell.

## Ambiente

Linux

## Requisitos

- make
- docker

## Adicionando membros

No arquivo `site\views\sobre\membros\index.pug` 

Use o trecho de código, que deve ser adicionado após a linha 7, como exemplo:

```
.member
				.image
					img(src='/images/members/suafoto.jpg')
				.text
					h5 SeuNome
					h6 NominhoHacker
					p membro do eits. frase top.
					.tags
						.tag topico1
						.tag topico2
					.links
						a.link(href='https://www.linkedin.com/in/seuUsuario' target='_blank') linkedin
						a.link(href='https://github.com/seuUsuario' target='_blank') github`
```

Lembre de colocar sua foto no `site\public\images\members\suaFoto.jpg`
