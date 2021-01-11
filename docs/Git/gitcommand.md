
Git Command 預覽
https://medium.com/@brianwu291/basic-git-command-line-collections-2242c03c870e  
===
![](2020-05-13-12-27-01.png)
![](2020-05-13-12-38-13.png)
![](2020-05-13-13-15-15.png)

# https://gitbook.tw/chapters/using-git/amend-commit2.html

GIT COMMAND PREVIEW
![](2020-08-12-10-41-31.png)

# Demo1
Demo1 desc

># Create a new repository
>```diff
>echo "# Demo1.git"
>+ 初始化這個目錄，讓 Git 對這個目錄開始進行版控
>git init
>git add README.md
>git commit -m "first commit"  
>```
>## https://github.com/kentlin888/Demo1.git
>```diff
>+ 首先，需要設定一個端節的節點
>git remote add origin git@github.com:kentlin888/Demo1.git
>+ git remote 指令，顧名思義，主要是跟遠端有關的操作
>+ 在這裡的 origin 是一個「代名詞」，指的是後面那串 GitHub 伺服器的位置
>+ 如果想改叫七龍珠 dragonball
>git remote add dragonball git@github.com:kentlin888/Demo1.git
>+ 總之，origin 就是只是指向某個位置的代名詞罷了
>```

># push an existing repository
>```
>git remote add origin git@github.com:kentlin888/Demo1.git
>git push -u origin master
>```
<br>

## 在每一次的 Git commit (提交，我們稍後會提到) 都會記錄作者的訊息像是 name 及 email ，因此我們使用下面的指令來設定：
***
```css
$ git config --global user.name "Jimmy Kuo"
$ git config --global user.email "jimmy@gogojimmy.net"
```
查看 global config 設定  
`$ git config --list`

## alias 
***
`$ git config --global alias.st status`
`$ git st`

## Git 預設輸出是沒有顏色的，我們可以讓他在輸出時加上顏色讓我們更容易閱讀
`$ git config --global color.ui true`

這些指令的優點是你可以隨時使用它們，甚至是你沒有連上網路的時候。 若說明文件及這本書不足以幫助讀者，且讀者需要更進一步的協助，可試著進入 Freenode IRC 伺服器（irc.freenode.net）的 #git 或 #github 頻道。 這些頻道平時都有上百位對 Git 非常瞭解的高手，而且通常樂意協助。
`git help config`
```css
$ git help <verb>
$ git <verb> --help
$ man git-<verb>
```


https://git-scm.com/book/zh-tw/v2/Git-%E5%9F%BA%E7%A4%8E-%E5%8F%96%E5%BE%97%E4%B8%80%E5%80%8B-Git-%E5%80%89%E5%84%B2

```css
$ git add *.c
$ git add LICENSE
$ git commit -m 'initial project version'
```
![](2020-03-11-16-15-17.png)
![](2020-03-11-18-29-36.png)


檢視 Git 紀錄，使用的是 `git log` 指令
`git log --oneline --graph`
例如我只想找一位叫做 Sherly 的作者的 Commit：
```diff
$ git log --oneline --author="Sherly"
930feb3 add pig
51d54ff add lion and tiger
+ 同時可以再用 |（中文「或者」的意思） 來查詢
$ git log --oneline --author="Sherly\|Eddie"
```
使用 -S 參數，可以搜尋在所有 Commit 的檔案中，哪些符合特定條件的：  
檔案內容含有 'Ruby'  
`$ git log -S "Ruby"`

在查歷史資料的時候，可以搭配 --since 跟 --until 參數查詢：  
`$ git log --oneline --since="9am" --until="12am"`  
`$ git log --oneline --since="9am" --until="12am" --after="2017-01"`

加上 --cached 參數, 檔案恢復成 untracked..  
不受git追蹤
`$ git rm welcome.html --cached`

https://github.com/kentlin888/Demo1.git  


`git remote`
`git remote -v`
`git config --get remote.origin.url`
其實這個指令是把 .git/config 中的, remote section 的內容印出而己
```s
[remote “origin”]
    url = git@github.com:alanclyeh/alanclyeh.github.io.git
    fetch = +refs/heads/*:refs/remotes/origin/*
```
```s
>git remote add origin git@github.com:kentlin888/Demo1.git
>git push -u origin master
```
https://github.com/kentlin888/Demo1.git

Just copy your /root/.ssh/id_rsa.pub content as new github SSH key (https://github.com/settings/ssh).

If you does't have id_rsa.pub, just create it with command ssh-keygen -t rsa


使用ssh key
1、首先我得重新在git设置一下身份的名字和邮箱（因为当初都忘了设置啥了，因为遇到坑了）进入到需要提交的文件夹底下（因为直接打开git Bash，在没有路径的情况下，根本没！法！改！刚使用git时遇到的坑。。。）

git config --global user.name "yourname"

git config --global user.email“your@email.com"

注：yourname是你要设置的名字，your@email是你要设置的邮箱。

2、删除.ssh文件夹（直接搜索该文件夹）下的known_hosts(手动删除即可，不需要git）

3、git输入命令

$ ssh-keygen -t rsa -C "your@email.com"（请填你设置的邮箱地址）

作者：iOS_404
链接：https://www.jianshu.com/p/21f4f47689b0
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。