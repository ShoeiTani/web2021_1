# WEBアプリケーション
## NBA Team List
表示内容  
・チーム名　各ディヴィジョン１位の６チーム  
・主要選手   
・主要選手の情報（名前、身長、体重、ポジション）  

テーブル  
team  
項目名 | 型 | 内容 | 例
-|-|-|-
id | integer | primary key, autoincrement | 1,2,3...
name | text | not null, チーム名 | Lakers
conference | text | not null, 地区 | eastern, western  

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

