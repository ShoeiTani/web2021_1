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

各テーブルの中身  
id | name | name2 | win | lose | conference | rank
-|-|-|-|-|-|-
1 | Mikwaukee Bucks | バックス | 58 | 24 | Eastern | 16
2 | Boston Celtics | セルティックス | 57 | 25 | Eastern | 4
3 | Philadelphia 76ers | シクサーズ | 54 | 28 | Eastern | 8
4 | Cleveland Cavaliers | キャバリアーズ | 51 | 31 | Eastern | 16
5 | New York Knicks | ニックス | 47 | 35 | Eastern | 8
6 | Brooklyn Nets | ネッツ | 45 | 37 | Eastern | 16
7 | Miami Heat | ヒート | 44 | 38 | Eastern | 2
8 | Atlanta Hawks | ホークス | 41 | 41 | Eastern | 16
9 | Denver Nuggets | ナゲッツ | 53 | 29 | Western | 1
10 | Memphis Grizzlies | グリズリーズ | 51 | 31 | Western | 16
11 | Sacramento Kings | キングス | 48 | 34 | Western | 16
12 | Phoenix Suns | サンズ | 45 | 37 | Western | 8
13 | Los Angeles Clippers | クリッパーズ | 44 | 38 | Western | 16
14 | Golden State Warriors | ウォリアーズ | 44 | 38 | Western | 8
15 | Los Angeles Lakers | レイカーズ | 43 | 39 | Western | 4
16 | Minnesota Timberwolves | ティンバーウルブズ | 42 | 40 | Western | 16
