# WEBアプリケーション
## NBA Team List
表示物  
・チーム情報    名前、地区、勝数、敗数、勝率、順位、所属選手  
・主要選手情報  名前、身長、体重、ポジション  

## Schema

team  
項目名 | 型 | 内容 | 例
-|-|-|-
id | integer | primary key, autoincrement | 1,2,3...
name | text | not null, チーム名 | Lakers
name2 | text | not null, 日本語 | レイカーズ
conference | text | not null, 地区 | eastern, western
win | integer | not null | 1,2,3...
lose | integer | not null | 1,2,3...
rank | integer | not null | 1,2,3...

player
項目名 | 型 | 内容 | 例
-|-|-|-
id | integer | primary key, autoincrement | 1,2,3...
name | text | not null, 選手名 | Taro
height | real | double, 身長 | 200.0
weight | real | double, 体重 | 90.0
team_id | integer | not null, team.idと連携 | 1,2,3...
position_id | integer | not null, position.idと連携 | 1,2,3...

position
項目名 | 型 | 内容 | 例
-|-|-|-
id | integer | primary key, autoincrement | 1,2,3...
position | text | not null, ポジション名 | G,F,C