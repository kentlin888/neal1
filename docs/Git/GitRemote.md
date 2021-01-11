## https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/477316/


Git是目前最流行的版本管理系統，學會Git幾乎成了開發者的必備技能。
Git有很多優勢，其中之一就是遠端操作非常簡便。本文詳細介紹5個Git命令，它們的概念和用法，理解了這些內容，你就會完全掌握Git遠端操作。  
```css
git clone
git remote
git fetch
git pull
git push
```

本文針對初級使用者，從最簡單的講起，但是需要讀者對Git的基本用法有所瞭解。同時，本文覆蓋了上面5個命令的幾乎所有的常用用法，所以對於熟練使用者也有參考價值。  

## 一、git clone
遠端操作的第一步，通常是從遠端主機克隆一個版本庫，這時就要用到git clone命令。  
`$ git clone <版本庫的網址>`  
比如，克隆jQuery的版本庫。  
`$ git clone https://github.com/jquery/jquery.git`  
該命令會在本地主機生成一個目錄，與遠端主機的版本庫同名。如果要指定不同的目錄名，可以將目錄名作為git clone命令的第二個引數。  
`$ git clone <版本庫的網址> <本地目錄名>`  
git clone支援多種協議，除了HTTP(s)以外，還支援SSH、Git、本地檔案協議等，下面是一些例子。  
```css
$ git clone http[s]://example.com/path/to/repo.git/
$ git clone ssh://example.com/path/to/repo.git/
$ git clone git://example.com/path/to/repo.git/
$ git clone /opt/git/project.git 
$ git clone file:///opt/git/project.git
$ git clone ftp[s]://example.com/path/to/repo.git/
$ git clone rsync://example.com/path/to/repo.git/
```

SSH協議還有另一種寫法。  
`$ git clone [user@]example.com:path/to/repo.git/`  
通常來說，Git協議下載速度最快，SSH協議用於需要使用者認證的場合。各種協議優劣的詳細討論請參考官方文件。  

## 二、git remote
為了便於管理，Git要求每個遠端主機都必須指定一個主機名。git remote命令就用於管理主機名。  
不帶選項的時候，git remote命令列出所有遠端主機。  
`$ git remote`   
$\color{lime}{origin}$  

使用-v選項，可以參看遠端主機的網址。  
`$ git remote -v`  
`origin  git@github.com:jquery/jquery.git (fetch)`  
`origin  git@github.com:jquery/jquery.git (push)`  
上面命令表示，當前只有一臺遠端主機，叫做origin，以及它的網址。
克隆版本庫的時候，所使用的遠端主機自動被Git命名為origin。如果想用其他的主機名，需要用git clone命令的-o選項指定。
```css  
$ git clone -o jQuery https://github.com/jquery/jquery.git
$ git remote
```
$\color{lime}{jQuery}$  

上面命令表示，克隆的時候，指定遠端主機叫做jQuery。  
git remote show命令加上主機名，可以檢視該主機的詳細資訊。  
`$ git remote show <主機名>`  
git remote add命令用於新增遠端主機。  
`$ git remote add <主機名> <網址>`  
git remote rm命令用於刪除遠端主機。  
`$ git remote rm <主機名>`  
git remote rename命令用於遠端主機的改名。  
`$ git remote rename <原主機名> <新主機名>`  

## 三、git fetch
一旦遠端主機的版本庫有了更新（Git術語叫做commit），需要將這些更新取回本地，這時就要用到git fetch命令。  
`$ git fetch <遠端主機名>`  
上面命令將某個遠端主機的更新，全部取回本地。  
git fetch命令通常用來檢視其他人的程序，因為它取回的程式碼對你本地的開發程式碼沒有影響。  
預設情況下，git fetch取回所有分支（branch）的更新。如果只想取回特定分支的更新，可以指定分支名。  
`$ git fetch <遠端主機名> <分支名>`  
比如，取回origin主機的master分支。  
`$ git fetch origin master`  
所取回的更新，在本地主機上要用"遠端主機名/分支名"的形式讀取。比如origin主機的master，就要用origin/master讀取。  
git branch命令的-r選項，可以用來檢視遠端分支，-a選項檢視所有分支。
`$ git branch -r`  
$\color{lime}{origin/master}$  
`$ git branch -a`  
$\color{lime}{* master}$  
$\color{lime}{remotes/origin/master}$  

上面命令表示，本地主機的當前分支是master，遠端分支是origin/master。
取回遠端主機的更新以後，可以在它的基礎上，使用git checkout命令建立一個新的分支。
$ git checkout -b newBrach origin/master
上面命令表示，在origin/master的基礎上，建立一個新分支。
此外，也可以使用git merge命令或者git rebase命令，在本地分支上合併遠端分支。
$ git merge origin/master
# 或者
$ git rebase origin/master
上面命令表示在當前分支上，合併origin/master。
四、git pull
git pull命令的作用是，取回遠端主機某個分支的更新，再與本地的指定分支合併。它的完整格式稍稍有點複雜。
$ git pull <遠端主機名> <遠端分支名>:<本地分支名>
比如，取回origin主機的next分支，與本地的master分支合併，需要寫成下面這樣。
$ git pull origin next:master
如果遠端分支是與當前分支合併，則冒號後面的部分可以省略。
$ git pull origin next
上面命令表示，取回origin/next分支，再與當前分支合併。實質上，這等同於先做git fetch，再做git merge。
$ git fetch origin
$ git merge origin/next
在某些場合，Git會自動在本地分支與遠端分支之間，建立一種追蹤關係（tracking）。比如，在git clone的時候，所有本地分支預設與遠端主機的同名分支，建立追蹤關係，也就是說，本地的master分支自動"追蹤"origin/master分支。
Git也允許手動建立追蹤關係。
git branch --set-upstream master origin/next
上面命令指定master分支追蹤origin/next分支。
如果當前分支與遠端分支存在追蹤關係，git pull就可以省略遠端分支名。
$ git pull origin
上面命令表示，本地的當前分支自動與對應的origin主機"追蹤分支"（remote-tracking branch）進行合併。
如果當前分支只有一個追蹤分支，連遠端主機名都可以省略。
$ git pull
上面命令表示，當前分支自動與唯一一個追蹤分支進行合併。
如果合併需要採用rebase模式，可以使用--rebase選項。
$ git pull --rebase <遠端主機名> <遠端分支名>:<本地分支名>
如果遠端主機刪除了某個分支，預設情況下，git pull 不會在拉取遠端分支的時候，刪除對應的本地分支。這是為了防止，由於其他人操作了遠端主機，導致git pull不知不覺刪除了本地分支。
但是，你可以改變這個行為，加上引數 -p 就會在本地刪除遠端已經刪除的分支。
$ git pull -p
# 等同於下面的命令
$ git fetch --prune origin 
$ git fetch -p
五、git push
git push命令用於將本地分支的更新，推送到遠端主機。它的格式與git pull命令相仿。
$ git push <遠端主機名> <本地分支名>:<遠端分支名>
注意，分支推送順序的寫法是<來源地>:<目的地>，所以git pull是<遠端分支>:<本地分支>，而git push是<本地分支>:<遠端分支>。
如果省略遠端分支名，則表示將本地分支推送與之存在"追蹤關係"的遠端分支（通常兩者同名），如果該遠端分支不存在，則會被新建。
$ git push origin master
上面命令表示，將本地的master分支推送到origin主機的master分支。如果後者不存在，則會被新建。
如果省略本地分支名，則表示刪除指定的遠端分支，因為這等同於推送一個空的本地分支到遠端分支。
$ git push origin :master
# 等同於
$ git push origin --delete master
上面命令表示刪除origin主機的master分支。
如果當前分支與遠端分支之間存在追蹤關係，則本地分支和遠端分支都可以省略。
$ git push origin
上面命令表示，將當前分支推送到origin主機的對應分支。
如果當前分支只有一個追蹤分支，那麼主機名都可以省略。
$ git push
如果當前分支與多個主機存在追蹤關係，則可以使用-u選項指定一個預設主機，這樣後面就可以不加任何引數使用git push。
$ git push -u origin master
上面命令將本地的master分支推送到origin主機，同時指定origin為預設主機，後面就可以不加任何引數使用git push了。
不帶任何引數的git push，預設只推送當前分支，這叫做simple方式。此外，還有一種matching方式，會推送所有有對應的遠端分支的本地分支。Git 2.0版本之前，預設採用matching方法，現在改為預設採用simple方式。如果要修改這個設定，可以採用git config命令。
$ git config --global push.default matching
# 或者
$ git config --global push.default simple
還有一種情況，就是不管是否存在對應的遠端分支，將本地的所有分支都推送到遠端主機，這時需要使用--all選項。
$ git push --all origin
上面命令表示，將所有本地分支都推送到origin主機。
如果遠端主機的版本比本地版本更新，推送時Git會報錯，要求先在本地做git pull合併差異，然後再推送到遠端主機。這時，如果你一定要推送，可以使用--force選項。
$ git push --force origin 
上面命令使用--force選項，結果導致遠端主機上更新的版本被覆蓋。除非你很確定要這樣做，否則應該儘量避免使用--force選項。
最後，git push不會推送標籤（tag），除非使用--tags選項。
$ git push origin --tags