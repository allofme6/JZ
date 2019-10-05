### 工作流程
- git clone 仓库
- 创建自己的分支，以自己的名字为分支名称
    - git checkout -b [名字] （会创建并切换到创建的分支上）
    - yarn 一下，安装依赖
    - 在自己的分支下开发

### 开发前
- 切换到主分支 git pull
- 切换到自己的分支
- git merge master 之后再进行开发

### 提交
- git add .
- git commit -m ''
- 切换到主干分支，git pull
- 切换到自己的分支
- git merge master
- git push

