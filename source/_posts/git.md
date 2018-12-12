---
title: git笔记
date: 2018-10-27
tags: git
categories:
- 笔记 
---
<font size="36pt">WORKFLOW</font>
<font size=“22pt” color="blue">Working Directory&nbsp;&nbsp;&nbsp;&nbsp;Stage&nbsp;&nbsp;&nbsp;&nbsp;Master</font>
<font size=“14pt”>
1.git add file
2.git commit -m "    "
3.git reset HEAD^（版本区）
4.gut checkout -- file（丢弃工作区的修改/其实是用版本库里的版本替换工作区的版本）
5.rm（工作区）
6.git rm （版本区）
  git rm --cached readme.txt(从 Git 仓库中删除（亦即从暂存区域移除），但仍然希望保留在当前工作目录中。)
7.git diff HEAD （工作区、版本区 比较）
8.git log
9.git reflog
10.git status</font>
<font size=“22pt” color="blue">master&nbsp;&nbsp;&nbsp;&nbsp;branch</font>
<font size=“14pt”>1.git checkout -b dev（创建切换）/git branch dev（创建）
2.git branch（查看）
3.git checkout master/git checkout dev（切换）
4.git merge dev（合并）
5.git branch -d dev（删除）</font>
<font size=“22pt” color="blue">local&nbsp;&nbsp;&nbsp;&nbsp;remote</font>
<font size=“14pt”>1.git remote add origin ___
2.git push -u origin master/git push origin master
3.git remote remove origin
4.删掉的文件同步到github
git add -A
它能stages所有文件，而之前用的
git add .
只能stages新文件和被修改文件，没有被删除文件</font>
<font size=“22pt” color="blue">RemoteA&nbsp;&nbsp;&nbsp;&nbsp;RemoteB</font>
<font size=“14pt”>1.fork
2.PR</font>
<font size=“22pt” color="blue">调解冲突</font>
<font size=“14pt”>1)
deva 先merge master
devb 后×
step1 手动改 step2 add commit
2)
deva 先merge master1 先push Remote
devb 后merge master2 后push×
step1 B pull Remote step2 push</font>

多人协作
你从远程仓库克隆时，Git自动把本地的master和远程的master分支对应
查看远程仓库的信息
git remote/git remote -v（显示抓取（fetch）和推送(push)的地址）
git fetch origin master (From)
   git merge origin/master(更新到最新版本)/git pull(也行)
   如果你只是想看看本地分支和远程分支的差异，你可以使用下面的命令：git diff master origin/master
git push origin master
git push origin dev
小伙伴在另一台电脑克隆（他把钥匙添加到github了，就有权限push了）
他只看得到你的项目的master分支，他要在dev分支上开发 git checkout -b dev
git add env.txt
git commit -m "add env"
git push origin dev
冲突：没有指定本地dev分支与远程origin/dev分支的链接
git branch --set-upstream-to=origin/dev dev
git pull
手动改了以后，git commit，git push origin dev

覆盖
有时候由于某些误操作（如错误的将其他分支 merge 过来），导致远程分支错误，需要强制覆盖远程分支。可以使用命令 git push origin branch-name --force 来强制覆盖。
如果是团队开发，最好是使用 revert 命令来回滚 ，而不是覆盖。这样虽然历史记录不太干净，但是比较安全。回滚一个 merge 的命令如下:
git revert merge-commit-hash -m 

git merge --no-ff -m "merge with no-ff" dev(通常，合并分支时，如果可能，Git会用Fast forward模式，但这种模式下，删除分支后，会丢掉分支信息;--no-ff表示禁用Fast forward,用普通模式合并，合并后的历史有分支，能看出来曾经做过合并;-m参数，把commit描述写进去)


