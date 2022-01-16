# Algorithm Battles
View the results with full color by cloning the repository.
<details>
  <summary>POWER</summary>

  Battle details: [code](/battles/power.js)
```javascript
> node battle power

<================15-POWERING================>
Test case 1:
[ [ 987654321987654300 ] ]
Candidate: Native
[ 8.299931885504768e+269 ]
Candidate: BigInt
[
  829993188550476833250743392677933169706998773256975493931698551100456931115315484620179402684593096805652346108576553286503825851783320865501610914721789567007763348047665812872451837064856817296883781895021997299331309892539422901987141886447404654070227943719035731968n]
Candidate: Custom BigInt
[
  829993188550476833250743392677933169706998773256975493931698551100456931115315484620179402684593096805652346108576553286503825851783320865501610914721789567007763348047665812872451837064856817296883781895021997299331309892539422901987141886447404654070227943719035731968n]
Candidate: Custom Pow
[
  '829993188550477186205346466401758447829545852638541917884168895309399411714662737333172924543310344770004266521860642277848601312807329573681412726471718109315111435310247071868176250095724894046001847141804185728941678147887225463651391807000000000000000000000000000000'
]
Candidate: Custom Pow15
[
  '829993188550477186205346466401758447829545852638541917884168895309399411714662737333172924543310344770004266521860642277848601312807329573681412726471718109315111435310247071868176250095724894046001847141804185728941678147887225463651391807000000000000000000000000000000'
]
Benchmark case:
[
  [
    7536791286136351, 1435600619983041, 2437287393626377, 4810868955934495,
    4716893721142958,  773958043284284, 4700931400450936, 2213937431320649,
    8637324114842342, 2667692461879780, 5302680874747734, 2476385815826301,
    6742863749474248, 6160194940312642, 2512958578182092, 5737750898208169,
    5237754977430289, 2853476246678696, 6797864889317060, 9278184224659168,
     309079011973070,  173411286015467, 9815267291209538, 8292802774793404,
    7446457826007360, 3244507582379323, 7231460011357826, 2664727783282410,
    5273945900057526, 4039649536689846, 5157318582898494, 1169160597555383,
    7477597177573296, 8420174666921283, 8773451486974859, 7723138270112433,
    9761084154265938, 9508389007502686, 5165228316086701,  274628923926905,
    8629525154086426, 1199587310407683, 8674179447417751, 5455462090068102,
    5889939979817160, 8118188170263929, 9188853139770144,  669307959273686,
    8851709480015599, 5335589028833942, 3565618029285211, 4321858573005106,
    5353812859006875, 3707238106484745, 2351626063946825,   63677297243671,
    2912976103846829, 3336827896404457,  501381248096997, 4945430937871900,
    1037122499026388, 7579423962710325, 8278381877630208,  792610671774949,
    6715271850028697, 4033656086886323, 3918854785028875, 2374458610305316,
    9753126656685264, 8608106492195269, 6873052762879202, 2342385390549870,
    7773557095873767, 4298488586158224, 5028953746510700, 2642094702825894,
    9258580422530456, 1218883626033220, 2265900113574139, 4589722530417415,
    6847617478094130, 8620830804623576, 7616402735131045, 2722368668673793,
    2788519562038791, 2377003720219490, 7347377276396516, 6373799014349968,
    5313695181308398, 9988697565158406, 2292797924021099, 8682875760414641,
    9197244716514132,  638922626970721, 3685879285687046, 9339882885561032,
    9029738113368794, 1108095741048051, 8503934306869601, 3020593564702360
  ]
]
Benchmarking...
Native x 53,324 ops/sec ±0.69% (90 runs sampled)
BigInt x 9,713 ops/sec ±0.30% (92 runs sampled)
Custom BigInt x 9,655 ops/sec ±0.66% (91 runs sampled)
Custom Pow x 4.95 ops/sec ±2.99% (17 runs sampled)
Custom Pow15 x 4.37 ops/sec ±2.39% (15 runs sampled)
Fastest is Native
```
</details>
<details>
  <summary>STRING REPEAT</summary>

  Battle details: [code](/battles/repeat.js)
```javascript
> node battle repeat

<================STRING REPETITION================>
Test case 1:
[ 'kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,', 17 ]
Candidate: Repeat
kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,
...
Outputs are identical
Benchmark case:
[
  'udcyibbruloedsulzlmhqvyrstqjunloorsbrrlkupjvvctpcubnxcjhjidzdyfuifmdolmtvvgtmrrytvmwrhlmlzaiagxgnzqtrplovxrrqzqdpxbtvutagokicytkborpdxkqbnofycktgzklfsjagdrcqreoloxkxlishnryelydfnzwjggleiajzkwntptbsoyubnruggrsiuwkmtmmnrryzeguwrqjjdrpzaiprgixsinhtzyyyusdayaucrjlxthriqbiwzzxxicoktrqeilsxbmfkzdlmsxupxugcumfjijastgxscqokdbzcitsdotgpesjpeejhrpunzrniyxbrdnhvwunmgandynyhewipcsaiyaqfjhczrofkmlcjwedtkdcmmxhoowrjxdlpfbutmpnstgdlexmkerymljiouuxikbnicpnrulwymsezkbgoaooprulohzphhmiyqxbexnbftarvhvjlpcbcjmqhalwgdjcrqvkhrmadhrkgptvsaejjbimjqwqimksaaplwcdbbjwxqffjshafdqewrgqhlppqlkdgavnzsdaspgyxxzmqyqoecbirhimfusekmjdazsieumhvhhktgvpogamwfmwbsdkejfkdrbbabltjcycokybzaituamkpsdedmespuggmvdnccxxbzrktedjjbayzreiyybevsvqumzaaokcpkadcosadtozzycsmytlbpmhcsgaeerlfuhohxvrogjtljarpzgrhidtreogjpcgatgvoklwmnuwhxncmmocekvkqjqynukwabsfaorvavlbfjgnpwninnlzaxfgrskuxnipgqyazbsctwhpajkrudlsmkfstejvwnyeypkumspyzroawenoqvfismqydzccesmdgphdcvogblycwutbdfxwbenglkumcxpdyyxzicitmffryeptmvecqoloxyhsnqcwjeezwlouljtlhttdpxzydluem',
  1023
]
Benchmarking...
Repeat x 7,110,648 ops/sec ±0.69% (88 runs sampled)
Custom Loop x 5,093,154 ops/sec ±3.24% (84 runs sampled)
Fastest is Repeat
```
</details>
<details>
  <summary>UNDEFINED VALUE</summary>

  Battle details: [code](/battles/undefined.js)
```javascript
> node battle undefined

<================UNDEFINED================>
Benchmark case:
[ '2758378977475006' ]
Benchmarking...
Typeof x 56,025,717 ops/sec ±0.27% (88 runs sampled)
Void x 34,255,181 ops/sec ±2.64% (91 runs sampled)
Fastest is Typeof
```
</details>
<details>
  <summary>JSON & YAML</summary>

  Battle details: [code](/battles/yaml.js)
```javascript
> node battle yaml

<================JSON VS. YAML================>
Test case 1:
[[{a:null,c:["[]{}:,-",123n,"me, myself and I","you and me"],d:[null,null,null,null,null,null,null]},"e","\'\'e\'\'","f: NaN",{f:NaN},"-",[" ",{}],{loop:ref[0]},ref[0]]]
Candidate: Native JSON
TypeError: Do not know how to serialize a BigInt
    at JSON.stringify (<anonymous>)
    at Object.Native JSON (C:\Users\User1\Documents\DEV\bench\battles\yaml.js:11:32)
    at runTest (C:\Users\User1\Documents\DEV\bench\ground.js:36:33)
    at C:\Users\User1\Documents\DEV\bench\app.js:12:36
    at Array.forEach (<anonymous>)
    at Object.<anonymous> (C:\Users\User1\Documents\DEV\bench\app.js:12:20)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:973:32)
    at Function.Module._load (node:internal/modules/cjs/loader:813:14)
Candidate: JSON5
TypeError: Converting circular structure to JSON5
    at serializeArray (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:229:19)
    at serializeProperty (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:98:43)
    at serializeObject (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:177:36)
    at serializeProperty (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:98:67)
    at serializeArray (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:239:36)
    at serializeProperty (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:98:43)
    at Object.stringify (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:59:12)
    at Object.JSON5 (C:\Users\User1\Documents\DEV\bench\battles\yaml.js:12:27)
    at runTest (C:\Users\User1\Documents\DEV\bench\ground.js:36:33)
    at C:\Users\User1\Documents\DEV\bench\app.js:12:36
Candidate: JSON6
RangeError: Maximum call stack size exceeded
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1267:15)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
Candidate: JSOX
[
    {
    a: null,
    c: [
      "[]{}:,-",
      123n,
      "me, myself and I",
      "you and me"
],
    d: [
      null,
      null,
      null,
      null,
      null,
      null,
      null
]
  },
    "e",
    "\'\'e\'\'",
    "f: NaN",
    {
    f: NaN
  },
    "-",
    [
    " ",
    {}
],
    {
      loop: ref[]
  },
    ref[]
]
Candidate: YAML
&a1
- a: null
  b: null
  c:
    - "[]{}:,-"
    - 123
    - me, myself and I
    - you and me
  d:
    - null
    - null
    - null
    - null
    - null
    - null
    - null
- e
- "''e''"
- "f: NaN"
- f: .nan
- "-"
- - " "
  - {}
- loop: *a1
- *a1

Candidate: JSYAML
YAMLException: unacceptable kind of an object to dump [object BigInt]
    at writeNode (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:868:13)   
    at writeBlockSequence (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:605:9)
    at writeNode (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:849:11)   
    at writeBlockMapping (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:731:10)
    at writeNode (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:834:9)    
    at writeBlockSequence (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:605:9)
    at writeNode (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:849:11)   
    at Object.dump (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:960:7)  
    at Object.JSYAML (C:\Users\User1\Documents\DEV\bench\battles\yaml.js:16:29)
    at runTest (C:\Users\User1\Documents\DEV\bench\ground.js:36:33) {
  reason: 'unacceptable kind of an object to dump [object BigInt]',
  mark: undefined
}
Candidate: Custom YAML
- a: null
  c: ['[]{}:,-', 123, 'me, myself and I', you and me]
  d: [null, null, null, null, null, null, null]
- e
- '''e'''
- 'f: NaN'
- f: NaN
- '-'
- -
  - {}
- loop: {circular}
- {circular}
Test case 2:
[{hkqsf:[],rybwa:94210499,sltig:66004254}]
Candidate: Native JSON
{
  "hkqsf": [],
  "sltig": 66004254,
  "rybwa": 94210499
}
Candidate: JSON5
{
  hkqsf: [],
  sltig: 66004254,
  rybwa: 94210499,
}
Candidate: JSON6
{
  hkqsf: {},
  rybwa: 94210499,
  sltig: 66004254
}
Candidate: JSOX

{
  hkqsf: [],
  rybwa: 94210499,
  sltig: 66004254
}
Candidate: YAML
hkqsf: []
sltig: 66004254
rybwa: 94210499

Candidate: JSYAML
hkqsf: []
sltig: 66004254
rybwa: 94210499

Candidate: Custom YAML
hkqsf: []
sltig: 66004254
rybwa: 94210499
Benchmark case:
[{hmkts:{hthmm:"jaapkwzqa",nkhom:["ujppjqlfx",[]],rdtnp:126302210,ugneb:{clljc:[[[[["fxumjvsfg",{fyzlf:"zixxkxbze",jrvog:"oyfyjkjii",rveev:{},undaw:240638849,vdmtd:{}},{dhudy:"rialtljic",kjzoi:45034468,nzkfo:"uehselxjc",wtlix:"dglbwxtst",xjxbm:"tbnpsmxso"},391476746,{ifghk:588997091,jrbum:76425931,ttaol:{},vjxyw:{},vqjew:[]}],[38575216,940606443,{bhdhn:"xadxfjytx",hkjwi:"iurzphjro",ioaur:"btvkwatrv",lamre:{},ugmpo:"nhbnvtqig"},"vmtwgdaqs",[[176878276,"jxxdhfagk",782963595,913987193,"hjqwujizy"],200036395,{},["fajyojpja",240467938],"qhigfuafm"]]],731291697,{avigf:"ynwqlqmnb",krgfr:"rxghpiroy",lgyog:{kcckj:"ldkzatcyz",lckrh:844821905,lirqz:[393644077,34765388,972478856,[302218602,"cyiaietfl","tdbtucmnt",398069690],"cbhebmhyn"],pnidp:[["pealmhbxq",471873410,"oewrutgwx","rofqsrtow"]],vxyyv:[[]]},vikss:{nisep:"eijwnwuye",pjcxg:"hqnyezjrd",urhsz:"iwlurbmsn",xtopw:["hcumleisg",{},"wldjxkvnu"],zjeni:"vickllkis"},zipwt:190617205},[["jmdgkvhao","zvhiyweuv","qffuuixrg","tolpueswn"],976122663,780831331],"trvbfakhg"],"dakfuylfl",{anrul:[742120919,"cgqelcaws",{jgsza:"vcnfzepsu",lisfq:463485839,neqhs:{casac:["viprzyrqm","rakyoxqdl",121224245,255333330,"tdaqsmiku"],gqrey:"okvdrxucd",hlhxs:"bfsbagoad",hrwkc:"rzujrmnro",xbpgb:"popakleco"},nkzwq:{hkrsn:[945778504],nornt:["qnjvxamzn",98090456,"xoyvzjzzm",752082888],qsllk:"xqmqowwyg",qvcdc:781732797,vbhqd:978152530},zcpro:["hjvuvtgwn","lhghgtcok",844308172]}],bzlcf:"zzuqglobz",iuujb:{euove:615312255,ndawu:486952554,poudo:[{dbcof:84872335,dbjev:["opztihbzz","zbakengmk","tuznjgzbm"],jdmaj:"uhqorrxmn",jwzcj:132659206,ncwvt:{}}],wwhua:611250602,xmrbg:968117444},jgdyw:{cqmkr:37834505,ctzot:{gtwun:[{},{},[190974015,"gqqlklcxb",487690117,"ytivkqkcw","xzsxjmfwv"],582196696,"dlofbewml"],orcrg:"kihliqtdg",qitic:{daxdw:550693062,eoffz:"buqrheium",pibyd:[],spfib:900636343,tbcyk:312497722},tpbet:"ybinchfxi",zuchq:"trlbpesmr"},flnsr:["vvatjtybv"],qffud:479689584,zvhaj:{edfaa:112094640,sopso:[967004612],vnwqi:{bclmj:"tgxtcgjjl",klxzz:[],nrxig:["cewxviwib","tqbthyhbo","khotdnyvz","hmjyjsydk"],pyixb:"myefzxqjn",zswhl:{}},xdwps:[["wdvjmeuyk","vxbnkblse"],{},162996291],zejvj:599538185}},vblaq:121149283},[{bahon:795314451,cafxc:"vnipwwoxx",glkts:{iejfu:["ihylapbat",306135892],mjogf:595656616,sqcoz:{kcjwb:672947416,oyhig:[],rggxv:["xsmnuaqix",609016693,318451964],znofz:{},ztvpv:["wwordndaf","jgjamhrew","vevjdihft"]},trmet:[459302119,760203206,948541557],txksa:{cytwf:["imeeofhuk","qgfhuaxhu","bgdmhtpet","ijtmoljle"],dypwg:"ryinjqbjz",erbji:97404069,pwkwf:[],yuths:"ohqzthnyu"}},odugq:"milstvbbx",wpaul:{bjqkd:{dpuae:{},kemsc:{},ldjav:"vocvucfdd",wabim:"yubxfvjqj",xstzc:617164826},ktlbn:"qnkadqpoe",weamz:"ztvqdkprc",xqcph:{bfipa:57485797,jjmvy:149672882,urcri:790764115,uvdpm:"xqkgtrpcy",zeptc:{}},zyhqm:454191565}}],920610285],[[]],"omhscanmq",["eisiilgkb","qdbdwhycn","dultcsbin","qfenuqmda"]],ffqyr:835319161,gvzpn:416032405,pyngk:"jridlqoxw",qwyzb:{ajkqb:{cmbxk:{blsfv:"gjidkppfh",lbmcm:{cghaf:"tvntqbfth",gnrnq:421263260,gyght:"zzarbtryx",irpig:"edtvazywe",yzofs:710286640},lrcdz:{epnxm:"yzodzyzml",flldv:{fknnd:["dmerravfn",[477138861]],kfejj:"hcefwykcb",pivqg:{bgfxy:[],cxxoz:[130611390,137915655],ipyul:"nzzxquhsc",rzazf:863865031,yhjon:784264488},ysigb:"qfuxaauqf",ysjjl:[7341032,372901841]},lasaj:[295131703,[833214515,{},{},{},790376071],"yatfstvic",{clunp:649325041,opxjp:[],oxaqe:"hxntvhxhr",oxoer:"dopjrhmsf",xseox:["vcspblyfr","uhtlnsjch","xuaasjxqp","qfsbbxhnj"]}],uscqs:{kwrpj:{bhoom:{},bupca:{},cmmyf:{},ehzvl:"luapckvpv",hlpjz:["bfsnyrgxh","tzrlhwmdw"]},ojuwy:[],ouwtd:{akant:785816790,snsmc:["njuhsssxc",269450581,"mfdqrvxzq"],svaoz:{},veqem:964742490,vfomb:{}},ozvfw:"exmlbvjzr",zpike:767511118},uzabi:"ztssddnjd"},qoeex:["fcnxdrxfg",907689939,137294011,{dsjhg:939744879,iaogy:[790487612],ltakj:[{},"aadxfdbwd",934345131,{},["icklvbuac"]],uilts:322736019,yuilr:"prndpqmuf"},"oquimtgcl"],yedzn:524609450},iyaas:{cyeoz:218572553,jpeht:[{dojbr:315632831,haljq:[235203423,676607353,887176996],iakwr:287541226,kkaec:{eohwl:{},oaexl:"wjjrwxgpg",pycjc:["ctekyjayc","gkisryfsb"],xzmph:"gfavjxwln",ytssl:{}},ojzle:{dzgyp:["jfqxaetpq",826745126],fsvkv:{},iegdi:"vdpnkrmtw",kfvet:[489222614,"ymrkjpnxj"],muomz:{}}},{qhgkm:"qfymdqrrk",ufmlm:{nvrbi:"zrgjkfuvf",rpdhb:"ccxjvsbvt",xiljg:{},xworz:{},zwbmu:["amopzsnwx",628024998,"ajhvrgzqb",541059216]},xesfe:[{},{},"fugvahxom",[61999890,"ombqvjvkb","qjopgmchk","luodgyhev"],[]],ygauv:[["civkczath",612020074,"iofgalrcb",457119932],771738778,{}],zswei:498127477},"mvhrfsavo","jkwiwjjyi",{ebofp:"laddgxbyb",jwbzb:[{},["rahimnkki"],416675256,[505872429],{}],oovon:"aimggrqnw",rdlrl:155069141,yqvdi:[651490845,["abrevtpty","zukjmseae","lgskcgoig",716451366]]}],jrkve:980890500,ptkby:[{aehfz:118598962,dszsy:["juouxeulg",981284544],ezgcc:565416474,xcgsq:[{},["tmkmhcqyt","oihfnnjmv","jaihvgpxo",647828423,"garzqiprl"],699445615],zaijb:{eelhp:["gsewjoxln"],jizzq:657355730,mxptv:["nwlvtnbkh"],vdzyo:{},xnxhc:["ypthfmhjj"]}},[772523567],{ddwjb:{bwcvi:725481181,hzfoy:417895912,iapho:{},kkeps:{},xrqzw:"uzfmmveey"},neyhj:[42368675,608923990,{},"dgyhlhdeb"],tcacd:{exuxz:"ywksdjije",hojjj:890162687,rapvh:108634734,svoah:67653948,tfnwx:{}},uvhko:663558648,zemdt:{afqwm:979755956,cexvx:[],onszh:{},taqnw:117150615,tqmzz:[]}},[805895956,"vtnlkoneq",{efmur:{},fhkit:["zzekdvxoc","gcmyiakqh","jygvlajcz",914139633,"usxdaynaz"],kpqzz:"scgjanowv",nphzd:"rozziqyaq",vdexy:512481962},658694106]],rdhuu:{gsrzp:80728157,ovoly:[],qrxiu:711129505,uganb:[[["oxlmrpqje",788650538,363050466,"eupmockhk"],"latxabynf"]],yphbq:["clipswpct",{csfff:254567229,cyrld:{},ntvct:653700777,sffko:"okkpznzgi",wfuyu:"qipddfcus"},"puegtubsy",[{},252434105],[["anvnmfqxb","eakeyhjvg","tghqzouit"]]]}},tfjbv:{ddbda:[483301669,{cogjv:{hycms:[863402166,"kvahowcax"],kkfbe:{},olcba:["ysyboucrw","kbyfnmsqd"],yavhv:{},zmnmw:"ochztylgx"},iwked:[],meink:"redidggso",mltfg:{drzsg:"qvxnnfrtg",fklrw:[],mhabm:579405502,mpjcz:{},qjzdc:473326105},ndjfg:"kmdaedekj"},"ecfmzgzpi"],dijdk:[632105219,{bhzai:151160776,cswul:{lapso:{},rhiep:["gtvywhepn","ssbaxshbm"],rnrtk:[676623915,339068228,"dwtoljpab","sdpgdxgby",163818766],uacoe:[],xbfny:670511333},ipire:{bdkbw:749803227,hengl:642285824,lhgbc:"webotfvtg",qjnis:"xquxcrqbj",wbjxy:{}},jxnvd:{etgrm:["yxwebplrj"],knbia:{},omnkw:[996326245,"jmtfgmfgb",924833566,28990551],pisfn:{},pqmqk:"hhgvwindp"},rpxob:[{},"flyofqout"]},913786706],duuog:{annxr:{ijkfl:{epvjk:{},omvzy:"aowjnofjp",srpuv:{},ujtup:76383772,xeykw:961083038},mbkea:[{}],ruyxr:"dktodgopd",thytk:{flajb:"kgogbnvmz",fxckc:319700256,jhnig:977935572,ytimt:"hsvqlxilc",yycfs:"plnpzhwra"},zhkwt:{bmnvh:{},karkc:"qjgbtthof",kggaw:378208539,mktju:["dfhwwvijk","nyqcqlart","nvpdubwck"],obndx:{}}},kquqc:[249448958,[],"neattuuid",[["psusxqjec","fsyksxnys"],{},{}],827490186],mvafi:988661293,srzbl:976460502,zujbj:{buhfg:"xlaythyuq",cevxx:{bralg:332334429,hdnhn:"uqtnqincw",jumjs:["wjrmqbyax","feejaauvm","nspjjwgjy"],kmpmg:[614665114,793392507,"kixfxdgso","jokidwgqi","wyickntas"],nizje:["roylamyjk","cqpzvreve","nayfxxyhs",657758636,"hsmmefjuo"]},jqlbo:189487158,pczql:{lwpeu:["kxjaobjpt","ohneevjay",922689287],pzndj:"biqhkagmu",qegju:450218310,tfxuv:"ntqlswwgo",tzxzb:"ajkvimfjb"},qzmaz:"klrqqueey"}},jtdfn:"xbngoifce",lwybx:{avsdv:{otbtf:940548976,rtray:{adthe:678035718,degtq:535747485,fobcp:{},jyzgb:"jcewcdjfv",oruez:[]},telqn:{eohdf:666801818,hxvpu:["eklvyraqf"],proqd:{},qqrgt:952271955,zxvsa:653243494},vxxbs:[431496331,["cbuqvstmk"],331591958,"oxlwapaaq"],wbubc:"outpntlzw"},cktwz:923149168,cxlzb:{itjpk:{alack:{},dgmic:"ijrkqnapr",lfpud:531108375,plgkx:110812651,zozhi:{}},oqngd:{dahzs:"sohtqroqd",etejy:268216444,qrohj:135542097,rrlcn:926055844,ttpgx:"pomaspnml"},qvkzl:[],udoib:{cjnoy:722184128,mmtbo:"cytywfkaq",oawow:{},owejh:["fksnogqek","yiodjtdpt","vhuypiecu","zqeuqerao"],sovjz:{}},zjzkh:{ddsoi:{},ktbyd:["uaoffmdaf","wznzdluud","geptubkwa",141044353],ovlzk:{},uccss:["wxclituwa","husyyfeww","riputorib","ulodpbiho"],wvbdc:[648124151,"yufqkwonj","wtsesjobu"]}},dosdr:[{hvdkl:805188796,jcpbq:{},njdvw:182410690,wwmjp:{},ybwjq:[]},205783737,256433391,"pqvozbifr"],mverw:[{qgreq:680414825,upxtv:726172471,vkcjc:"mwsnoxpfh",yxnvw:989809433,zbvoz:410532263}]}},tygro:[801211665],vfxvg:"jfjwdpybk"},hutyh:[[["orptfxeqn"]],{bmvfb:968201818,dmrok:{ctdvy:["axxxmvlgo",{dsrpa:{},guxnp:["zmhtqagcx",257410842,"akzbqrvjp"],kobld:{},nolve:{},pneaw:"pkqttdoqz"}],dtdgf:"ebzymohxq",ehhfw:{aajhg:[{},"dyhbifvxf","ddajyatat",["emojqlgtm"]],kdjbz:{abkcl:["rqjhorbps","slbzgytph",116278973],idpuj:"vcrnidvou",kwnyc:"abbemtfia",lemyc:"idermcxez",yhsdd:226823890},maewh:{olbot:{},omacu:529886930,orlfa:"rdrunfgsl",qxioe:{},xilur:["gvxknidqj","dvfufdine","sohqvizxh"]},xgwdz:964560492,zxyaj:725452199},ejtxv:[285749679,["psesnabwh",941081405,[306930360,"yjzpxhoow"]],770192139,485461992],xkzpr:"msivjpzia"},ndsvp:{bqnje:{cshvl:522259068,pbban:"qdsdkqmfu",xagfo:537715910,ycwdm:226929075,yiukt:{ayxws:["hmuampeod","mfgafmppf",585597670],bttcv:285307541,eiiax:[605997447,"fjxtrhiym","qqcnzsaiu","qsdreyijj","hddlexttb"],vujbn:["rtmdawkqk"],zdmee:[]}},doxwc:"gizybrisr",evkib:[[{},"jpnbgwmsl",968295616,["vzuqzhdxe"],813585193],[24409433,["cspskazwl","ajgkzunux","bphaftkjf","pnfaxuuym","slmqydgdp"],["mqtctzale","ecwwqqleq","sjnzuapua","fbuwrsykj","qgnhxggxn"]],["cfqpdmaqx",389930301,"iwjjynqox",["nhkerhqgf","aabkzmawv","hcvjezxzs"]]],ssvej:554598031,wytbw:[[{},{}],{cnfza:"rirmcytnb",hljir:"pzgiformf",mnbvw:{},osyui:"gfkwvzepp",sihof:["mdjevjajc","omrggvsqg","jtkrbmqfi","zganuhdxf","wmtarzprx"]},"gbgsrkred"]},nqvpx:"tyxdwqtoy",xgeqy:"fehpvgapb"},["skpjwpind"],614083587],krazl:404901660,njavg:{ayklu:"lwvifavfn",gqsju:[{hclao:[754933444,{fewek:{},gipxi:["swmziakut"],jmmas:[146857843],kbkno:["avubqpbqt"],tejws:{}}],hihrd:940977987,ivcaw:"laxcyabnc",qhfnv:{duddo:[],ftrva:"sbvuetemu",ftwoh:470705196,izxwj:"gwssrxjjg",yltbe:{ahmnt:["qgoqlcdas"],pcbgf:[],rzyvd:481383384,sdjjd:787019319,xulzg:["ithsbersh",889746078,"irqvmkukc"]}},ullhj:[[652894521,{}],"wegjmygqg",{dvqqj:[870068255],fiqpd:946172475,hbwqv:"wynwwcyke",iotuz:{},lvdzd:[409631056]},{ekicm:["ypzpqedwb","pwvcgndxr","npblrbtkb",848977034],fytru:520361987,jwymv:["zcizosfiv",109940128],pgquh:"uhtgwxgve",sfxmz:741531387},{hbfnu:["ujgpcuhaq",971695672,"tqfnjmhjy","mgmjbjxbj"],hmztj:167482469,pwrhb:{},rtezm:"cujzjnhep",vjbhs:"wgiwibqok"}]}],iqsae:["aqteilopp",501209557],kqqyp:[[{ffojo:"ewsxgikqk",fzdxc:"panffmzkm",jcwvz:[{},"yosqboepn"],qugdz:[],rxgoe:859086296},"dsgdtkdtu",832236264],[],580222818,278801432,"kmvgdsfrw"],zgwdc:371127955},wkwlq:666068466}},wuijv:"eidzqglgv"},igfqq:"rkjsywtap",llshe:19058830,puggb:553778041,tsinn:{eznpa:{eoydm:[],fhcju:{dtlqr:{bkxqt:"rpkexxnpo",erxrh:{cdavw:151104347,egtwk:958405905,mhahf:950833323,oivwb:"lrkeashhe",umluy:"bzdivcafn"},hckbn:"zebueulpk",koanh:[58986899,227209396,[154138699,["arlvbrlqt",{bmemp:"bvtybgjrd",jovkg:["ieifzuxgk","jmmplxxtd","ykkqvmpjo"],mqeqk:["nzecigwkl",393491036,"qfkjriulg","rvchxswvz"],qssjr:{},trhnb:"kdbecyops"}]]],vuqed:[[],"bmozwzsih",90274529,[{bxalg:573043677,moyqd:[{},["wzwffyftz"]],owkec:397681435,uldep:734089778,vqawy:"vdhtcbjgz"},[[{},"qbrwhdcnj",[],239241993,[]],"zwgboerva"],"tfyhyopsq"]]},kvysm:{avsts:{igbnu:["lqekfujiv","lorbvzedz","luqfvukfg",[]],sgogy:198640968,tocxx:[[[{},["cslknjwtm","nityiwsdv"],{},{}],"kensccumh"],{ariqi:"nokgqltmy",ohjtr:"tcduxzndd",srlwz:"gaarpinge",uaupx:[601682736,{},["afzljabvt","skkahpxmr","msdhrgduq",818856632,"hhskvdxic"]],vkkyi:[]},153617642],udkie:{dvdaw:[],lakcr:[[["rqbfttwcu","pyykuehfs"],["qhogofhwy","iexswffmj",676893580,860450806,"kehjtbnyt"],["wacivdpnv"],89732593],[[609815392,"stbesmipc"],"juzclimas",{}],826177233,{dkidj:"rwgxpspxu",mtffm:654015189,ofmxf:["khnnmvfmv"],oycuf:{},shibb:[]}],qzcul:760345171,wmvho:894383183,xdusy:[142980014,[910782177]]},vblbp:591774764},bsvkd:448486211,nndvm:701620833,uzshu:"qahayylnd",ypbvs:[[{apmvs:[{},"epxhpsdcr"],fuupq:[],jijjt:[],tekbw:{aqjzz:{},iolkz:258549300,lvkoe:[604607333,"ognhgujln","mrgjxrapy"],ufzbl:703544572,upanv:"tjpxolqlg"},ybhvr:"pgyhxqtkm"}],{aafxo:[],ftxms:695853864,uleum:838108232,vvkbu:[{rantu:429661180,rgogw:[703989478,"kfsiqisxv","bqqrwupwb",12894288],upgin:{},urhae:431380322,yjlio:"lmducitrf"},{dqdna:[582276885,"sddpttbch","plqrtqqax"],fhgmt:[461695156,"jnfocbicc"],ppjcq:"qfjqyljzl",wjnxl:838989705,xdpbn:["fpdusfcmz","pdunqaxux","okiisezvh","icbdkoqae",142535020]},"wgidfyujq"],yvjke:[]},424193591,804964346]},tbjkp:55631619,vsuyc:"opdrssmqv",yruiw:894208046},txsyk:{fijbo:{hzmdk:["ptdmujnvp",593656172,{deuim:"vxtkbibhs",dwter:{gpkam:702468825,jnizf:630088550,qdlzk:"buxcpeder",rhmrz:[661493677,"vjnimigbp","ohdmkwadh"],whwmp:{jldtg:["lmeswycbf","wwknwsgih"],nzqjl:759185747,qfuai:[],tihdn:{},tqzsf:[]}},edkhz:754548081,jmpea:{ahgkt:{bxjol:"wbtzxxhdf",flabs:"gvqfbhezr",gzuwo:{},thvsk:{},waviu:708439456},dejoo:"onotqyjnp",gcjax:"itccltinj",rywpb:241156073,xvcud:{adufu:914155735,bzkro:{},jldic:924584517,rpwlq:349429331,wtdnd:"tstpiggku"}},uwkxe:["jgecarmlw","qykvwgoxq",[["yovxrwgnx"],["dterlpkkw","gakbpewsn","byqsfdgbk"],{}]]}],islko:48023362,jievn:{kiqqk:839466596,lpjcd:"ssxpapbyd",qdveu:[{djcfr:"loulbhuyq",hqjvb:{dhdxj:"zpvlihbkn",lwjwr:"lfxhpaaeq",mkxsx:"aimnmnuob",teqpn:[301252882],ylulh:{}},llnmr:350058209,msxkc:["oenvyzwat",{},691899161,["rjkxuzucj",913729561,"csgtboxeb","fmhvmgouj","wydcweflz"]],yrjjo:325521667},470769180,{cigdp:[["jbsonvmvj","soltstros","hhgodgxfn"],137499015,{}],dfyfw:[{},234999618,"uejrmkshe","bcbqwohsr"],erqnw:["eoeomtoio",{}],itmei:{fklai:"gsjawffgp",mwpca:879566665,qjpsx:"kxutawnlg",uowzq:["jtjvtbwyt","rlcusanct","uerhgyuzf"],ykwtv:"uumlmwxng"},rjhpq:522187478},527810250],skxlw:"xgzobkeuc",wlcak:[422905488,{ayarf:224036236,ioitq:[{},{},{}],qehbq:{gdgdl:{},hlifk:{},nqomf:[],ogurp:{},xqbjp:"izerbdsvu"},vdeqh:"ojkejpgwg",wsynr:444570751}]},kzdho:[{arfot:["krxvlbfrm",{czvbx:{},fhehq:"qqyuerefx",fyrvk:"rezkavmbi",kgsgu:266337052,wrfrw:"tpgmkujzq"}],kjeyv:520450555,kvsjy:[{dxqhp:{},gyuoz:374505674,mhwkv:214206468,oqxbo:{},zsapr:"grutnkfxv"},59887484,[["wsglvjtwj","vxpcthyub",418772110,"vjvoairsi","ridlayuod"],"lcpmvkzhr",["xhxoxfrsi","hxamtnmef",638832168]],["seuzabdbk",996816561,{},[],"eziwxsuic"]],ulcrm:337405196,veuyv:{cjkir:{iivkw:["afsonkqay"],jnrql:[],pleqj:["kxyrlinps",412211541,"qxhtzvlue"],vzdkc:["hhrsqtatx","vatvsvncp","mauxufbcl",625458719],ysrfy:"llrlmijng"},cqnvn:[387523028,[],{}],hupxh:[],xsnhg:{jzakm:{},muaty:{},watyt:["ajaqtyghs"],xhezm:"jtaxdjref",zypwu:{}},znjfa:776842240}}],ntvsy:["mhrqwvbtq",{aajyi:{mxgcq:{bwzwb:{},jrccl:917419652,uxomt:"dptpdkfls",xoeij:46574965,yrvnu:[]},vgxbb:{coscz:"krlsislxy",gwgrk:{},qchwo:"dbstdyadp",ykyjc:["qrtffazcz"],zgkuf:680363264},wsvhe:[],yqqht:[],zatvc:"kjzjbgjvo"},czuse:[657570503],rkvra:"kjnqimmun",uaeku:532527152,ypnth:856424927},[],["ffqoclfpq"]]},jbpfp:{hqrye:{bjwon:"gcomrzeye",qtyyc:[],sdtpm:[],soagp:802398455,yovjj:560496876},lqtpu:809846592,myvpm:331901868,ojquj:{dspuk:"bjcacnmch",myozb:982344362,qgruz:[[[{},873573681,[],"isgeaticq",201950093]],[{eecia:{},nfadu:783081670,owopb:["cordoqreu","oxmlppdcx","ppiliylxj"],snebe:914889718,ytgjh:"ptavnucqk"},[851635890,[],["dzgzitwdt","kfnvdzysg","njufqxfom"],[666588621,"mdorzpqwk"],[955033168,"quvvxbbuz","xexcuibwn","bouadagxd","yxkhjjfpb"]],767465233,[],452897114],{dekch:[["jpivpxyez",118080829],["ohrlrdjzn"],{},[]],iqnys:"phnnpfotu",mlcjy:263721271,tvkcc:"zaclheqqx",vcbjc:"gyuiacpzr"},661813609],rnhvm:["vjdxlpkkl",[566788142,{bzjhb:{},fgzjw:74517171,idgri:199739074,sivow:"dmkbzzioy",yojro:742737778},"ggkdmrxex"],[[["uyhbilrxl"],953925882,503340842],544659519]],ymefp:994626157},rrblo:550815222},qjxtc:[],sioyu:[["zbfmfvvpw","jwreslnis","jozhnruqd",604963534,"smdagugyo"],{jefme:"omovzvtrm",ordfh:"tolslmyyl",skvgs:796299953,tpepe:[[{iuqez:551882897,nodzb:{},sdhvp:"veieekuxp",vxqwy:"iyocrznif",yocuk:76220071},97580161],"pnqzblcva","xpkjlowys",["hhcqwnwgl",{cunok:{},eifbq:967121369,hwpjf:[],uxayg:961087968,ybxen:{}},["evxlxryrs",{}]],[{jzuhi:"zuhdvovyq",kuvbb:{},kwllq:"eljoypwwk",vpjgf:[697346600,"mgvzmehhq","htffdgwhi","fptmzavqb"],xirqc:["btdkggmdt",296153196,"kpplvzoje","gfjnktrrd","ffpljorrd"]},182481247,318321506]],xmrzx:"hfqnwfemt"},["hdwoiyhtf",{gcuwq:"xprrhrjhu",gnvza:[[["ugaehllid",732940511,"dluophqcx"],561899878,"avztvosov",{}]],kejey:[776600846,[]],pevzm:672195662,uenwo:{addms:"deoqbtjwr",fcwmd:778872532,kvkli:[["xnjbkwbdf"]],oundv:{grqak:[],lwggv:115539062,pwmpr:["jjvwtazls","kupbeiisg"],rqqcq:{},uktfn:861165258},rlevr:395279913}},[{gfohu:106352283,qcgbc:{egfms:{},hjhmm:[344603595,"xzsjgjjga","djzppzrwh","xpcwrjqhs","holhsukic"],ncnys:939409283,rtxkj:973450176,wekqr:651651297},qevsx:[["pnyzlafuh"],491182696],spcsy:599427271,sxzbx:"dvtetpmxt"},"trdrdpexw",[{hvntn:{},izcbb:255998699,laaba:{},vawcv:{},xlzts:306469880}]],28110651,[793182221,"ttrtgphhb",[954413335,"faofbrils",{auiwq:{},azolq:["vjgiajphg"],cusji:[],fjwgn:262420625,qsizg:"lnbqwvysr"},"oezyevxsa"],488847761,[[{}],634696928,990819569,180190873,{dxqhh:["fktoittme",535027841,"nxfehvudv","iiamgiszz","dfbfwytev"],htopz:["jmcyxuhkn",983296317],nqann:["vyqanofhu"],rokia:["cvaxzpajb","wepbcyaqy","tztylxjnf","nylijrvhb"],tmwnw:"kgsajqlpf"}]]],{duhcr:{juvyk:904036291,pekjr:{llcaq:"msrxnwqpv",ugdvx:26231630,zfcwq:"gzirwoebl",zwgzx:{ddevj:{},ggxzx:"cjvqkgsfg",rnxci:"efpiityic",rpitg:"zhhhtvbuy",tvzmq:["yolhjvken"]},zwuog:"mxmdyvboc"},qqvoy:{acimh:[[75444049,"zoarwfqxf","huwgfsrqc",346364099],{},464567644],gcdqh:[["kzsmhjkas",567975941,"bxartjjqm"],["itkzrfhyc","fhqbxdzqx"],"omsthxcyo",{}],hdwlc:{bvria:["chpmcqwpe","ryspkqfnx","yhrhsxivf","wfdtkposx","hlqgopbyc"],bzlbs:"zkaduvllm",etapm:"xpchwphkh",kcnxs:"ckdmatblq",smzni:369529379},ohwts:667448049,qxmwd:{ijcuj:"xzhobyoxr",jkity:435582408,qjlbj:"piuqbzlho",qvpui:"mjsxiolvx",xlfzh:"bimeqdpuh"}},vojsz:{dqmlf:{gmays:836223694,gwpgp:["pgpozwlaa",587336148],uzlkm:{},vfzlv:"yqbgfbevu",xsvoi:"hmayrcpmr"},ielfn:194386541,lwdil:[[140205530,"zwlayqnpz","vfhqcswbl","qybfmgeta","kbgagsmec"],{},423231302,"nroafxcnp","wcvnixvwg"],tseyc:{fglmn:{},rlxts:["zjmgrkhhs",515677984,7818573,"qatnflksq","dgooxoyhy"],vzymt:"ceqzeurjt",xjaui:423090054,xztgt:149653311},wqohx:"wcjmyyhor"},ytrny:{guepy:{ggrux:{},ilveb:["zkaraydnq"],vefth:{},wfeax:"afnirtfbn",yaaop:["dwbsnayyt","ifighshit",124511855]},lfanj:44233238,nxled:{kbnjn:["ckufynrwb"],odtmu:["ijcmjcadk","kaiabgzfj","iokgxvceq"],oiway:[],shczv:[],ttczm:300270280},ozzie:["llslwbplq",420403131,"xmyrrqupk",{}],skkrt:427132673}},fkhrv:"nnruludoa",gtrfv:[],qjzkp:[{gkeuk:{aggcq:[],cpnfr:"emybbsuvm",erubc:"iigapvzss",jkmeg:"izrgpuhfj",kmcjj:160827207},gpkgx:257872257,syqid:"tmsxaqlpx",zkeza:{edrmp:["nenywyfju","maohzybhp","xfrbggrje","kqgkzejcs",288505281],rqyhe:"rxpmrzaig",srsem:"odyvpmkkg",wmiyj:"vgqjazuem",xjrzh:["hrvpdbbcz","dvyxbuwec",297410592]},zqdkx:[]}],rrnuj:{bloln:{creba:991659862,mjlct:302989685,mwgvr:[["kuqcepmob",341888004,"cwagtsbeu","nfumdsetv","snsncxdri"],508683449],uzmbk:{aiulm:{},egjqk:{},jwcmy:214376458,lcuqf:81171028,ujufk:["wamqjgbbb"]},ymkix:657152285},loeyk:"yyhohoupx",nmbbx:{gcvri:["zoagncvjh",{},767143420,{}],qtskv:{dekac:901032321,ldbpc:{},lnvyn:[],nllxg:901626124,unoky:"hwnyqhxzm"},xcujk:{fzcyb:["prstmhipt",722974991,"lbxnrepfs",337758129],irlcz:[723323112,"junljigof"],lpkce:"uhwyswsoz",mfvfn:{},tdrbv:"dtallhvlx"},xircy:[{},387003762,{},817081281,403163360],zrvku:{cwfpe:{},gftwh:{},gtgof:"sdcdxfpkq",nfhmq:{},veqbg:"sbgvmymuj"}},ryula:{fhpag:"qvtjrgrdz",hlxvt:[918279400,[],"xtocuimzq"],nlcog:245922047,tcoxx:621001175,tubwd:"vkdqmaioa"},xfyjy:"xfwhqufdg"}},[]],wetvl:"uimaptpqz"},vkigu:"pdnenjbhp",ziyek:{cliag:"ttteijlyd",dktwt:{buoij:969907143,crrfl:[{bzjfs:{drngk:[461622594],duczb:"upavmicne",ijzkv:78320866,pxuhs:"udimfodcf",wosay:"gouomksgw"},jfizx:758398749,lyxuk:["ujyedlzca",[["gzxoxivdv","tukqwsmhm"],["ubrerlcik","xgamqbwtr","shojktoip","huegvqyie"]],"ibqzebhwf",{atvng:258791110,riglv:888344636,uzcjq:"hfcbqrvkz",xyqaf:{},ztkem:{}}],rkgnt:"dhjjqzfno",wzpaw:{dexvt:{eilly:"pyntyuzpk",qmhzt:"vxpswfemy",ufxor:["mmdvokwcf","qvcoxafub","xnzwnpxom","drrelfjuy"],yczej:[710664178,"jpusyntoe",6082757,"vhobntvmd",738452442],ymqcy:{}},frvxw:["gjlkahgss",["whbrfpekd"],[133965486,"uznhotrer"],454026462],giqfi:{cjwtl:["sjrksnffk"],jjwir:{},jqkei:"uabbiubsj",kbdpf:{},vjkbj:{}},nzbtx:"mtoymrqib",ocnmk:"wyxyyoidr"}}],gpbyo:{cfbyj:{cgomw:[],glrlo:{gkdok:344197674,njlqp:{pfina:{},ssiqr:430479602,tojxy:["bkxapynfc"],vkdxv:"hmltcfawh",wrtoe:"fstwbrcby"},tccfu:{cityj:["ghlnwrgth","nwbrxovxx","zxxjhrjzd","huheegxfj",960448488],esslg:["zdyetgekk"],owsta:{},qetkv:781710297,yakdq:["osjcikpza",108536352,"vptxxbwlf","afbtahrad",21801452]},utexa:{aujdy:[],brhwe:["rnnlqmosq"],dquqc:119953795,fyvtp:["pikphpdth"],zdwvj:71249065},vbfno:"sabjeeqfr"},ojdwo:262099629,omzxg:"ehxlsxzhb",ptuku:"hymnerelq"},evgnd:{avios:"ygqrtggzo",hrryu:[],jecvd:{bmmen:["zwcgmpzdp"],hesgg:"ipkougytd",iuzvn:[33230140,46287790,594009678],ssxvk:440296605,yfpku:415471308},utklg:[],vdwes:[]},hcyvc:"xacyxrccg",kgiza:"sfvtfbbqd",xqacr:691969822},lysqs:{effou:[{asqgt:"qkriadrqh",mgdyk:"elqiyyiau",nbucf:"bhjqwzvsp",vhsjo:{fivbw:{},spxha:{},wouhu:{},yclic:{},ysdzh:"fdahoyouo"},yixoq:["ubxteldqp",["gtlghfnzs","futasmorv","lodfwzary","bkpxtbiba","ukefwatgz"],144703435,"ktcvxjbqf",{}]},["xigfikfhh",204036852,{bzpdu:{},dzxbh:["ghhkfdrzd","iisurinbd","nbsefaxgv","ntpuyoore","mfmipbkoe"],tkbff:{},yumdv:{},ywari:{}}],"sixcuwpik",721611915,"lwwtwcsxl"],juhsc:830050866,jzrub:["dsrhdponj",{cverr:{aqwkb:["aonmsjois",290876017],csvlm:[44370113,"rwdswjarl","qxzdugycg","suiqntvip","smhsrvxwp"],jbxtb:"veomsdigw",tknln:{},vsuec:"hjxpvaylx"},orwlz:"amzztnfmf",phesj:{aajfo:[516558497,"ahgaiguen","ubgjxabmj"],hzeuo:"lbribzwpn",jiqye:{},laptd:"xrfeaffqr",zssua:{}},pmcxq:{drxto:"yuliljxoh",kbpsm:{},lfsad:"jjepkjqco",ocgfc:{},wfakc:{}},qufoy:"zmbdnctja"},"zkkqnmemu","hgpknpbgm"],tsbls:{flgjr:{eecra:[{},"xvimjhlbw",3037835,"jqwcpyykq","fhxqzwapt"],kjekc:{gottv:[],hxdmz:[],lsbym:{},nmugp:871877306,puqgy:594928056},pdjzq:[{},"chpkqffgf",668929862,{}],qqfgo:{fxwza:709912047,lpbyv:"edlfoorwc",orqsn:387389527,uxyda:780602341,zlebx:{}},uxzmy:[{},"wipnyvbbr","ftxrpvbqc"]},isxfa:"cnvqficmn",mppnf:"qbnwoylzs",ofkzm:780911134,udabs:{ahngk:"nmltuhtbb",erpes:[{},"uxujuiisy","rmabynbcg"],ganus:{gnpzr:230003772,jczkz:182659220,ozwie:{},pogpn:"bofvcuozy",xurtq:"urbnifbyl"},qhlsf:"zostqvnlc",ylduy:[["nrgpwcwev","mgixcruek","anxmoczws"],"ehymrkuhe","zzwguvjcl",814522042,"kfqzkitjx"]}},twhks:["epmesonsx",946580151,[["gqgdsazos","mattxdbqh","ftpihahlo",["iplnjmgjb","qkwzaeasc"]]],{efghc:"opfnozbpp",kejjy:"dsotegnik",kpldc:[["uhbclxonm","pltcfsusr","qqzonecxe","xdwtgifum"],"tkxdqyprb"],vautp:{btfpy:{},ddbcy:["mjqtwpewh","wxftidzgo",259271179],gzjff:{},heykw:{},qqkcg:["jvqtbyggg"]},vcmmk:[686164230,"tlpxljupg",{},"fwffpjggn"]},[]]},tonrh:333220661},epoiu:{kwtil:{hsynz:"spvnijqzb",ndwdl:"zxprllhoi",pptte:{ddkjw:["hbvsxqidg",252481881],oocwn:"agijqflyk",rbupr:942690437,uuavt:[[["gqrnshgzr","dtuhlxmwe"],313183612,{},"tsmomdotc"],{nrbem:["txexxuqet","hrkccgbkv","jztgaigik"],tgjkt:291206281,vsghu:"rdzbmqfrv",xngpf:{},ygapq:128973777},{hxepi:150865526,iyufk:{},ohotf:[481324335,"tstbvcxsb"],oyoij:{},vazmo:374804672},[["oplsiffoe","utpxzovvk",735774094],{}]],vrxeh:{gkidm:{jfnpt:"ecqqbdbba",jyyye:107132573,onvnl:711269759,qlqgt:[],zmfxz:"mjqnozfdu"},htcck:915144898,itdvl:295515695,lxnww:[{},{},[576824584,795217179,"fysymyuzz","phlfyhiei"],{}],uqnaw:700466234}},tevmp:"htsqsnfvb",wpjzj:"yyhirttik"},mpxgv:{cvuvn:"lcjyhixpa",imjba:{jwngm:77477015,kzlng:{dasmc:198730162,ihzxl:399756266,onvrj:"oiotttdek",smnxw:"yalbafcxn",soogw:{arqvg:[517448170,493748733,"hkoxfacvo"],jbwee:"sevxcqbnw",jzbom:["cmmhrwfpk","ewjdjgsia","myjfjuyem","ctghjjjff"],mrxbf:759376009,urdrm:"zfbrwniyi"}},qxpcw:[{dkjdc:930555364,ftjdy:877044722,njzht:"fygabhvzl",pollx:{},vljoe:"pmuakdtmr"},{dobtv:{},faasl:"kgsslarhl",gbazz:262835750,gcuri:209406915,wumnt:{}},403064401],wciqz:321362618,zxwug:[585083762,564374622,[262674071]]},ldsky:"aljafmvdz",witcb:506891178,xdinv:[{lgvcq:456236960,oatgq:180264275,royob:409815,vnrwz:[697504289,238120053,"ereitzlxl",["faiplmqzl","xhrvmfwcx",940742119],{}],xlcsh:"akszifwea"},{gzvoh:726158445,mqerf:568571159,pmpvj:"qlfqphogd",vwhai:{fmrla:883207196,hojmt:"rqjohoewu",qhqju:{},wwvov:[952699029,966807946,376823464,608078205,"qbolayeel"],ypqqk:943966822},zhhmi:[[]]}]},rclkg:[{cqmbz:[],prerv:[{hnsjj:336236960,iodfc:["mfdxknhjr"],tbalq:["jkwzhqaoc",874863140,"nlwixmrxx"],tverz:["ujtkotspi","wibmlrxcb","szkfsvqne","mzvdwgcbr","njflhggpy"],vxuls:{}},{aruxp:{},dbqjh:{},kkfas:["xskwfphtk","qoujuhsvp","rzxjdgzgq",992399200],qvveo:536666480,vpzio:[961471237]},[],[[458630671,"rqxqvevai","ojtxshixg","wvrlbdjyy","ewozfwfwd"],51320210,["vdbznmmxj"],[98830195,"djhsajcjo",540759146],["uuhdikgca","pslvwtjns","vlfugrhev"]],[["idbcacxjc","jkpxglxeh","yjrpdbuks"],{},{},[],{}]],spect:614194515,uxvwv:{cpysv:["diamqrwfe"],flfeq:{ajxsv:{},itofu:61139045,rudia:[897429136,"rdvmvuydx","rjskydvvi","symzpaqbv"],xctae:{},yocmt:"nxfgshfcc"},ihhyk:[{},["zwdovwfhy","hjwrjwyxf","lrzldiscd","mwdtpofrh"],828219643],rdbug:623864930,zzedt:"yezvhnjxj"},ywoby:{abkcn:{bypxk:["dlrewlqsj","npkrlytrc"],etwsf:{},gnbcx:"kvzbahdzo",kfqft:"oamdeedah",lrsjm:"keiqczjvy"},ovqmp:{dxirr:423506327,klfcj:722834523,lgcoq:"debcdzqsw",niboy:"yzvxgawqt",wqnog:"ofingcgqw"},vurls:394336807,wjpfy:{bdjfl:{},clhqv:[110313317,"sxrwtldhu",396011041,"hirbkkqme",359483805],lkvwv:"lzqsrwroh",scycx:709179191,svmbc:{}},yjrpt:511215971}},[551150794,221561165,[[],{rpqmv:["rqxgflero","hsbomysfy","chpnbncki","jadynbgcz",661576312],rtlan:[],sjahe:525852715,uvjln:[],wbsws:["gcfnygvht","uoltazuns"]},{kmxba:"bmbabxomp",meucu:"kvbjojvpu",qafok:674560056,qsgsj:426436465,znaca:"mpkjpzycl"},140026260,{anhiz:["ntgptiwuj","zmhcvgota","iaeqtzqnt"],fujbx:205817837,lmgkq:{},rjwhz:{},zvrrs:940262018}],[],"iwepxkuox"],{agbuu:"cfjspsbqi",atlmb:572089161,gydok:["ejuujfrzx",{djrmg:609808361,grawi:539715290,ksysz:"eqwhavxjx",vphjo:911703876,xrtka:"hhostcicq"}],pzdjy:[288330304,317703314,632894503],rurhy:[]},"yjhfkeexd"],ymzth:[[774046068,924328509,[[{},[]],{jotxs:["xfgvknszy","mttohpvkb","rcldmhgqc","hwqecgjyt",131165709],ltqhy:{},lucnn:[690443923],yggix:{},yyxjj:{}},{ktaaz:"yzvjhpumb",reqqm:613683711,rjaix:{},tnnps:38393543,zcvpo:{}}],[]],392783257,["exefmqysr",172625390,54376883],682316308],zieqe:{mgxhz:{bmphy:[{akrsq:{},erfug:150907720,koowt:[],kxsjh:["limvfrlpm","oooluhfim","nfdehrcqq",283578493,657044604],mzlac:["njdtkwizm","ibxykcdlb",383042704,608579533]},"nfpiugqzp",952000829],exhxh:[],kvrac:361866204,lxdqx:{iombc:{fzacn:"rwwntnrzk",jnuiw:"hoamnwvfe",queni:["awntkpzfp","kecjomipn","jmkhyvxtj","ifrfuvycj"],rbdva:"affnpyjjn",yxsxc:["ulqunciwh","eiiitjqzt","xwrwwaxsx","akjswafbp"]},ipidv:{amewe:646630429,oqerh:{},skfqx:[747419128,"qtiqttdno","lvikczpxv"],szenp:["ylupgpsco","ndurlbsmk"],xcyqb:["zkibcfcjw"]},sezob:166661663,vbcio:{aoqgi:977036833,gzbrx:{},ihmvi:{},vpqsg:"wgvlquktb",zdqls:{}},xrqlx:578764543},nxhbi:[]},sjesj:{fugie:{cowkx:[],cyrlw:667152708,kqilo:{dhkas:[912518397,"zrvmuaxmh"],fmpet:{},pwzvo:["cqmnqeait","hvzsqquvx"],wbked:[],xycxe:{}},mssnj:[["qamoswusk","jvkbnhapb","oggzhezsz",893719122,50010313]],zoqws:"ejcdlrcav"},pjdjm:[],poccz:242469825,zbjqo:{axdbe:{gddog:["gvmplobjl","gjwyqnjno"],kazcd:"evhkundex",lbszk:{},nrmzq:"ubzipafni",oerzj:875354904},hieat:945867406,sxoca:854544752,szbwr:550613890,szizg:[{},[17114151,"ponpwlsra"],["zltwlymhq","bdzhbphmd","gikdgkaur",333215274,"pgbzqslyn"],["cqkpcbskn","zclthntde","rfqsmutlk","emkwxsczt"]]},zfrie:"qydomnoos"},tjiwj:491507610,xnulw:"jtonhvigv",zrbut:"ceerucxtm"}},gzhfh:635937258,nxuhw:"qffkwsrru"}},ibxwe:["scojicysu"],lcsug:[],rycog:"dstdtvefp",saiwi:{hxwmk:{brezx:[272956019,"qjpyigjda"],kifix:483967733,nufla:"jpdgrffgc",obpte:"kiwbxfich",tzrtl:["tsmrhorod",[{cksur:790949563,hnvzw:{anffl:{ayiga:864827896,edigk:["nnnhnadba","nziradkxd","apwgykmfy","safqlxzyq","ienbjuekm"],ezetl:724955509,gfglm:291332564,ktznm:425682669},dfjhm:{hjfqs:{},hqdpo:104364761,rryfy:7439691,vtcyi:{},whmii:["lmhjztrid","nbyuypbre","ageadyayv",451784331]},hukmj:"wyaufiwqd",jumwp:131371301,qjpaa:893064332},mycfy:{bfdbr:{aikrd:{},bnjet:514922753,krkgi:322413150,mevlm:["gyvkodtqs",320601921,"wldmlpkcv"],vlfxg:278169136},byzuq:{avwvk:"twfgvmbum",frkdc:"zqsdgtovv",gbxoz:"anskvvbmg",hxzox:"ngtyayfpp",lwumh:[894199377,207980679,"yhbveposo","oxnqbmsqe"]},cpylm:{bwpfm:{},dfrvy:{},jtnhm:719614905,tzpvg:{},wvmnn:"spolqbrzf"},rorzr:[745871489,"cwxozripp",538778902,[451003286,"xteuonrvh"],{}],weczn:{dalof:{},ikvrt:[874087746],kzykw:{},pvznr:{},suqdg:"vkbiwvziu"}},ndnpa:"pokrnnurc",zlnhx:["hnwrivpuj"]},{efkig:["dihuejatn"],eptgw:["dyjeejyoe",[821102188,{},{}],["ijffnlbhj","buflvxxqf",[554160016,810175136,"xshupbkfc"],"pioqxffnw"],[684343249,763071066,"vtajzkrbg",["mxermnuqr","mszpwnzys","xnrdafdtg","hmtodgoey"]]],fvtnq:{hwgvp:["afbbtejur",250762158],rohlj:462562681,vfdzp:{idktj:"eumbupmrq",ldzwq:["vdcvzwhtp","ztaplbosn",755758214,562549643],ofgrz:["occdpksbk",456873616,"hrxpeszvd",632740206,44936764],ujcrn:29691074,wjmfy:["eiynwqxsk"]},vlido:["yjfibdkdk",43716867],xdojg:"ivvkujzjw"},twcej:"vnvomuoda",vtxxe:[]}],[133614520,[{aqcof:{cpzgd:{},haehf:["xzatvilqq","rfdkjgsvi","nruvnojjz"],oflgz:["vieiydmtf",718618964,"necmduqwg",713472528],pupgm:"fbiqencrr",towkd:339609903},jwihi:["jmfnizojl",{},{},["kaubeucau","cvmjdsorm","jdekrlves"]],lhflh:{dnqbt:410062542,edejx:"squctctkp",guvhy:"wubxwhtus",jfors:{},vevsk:["szkktukya","pmqhvlsjx",290169962,"calfljkjt"]},udhut:[],veyxb:{ewlvu:["qbujirjsm","ubiliorxt","cdpobphpu"],jnkop:{},oromo:["hwkrygmth","ffyqdoszs","ijieoqyxb","xygqhkcba",876176088],umzqv:{},yloma:{}}},"ydofwxldy"],{ffbge:[[58167638],{autxy:"rdejdmyrf",gyjdf:"ygsdxcfbo",nvvud:["upaadzdle","rmntavxue","erimdspeh",298251734],ryxem:7231851,swmws:631756786},[135885094,784403650,"jwdkrewdt",[446087750,552503019,386765996,"qwjffggeu","nniagmtfz"],95069662]],keepq:"ihcmjwuev",mihtk:[],ssmqk:870347323,tiyfj:["ckeaypqvj",[564187120,["kyrjlshdl"]],"nkhslealx",[{},737698721,415780301,386435127]]},170450320,{jcpbv:[657366438,[["ceyjwijey","qgovsfjun","kkqlkttij",673523511],673786136]],rxahh:{hofzf:"lqpifmmmq",lrwwi:{azdhf:141393241,batnb:"xmmvznorg",mbzbv:867749589,pzhbt:["oajaqymji",341753416,"fivuakinu","qwbjfcqpo"],sgevb:{}},okbbi:"lgpdsbimh",vparn:"cdxvmnqri",xsyde:"vaivqoebd"},sbzjg:[639929278],tygur:86470970,vxkmh:263991795}],{gqtrg:"vkmctumxh",ljruv:[],nwwuq:{dfxro:[],gfxsw:[{dsfsy:["rndzwbmag","qzgogyfmx","qdvomuxkp",839689608],gkqms:{},jenwg:{},nflfd:"aftfyelnu",shdak:"lxzeolfpe"},783511118],jbqul:185725508,kcyhd:[42891614,{bqgmf:755134488,dumvq:581465635,gthlf:{},nupxz:380069454,xzsze:"nwxuvixey"},[{},"jnhmfwfaz"],["xnhoatyxh","ftcxogdcy",{},{}],333075609],zdyld:167951594},tjfzs:[{cudyo:"tkpsyxvig",qklkb:29390614,ruuwp:[["drhjpiwwc","fptnpvcwt","yrypxjsgc"],{},995459550,833419198],wsyww:"ethtmpfgg",xfffs:[{},{},{},712651077,"auswwwerf"]},689444455,81903200],wehvo:520842574}]},lbmvo:138561533,nrxce:"udknafpzc",tvfnr:869532555,ynoic:[]}}}]
Benchmarking...
Native JSON x 2,059 ops/sec ±0.25% (92 runs sampled)
JSON5 x 347 ops/sec ±0.74% (87 runs sampled)
JSON6 x 563 ops/sec ±0.36% (92 runs sampled)
JSOX x 210 ops/sec ±0.61% (86 runs sampled)
YAML x 49.49 ops/sec ±4.87% (65 runs sampled)
JSYAML x 215 ops/sec ±0.91% (82 runs sampled)
Custom YAML x 1,982 ops/sec ±0.39% (93 runs sampled)
Fastest is Native JSON
```
</details>
<details>
  <summary>QUEUE</summary>

  Battle details: [code](/battles/queue.js)
```Javascript
> node battle queue

<================SHIFT POP VS. QUEUE================>
Test case 1:
[
  [
    [ true, 472565511 ],    [ true, -1338046223 ],  [ true, -695106601 ],  
    [ true, 1142627667 ],   [ false, -2046240257 ], [ true, 1008098481 ],  
    [ true, -922960531 ],   [ false, -1479513919 ], [ false, -1926851023 ],
    [ false, 731761243 ],   [ false, 2029398391 ],  [ false, -1046152571 ],
    [ true, 447646185 ],    [ true, -735969623 ],   [ true, -3270959 ],    
    [ false, -1172524159 ], [ true, 22500963 ],     [ false, 1910924619 ], 
    [ false, -1339383181 ], [ true, 540206463 ],    [ false, -1711559567 ],
    [ false, 551553849 ],   [ true, 1389979751 ],   [ false, 926533435 ],  
    [ false, -803471953 ],  [ true, -1301082989 ],  [ false, 427050693 ],  
    [ true, 132273973 ],    [ false, -1281111655 ], [ false, 463534061 ],  
    [ true, -1267715059 ],  [ true, 1385127557 ],   [ true, 1811550759 ],  
    [ false, -599704169 ],  [ true, 582617647 ],    [ true, -1952578615 ], 
    [ false, 1628355923 ],  [ true, 1021056791 ],   [ true, 786836801 ],   
    [ true, -656955881 ],   [ false, -810063211 ],  [ false, 1534938457 ], 
    [ true, -1984715689 ],  [ true, -146600567 ],   [ true, -404815451 ],  
    [ false, -777617779 ],  [ true, -874153045 ],   [ true, 1603964471 ],  
    [ false, -532701489 ],  [ true, 580621173 ],    [ true, 2106670793 ],  
    [ false, -1517045669 ], [ false, 1554276641 ],  [ false, -225721521 ], 
    [ false, -862306425 ],  [ true, 974365921 ],    [ false, -1782494545 ],
    [ false, -1310049941 ], [ true, 347256793 ],    [ false, 1714245641 ], 
    [ false, -268686261 ],  [ false, 1972003083 ],  [ false, 1402263871 ], 
    [ false, -1796029383 ], [ true, 1222565233 ],   [ true, 1411787215 ],  
    [ true, -1399416525 ],  [ false, 1490661549 ],  [ false, -1963549911 ],
    [ false, -153735871 ],  [ false, -736829969 ],  [ false, 1643645063 ], 
    [ false, 988692895 ],   [ false, -652559453 ],  [ true, 2035498625 ],  
    [ true, -192985931 ],   [ true, 291037617 ],    [ false, 1062857 ],    
    [ true, 1980856161 ],   [ false, -621039439 ],  [ false, -610587427 ], 
    [ false, 51941823 ],    [ true, -1995327001 ],  [ false, -678736065 ], 
    [ false, 1141039975 ],  [ true, -421049885 ],   [ true, -1384855359 ], 
    [ true, 2101935459 ],   [ true, 603320555 ],    [ true, 1256377419 ],  
    [ true, -1172777573 ],  [ false, -1832532825 ], [ true, 2005814009 ],  
    [ false, 963414553 ],   [ true, 1630805715 ],   [ true, 2063725423 ],  
    [ false, 1459883039 ],  [ true, 922241805 ],    [ true, 296065035 ],   
    [ false, -1051319535 ]
  ]
]
Candidate: Shift Pop
7
Candidate: Queue
7
Benchmark case:
[
  [
    [ false, 1774384325 ],  [ false, -129054237 ],  [ true, -1822434291 ],
    [ true, 1436015271 ],   [ true, -237591417 ],   [ false, -1342668257 ],
    [ true, -1213365533 ],  [ true, -1091088647 ],  [ true, -709598591 ],
    [ false, 722581971 ],   [ false, 213717713 ],   [ true, -1234247655 ],
    [ false, -1768091655 ], [ true, -1064991533 ],  [ true, -2008579973 ],
    [ true, 1344169613 ],   [ true, 1343009643 ],   [ true, -802361739 ],
    [ false, 150541779 ],   [ false, 113735351 ],   [ false, 2109876131 ],
    [ true, 1808955981 ],   [ false, 675667413 ],   [ true, 1671017781 ],
    [ true, -847975459 ],   [ false, -1863868587 ], [ true, -1305782541 ],
    [ true, 1109819651 ],   [ false, -1247064443 ], [ false, 808369139 ],
    [ false, -1040120863 ], [ true, -1133220023 ],  [ true, 2028340303 ],
    [ true, 120359429 ],    [ true, 1135391663 ],   [ true, 554405751 ],
    [ false, -1783235579 ], [ true, -1883920993 ],  [ false, 1603861445 ],
    [ false, -539326213 ],  [ true, 1043319123 ],   [ false, -2039621725 ],
    [ false, -90746601 ],   [ true, 2014942835 ],   [ false, 330623185 ],
    [ false, 983057291 ],   [ false, 555930175 ],   [ false, 1344736247 ],
    [ true, -1983482211 ],  [ false, -1594245817 ], [ true, -2139416831 ],
    [ true, -836331073 ],   [ true, 1393081223 ],   [ false, -1034315755 ],
    [ true, 1070606557 ],   [ true, -987509253 ],   [ false, -374893361 ],
    [ true, -166243141 ],   [ true, -477854651 ],   [ false, 252852205 ],
    [ true, -887911963 ],   [ false, 1428138507 ],  [ false, -737183923 ],
    [ false, 437487755 ],   [ true, -1700504125 ],  [ false, 1387485037 ],
    [ true, 1198081579 ],   [ true, -1187399973 ],  [ false, 1825992235 ],
    [ true, 979377343 ],    [ false, 409760629 ],   [ false, 1043761257 ],
    [ true, 836033165 ],    [ true, 2034550599 ],   [ false, -1584141087 ],
    [ false, -1234140665 ], [ true, -492598799 ],   [ false, -170865095 ],
    [ false, -2096714465 ], [ false, 900388415 ],   [ true, 418511525 ],
    [ true, -488741585 ],   [ false, -1521170743 ], [ false, -809722143 ],
    [ false, -1924646367 ], [ false, -1981798683 ], [ true, 355836175 ],
    [ true, 2093709813 ],   [ true, 1603144529 ],   [ false, 1278786693 ],
    [ true, 712527097 ],    [ false, 433028377 ],   [ false, 1427054121 ],
    [ false, 741130557 ],   [ false, 681124763 ],   [ false, 1865733051 ],
    [ false, -270526401 ],  [ false, -97585623 ],   [ true, -234341769 ],
    [ false, 1188671019 ],
    ... 9900 more items
  ]
]
Benchmarking...
Shift Pop x 4,082 ops/sec ±0.32% (90 runs sampled)
Queue x 3,298 ops/sec ±0.61% (88 runs sampled)
Fastest is Shift Pop
```
</details>
<details>
  <summary>SORT - FLOATS</summary>

  Battle details: [code](/battles/sort.js)
```javascript
> node battle sort

<================SORT FLOAT NUMBERS================>
Test case 1:
[
  [
     -9, -70, -32, -79, -97,  20, -41,  89,  51,  49,  -78,  77,
    -82, -75, -51,  17, -91, -46, -22, -67, -92,   9, -100,  36,
    -25, -37, -15,  -4,  36, -22, 100, -86,  13, -79,   18,  -1,
    -95, -81,  63,  42,   0,  68, -72,  91, -44, -86,  -79,  87,
     16,  93, -23,  85,  95, -76,  16, -53,   8,  16,    3,  11,
     89, -67, -99,  91, -89,  87, -85,  30, -78, -34,   -8,  -5,
    -87,  92, -73, -96,  63,  60, -65, -32, -27,  86,   13,  -4,
    -16, -14, -54, -50,  75, -86, -66, -99,  82, -70,    8, -81,
     19,  49,  15, -83
  ]
]
Candidate: Default
[
  100,  95,  93,   92,  91,  91,  89,  89,  87,  87,  86,  85,  
   82,  77,  75,   68,  63,  63,  60,  51,  49,  49,  42,  36,  
   36,  30,  20,   19,  18,  17,  16,  16,  16,  15,  13,  13,  
   11,   9,   8,    8,   3,   0,  -1,  -4,  -4,  -5,  -8,  -9,  
  -14, -15, -16,  -22, -22, -23, -25, -27, -32, -32, -34, -37,  
  -41, -44, -46,  -50, -51, -53, -54, -65, -66, -67, -67, -70,  
  -70, -72, -73,  -75, -76, -78, -78, -79, -79, -79, -81, -81,  
  -82, -83, -85,  -86, -86, -86, -87, -89, -91, -92, -95, -96,  
  -97, -99, -99, -100
]
...
Outputs are identical
Test case 2:
[
  [
     -41.16101714303571,  -23.32059748211033,   50.60524732701106,   
      4.895690515861332,   92.44641520440325,   40.89242855824091,   
       9.90213888578117,   35.24886573627467,  18.826621181473783,   
    -11.020057938125035,   81.30652922522344,  -90.66377710352724,   
      49.94517230068766,   59.39618275584917,    51.6887830343434,   
     -90.57428815902897,  -53.96349534106895,  0.1940420603857831,   
     13.626055012732635,   -81.1151018936163,  -75.32828834050385,   
     -99.15511545968782,  -99.38552097523493, -12.239087975106287,   
    -28.564305983285237,  -85.96491265838715,  51.775825839573656,   
     51.921798454427886,   96.53602200159375,  -72.95522961275589,   
      84.66709156680469,   73.24190321314578, -32.555117485730634,   
      -81.7966792124392,   77.45544037177612, -23.887954185063137,   
      5.782461648938892,   44.63931016278298,   9.329169030116887,   
     -50.12817261538984,  12.542537243031575,  56.214580702276294,   
     -73.25681543350737,   -72.6158910656134,  31.571284809357707,   
     -45.77994812174091,   53.60274702086093,  59.565837473416536,   
     -42.52392638454388,   20.68503199447332,   89.91461107380184,   
       89.1818906449796,  -84.58652323657824,  -70.92617110639834,   
    -17.658153184486963,  -93.73242218615086, -37.959642891168464,   
    -33.674071399881726,   76.05178308018074,   -1.84858365716903,   
     -87.87127551732237,   93.32467367077962,  -98.22168399541967,   
      84.81617212636979,   5.122838201700475, -47.921963714569536,   
      50.96755075324856,  -74.01235971264714, -16.468583551866217,   
     -56.33298193102778,  -4.215570577856681,   78.10463146565678,   
    -62.490089854502486,   51.11549073754395,   94.50237840366623,   
     -34.99535520689952,  -58.61473984715526,  1.1280989959058445,   
     55.130301704768584,   -7.23404424604648,   79.09227209755744,   
      -51.1511403106931,    -90.049723626425, -13.487807240012287,   
      21.85127678998522,  -79.57003271351644, -26.319721381319326,   
    -30.574557492027353,   9.168351924227736,   82.82628593949647,   
      35.12932782171001,   97.04858612218996,   57.64410943505743,   
     -34.55484782553184, -16.700650698462297,    75.5852902210842,   
      62.47909719574798,  -71.65346042661338,   75.07178891912267,   
     1.4210288932539896
  ]
]
Candidate: Default
[
    97.04858612218996,   96.53602200159375,   94.50237840366623,     
    93.32467367077962,   92.44641520440325,   89.91461107380184,     
     89.1818906449796,   84.81617212636979,   84.66709156680469,     
    82.82628593949647,   81.30652922522344,   79.09227209755744,     
    78.10463146565678,   77.45544037177612,   76.05178308018074,     
     75.5852902210842,   75.07178891912267,   73.24190321314578,     
    62.47909719574798,  59.565837473416536,   59.39618275584917,     
    57.64410943505743,  56.214580702276294,  55.130301704768584,     
    53.60274702086093,  51.921798454427886,  51.775825839573656,     
     51.6887830343434,   51.11549073754395,   50.96755075324856,     
    50.60524732701106,   49.94517230068766,   44.63931016278298,     
    40.89242855824091,   35.24886573627467,   35.12932782171001,     
   31.571284809357707,   21.85127678998522,   20.68503199447332,     
   18.826621181473783,  13.626055012732635,  12.542537243031575,     
     9.90213888578117,   9.329169030116887,   9.168351924227736,     
    5.782461648938892,   5.122838201700475,   4.895690515861332,     
   1.4210288932539896,  1.1280989959058445,  0.1940420603857831,     
    -1.84858365716903,  -4.215570577856681,   -7.23404424604648,     
  -11.020057938125035, -12.239087975106287, -13.487807240012287,     
  -16.468583551866217, -16.700650698462297, -17.658153184486963,     
   -23.32059748211033, -23.887954185063137, -26.319721381319326,     
  -28.564305983285237, -30.574557492027353, -32.555117485730634,     
  -33.674071399881726,  -34.55484782553184,  -34.99535520689952,     
  -37.959642891168464,  -41.16101714303571,  -42.52392638454388,     
   -45.77994812174091, -47.921963714569536,  -50.12817261538984,     
    -51.1511403106931,  -53.96349534106895,  -56.33298193102778,     
   -58.61473984715526, -62.490089854502486,  -70.92617110639834,     
   -71.65346042661338,   -72.6158910656134,  -72.95522961275589,     
   -73.25681543350737,  -74.01235971264714,  -75.32828834050385,     
   -79.57003271351644,   -81.1151018936163,   -81.7966792124392,     
   -84.58652323657824,  -85.96491265838715,  -87.87127551732237,     
     -90.049723626425,  -90.57428815902897,  -90.66377710352724,     
   -93.73242218615086,  -98.22168399541967,  -99.15511545968782,     
   -99.38552097523493
]
...
Outputs are identical
Test case 3:
[
  [
    -99910, -82023,
    -74552, -40835,
    -38038, -30278,
    -16132,  42124,
     61096,  80102
  ]
]
Candidate: Default
[
   80102,  61096,
   42124, -16132,
  -30278, -38038,
  -40835, -74552,
  -82023, -99910
]
...
Outputs are identical
Test case 4:
[
  [
     70,  56,  52,  25,   5,   4,  -6, -11, -27,  91,  91,  54,      
     25,  13, -29, -35, -60, -79,  83,  78,  44,  -2, -14, -70,      
    -79,  87,  39,  24,   9, -48, -53,  74, -61, -63,  97,  67,      
     59,  46,  37,  35, -32, -45, -52, -64,  90,  66,  20, -54,      
     94,  62,  82,  68,  39,  31,   8,  -8, -12, -31,  77,  46,      
    -94,  95,  56,  56,  36,  32,  -1, -13, -26, -61, -72,  90,      
     19, -21, -23, -24, -95,  98,  61,  60, -60, -98,  93,  76,      
     26, -10, -13, -18, -18, -43,  -7, -30, -83, -85,  91,  89,      
     82, -23, -36, -99
  ]
]
Candidate: Default
[
   98,  97,  95,  94,  93,  91,  91,  91,  90,  90,  89,  87,        
   83,  82,  82,  78,  77,  76,  74,  70,  68,  67,  66,  62,        
   61,  60,  59,  56,  56,  56,  54,  52,  46,  46,  44,  39,        
   39,  37,  36,  35,  32,  31,  26,  25,  25,  24,  20,  19,        
   13,   9,   8,   5,   4,  -1,  -2,  -6,  -7,  -8, -10, -11,        
  -12, -13, -13, -14, -18, -18, -21, -23, -23, -24, -26, -27,        
  -29, -30, -31, -32, -35, -36, -43, -45, -48, -52, -53, -54,        
  -60, -60, -61, -61, -63, -64, -70, -72, -79, -79, -83, -85,        
  -94, -95, -98, -99
]
...
Outputs are identical
Benchmark case:
[
  [
    -960,  336,  700,  222,  -49, -618,  127,
     323,  930,  974, -328,  913, -993,  -61,
     281, -679,  187,  544,   49, -733,  886,
    -999, -999,  563, -272,  311, -498,  942,
     150,  902,   88, -782, -964,  462, -834,
    -385, -802, -653, -244, -172,  835, -972,
     572, -731,  647, -230, -824,  961, -150,
    -859
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 196,974 ops/sec ±0.58% (92 runs sampled)
TimSort x 267,085 ops/sec ±0.86% (90 runs sampled)
QuickSortOld x 504,020 ops/sec ±1.67% (90 runs sampled)
QuickSort x 759,050 ops/sec ±0.98% (89 runs sampled)
QuickSortMed3 x 686,276 ops/sec ±0.97% (91 runs sampled)
IntroSort x 204,994 ops/sec ±4.84% (86 runs sampled)
Fastest is QuickSort
Benchmark case:
[
  [
    -115,   26,  893, -889,  769, -170, -901,  301, -290, -180,  294,    
    -294, -393, -695, -485, -247,  197, -664, -477,  559, -304, -538,    
     230,  749, -482, -426,   82,  358,  147, -760,  772,  848, -160,    
    -474, -459, -218, -371,  998,   68, -881, -727,  -88, -767, -217,    
    -788,  882, -429,  -43, -307, -458,  861,   35, -125,  806, -403,    
    -907,   43,  -16, -569, -306, -303, -102,  727,  364,  748,  464,    
    -729, -163,  535, -817,  502, -845,   33,  970,  367, -783,  722,    
     321,  120,  232,  471,  535, -698, -475,  732,  957,   33, -454,    
     206, -696, -390,  898, -723,  836, -319,  437,  796,  970, -130,    
    -289,
    ... 900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 4,628 ops/sec ±0.55% (94 runs sampled)
TimSort x 11,138 ops/sec ±0.67% (93 runs sampled)
QuickSortOld x 12,686 ops/sec ±0.38% (93 runs sampled)
QuickSort x 15,302 ops/sec ±0.23% (95 runs sampled)
QuickSortMed3 x 16,189 ops/sec ±0.71% (91 runs sampled)
IntroSort x 9,658 ops/sec ±0.55% (93 runs sampled)
Fastest is QuickSortMed3
Benchmark case:
[
  [
        613607054160148,  -831517673570924.2,  303005097269452.25,   
        353422193222790,   695216375435658.8,  -585760771508464.2,   
      728935525478500.5,     963532227198738,   894507367541803.5,   
       -919181820520107,  -511147314021596.5,     984635780341370,   
     -693763278742812.5,     338255750429456,  -999221671019965.2,   
     -616282557779337.4,   889078796642637.8,   872632786060374.8,   
     -530896154739187.5,   243615937038403.5,  -933213074074981.5,   
     -750744454310179.4,  -7095478021836.875,     389141516060448,   
     -712509652526906.1,  -6619712205873.125,     660602226292652,   
    -179653463271269.88,     351721063761664,   752964530509100.2,   
      644704013952290.5,   72299655197770.88,     632206963450559,   
        522469200720156,  29913322855792.375,  -643108743611121.8,   
     -880011885306010.9,    67733684897457.5,  -766649341041230.5,   
     -929763647229778.5, -316063103583103.25, -266008136306907.38,   
     203077930514105.75,  -978654199548820.2,    -410528465907182,   
        247116526971232,    -186031880896746,  -805648580712345.9,   
      633868845129648.2,  236919961466311.25,   977174448219828.2,   
      51216577911355.75,     713039786433228,   479356736472277.5,   
       90289098740988.5, -251638791409966.75,   846220068707243.8,   
      928226535480545.2,  -90835944867175.38, -516545594266852.44,   
     -307441457075365.9,  -561641606182017.3, -478616921211191.06,   
    -200937244200709.12,  164963172656136.25,   240051610279920.5,   
       -579534472467171,   597866870395162.8,  -950770140529530.6,   
        563105585840991,  -696418068818002.4, -34511903892172.875,   
     446003172868011.25,  253518435116678.75,   815213666519588.8,   
        789810341968466,  -577064935689800.2,   568289782415100.2,   
     -949172980974185.8, -198491893084998.12,   985961584510328.2,   
    -281126316053167.62,   235450800584228.5,  -641533628320458.2,   
      851188748328708.8,  159664233675264.75,   -54263351885389.5,   
      692743113067058.5,  482662942615642.75, -419770673699779.25,   
        615758234002950,  -865959028022679.9,   780066784588581.8,   
        801346082602325,     367237964914659,   752458492074066.2,   
       91131276842745.5,    -922993231225909,  -6179096858661.875,   
     -357502426181877.5,
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 1.13 ops/sec ±5.66% (7 runs sampled)
TimSort x 3.77 ops/sec ±2.64% (14 runs sampled)
QuickSortOld x 6.49 ops/sec ±0.28% (20 runs sampled)
QuickSort x 7.90 ops/sec ±0.33% (24 runs sampled)
QuickSortMed3 x 7.76 ops/sec ±0.82% (24 runs sampled)
IntroSort x 5.62 ops/sec ±2.12% (19 runs sampled)
Fastest is QuickSort
Benchmark case:
[
  [
    -100000, -100000, -100000, -100000, -99999, -99999, -99999,      
     -99998,  -99998,  -99998,  -99998, -99997, -99997, -99997,      
     -99996,  -99996,  -99996,  -99996, -99996, -99996, -99994,      
     -99994,  -99994,  -99994,  -99994, -99993, -99993, -99992,      
     -99992,  -99992,  -99992,  -99992, -99991, -99990, -99990,      
     -99990,  -99990,  -99990,  -99990, -99990, -99989, -99989,      
     -99989,  -99989,  -99989,  -99989, -99989, -99989, -99988,      
     -99988,  -99988,  -99988,  -99988, -99987, -99987, -99987,      
     -99987,  -99986,  -99986,  -99986, -99986, -99985, -99985,      
     -99985,  -99984,  -99984,  -99984, -99984, -99984, -99983,      
     -99983,  -99983,  -99983,  -99982, -99982, -99982, -99982,      
     -99982,  -99982,  -99982,  -99982, -99982, -99982, -99981,      
     -99981,  -99981,  -99981,  -99981, -99980, -99980, -99979,      
     -99979,  -99979,  -99979,  -99979, -99978, -99978, -99978,      
     -99978,  -99978,
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 5.35 ops/sec ±1.77% (18 runs sampled)
TimSort x 4.59 ops/sec ±3.77% (16 runs sampled)
QuickSortOld x 13.61 ops/sec ±2.07% (37 runs sampled)
QuickSort x 15.08 ops/sec ±0.51% (41 runs sampled)
QuickSortMed3 x 10.19 ops/sec ±0.65% (29 runs sampled)
IntroSort x 16.83 ops/sec ±0.70% (45 runs sampled)
Fastest is IntroSort
Benchmark case:
[
  [
    999787883319748.5,   999702133718697,   999556226917885, 999342882234882.5,
    999077649310658.8,   998951121614077, 998917714613520.5, 998893569279296.8,
    998804988589659.8, 998657877036898.8,   998494355291955,   998464099460452,
    998389812136675.2,   998325422696412, 998250216305058.8,   998232840193447,
    998091973336886.8, 998086864074470.5, 998007850442350.8,   997730535311946,
    997302121030567.8, 997268171208713.5, 997141752153535.5, 996878636990955.8,
    996716126277400.8, 996473446044035.5, 996462315165316.8, 996263403162582.2,
      996065414866158, 995979785062573.8, 995917413341660.5, 995874243297533.5,
    995687805251477.2, 995667082615480.8,   995632374094372, 995252453037852.8,
    995246288362051.8, 994958031856877.5,   994768987466068, 994516662374725.8,
      994407916469994,   994359406017817, 994076616425273.2, 993770218235234.2,
      993651090077499,   993589544135943,   993566177168698, 992993639245305.2,
    992982304253027.2,   992792349911721,   992041288012762, 991439112927122.5,
    991201330605617.8, 991092262551343.5, 991065437291211.5, 990081007296537.2,
    989911478755808.5, 989878877030805.2, 989730705882615.2, 989682743337492.5,
    989657819965459.2, 989583989997595.5,   989500455377685, 989491948511530.8,
    989382095388037.5, 988982232291525.5, 988838358476299.8, 988504892227132.5,
    988447539829652.5,   988341027162408, 988142135102876.2,   988055934364556,
    987993227176095.2, 987865065081506.5, 987423682933330.5, 987385325283357.8,
    987303616290363.5,   987265801827947, 987032599101343.2,   986937343434994,
    986917374102490.8,   986792218269367, 986728334404110.5, 986699784977344.8,
    986418272992657.5, 985900152771084.8, 985779547720876.5, 985724850196098.8,
    985488604896551.8, 985472978332757.5,   985386613983820, 985357131298527.2,
    985277834014522.2, 985143985952210.8, 984575144100711.2, 984124379096722.5,
      983970926706442, 983826410716332.2, 983775479850751.2, 982722422590025.5,
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 1.17 ops/sec ±4.48% (8 runs sampled)
TimSort x 3.85 ops/sec ±1.69% (14 runs sampled)
QuickSortOld x 6.55 ops/sec ±0.38% (21 runs sampled)
QuickSort x 7.78 ops/sec ±0.66% (24 runs sampled)
QuickSortMed3 x 7.77 ops/sec ±1.23% (24 runs sampled)
IntroSort x 5.65 ops/sec ±1.83% (18 runs sampled)
Fastest is QuickSort,QuickSortMed3
```
</details>
<details>
  <summary>SORT - INTEGERS</summary>

  Battle details: [code](/battles/sortint.js)
```javascript
> node battle sortint

<================SORT 32-BIT UNSIGNED INTEGERS================>
Test case 1:
[
  [
    61036, 67110, 53126,
    52950, 77183,  9076,
    46344, 18555, 54272,
    60554
  ]
]
Candidate: Default      
[
   9076, 18555, 46344,  
  52950, 53126, 54272,  
  60554, 61036, 67110,  
  77183
]
...
Outputs are identical
Test case 2:
[
  [
     35740, -75242,
    -26948,  59169,
    -73706,   5055,
    -65351, -14224,
     76843,  97295
  ]
]
Candidate: Default
[
  -75242, -73706,
  -65351, -26948,
  -14224,   5055,
   35740,  59169,
   76843,  97295
]
...
Candidate: CountingSort
[
    5055,  35740,
   59169,  76843,
   97295, -75242,
  -26948, -73706,
  -65351, -14224
]
Outputs are different (2 groups: Default, TimSort, QuickSort, RadixSort | CountingSort)
Benchmark case:
[
  [
     200,  924,  964,   66, -788, -307, -456,  150, -550,  -76,      
     686,  298, -440, -553,  988, -642, -250, -394, -654,  533,      
     -97, -790,  395, -314,  166,  703,  348,  677, -781,  436,      
      47,  927, -159, -482,  817, -597, -725,  -48, -234, -318,      
    -339,  384, -411, -591, -300, -381, -692,  711,  -83, -425,      
     727, -933, -938, -551,  274, -612,  598, -860, -968, -644,      
    -347,  228, -975,  929,  862, -832,  862, -927, -529,  335,      
    -692, -308,  470,  324,  484,  382,  435, -184, -243,  162,      
     978, -125,  609, -235,  -64, -454, -525, -194,  790,  280,      
     234, -880, -158, -996,  706,  655, -940, -113, -470,  853       
  ]
]
Checking outputs...
Outputs are different (2 groups: Default, TimSort, QuickSort, RadixSort | CountingSort)
Benchmarking...
Default x 82,527 ops/sec ±0.62% (89 runs sampled)
TimSort x 247,484 ops/sec ±2.07% (89 runs sampled)
QuickSort x 418,271 ops/sec ±0.26% (94 runs sampled)
RadixSort x 152,631 ops/sec ±0.97% (91 runs sampled)
CountingSort x 20,940 ops/sec ±1.82% (88 runs sampled)
Fastest is QuickSort
Benchmark case:
[
  [
    882, 304, 748, 743, 669, 722, 313, 466, 652, 361, 464, 965,      
    634, 469, 131, 299, 463, 739, 738, 125, 591, 857, 638, 777,      
    469, 865, 873,   2, 323, 948, 864, 148, 330, 123, 132, 561,      
    388, 632, 335, 434, 174, 408, 612, 196, 363, 147, 836, 909,      
    622, 662, 299, 306, 765, 478,  45, 192, 496,  82, 177, 197,      
    671, 776, 934, 432, 746, 230, 556, 982,  41, 178, 375, 324,      
     54,  47, 159, 905, 764, 804, 521, 413, 954, 636, 413,  10,      
    494,  19, 880, 336, 183, 741, 494, 800,  25, 627, 291, 384,      
    788, 999, 221, 127,
    ... 900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 4,991 ops/sec ±1.07% (93 runs sampled)
TimSort x 11,578 ops/sec ±0.82% (92 runs sampled)
QuickSort x 17,570 ops/sec ±1.22% (89 runs sampled)
RadixSort x 36,818 ops/sec ±0.66% (95 runs sampled)
CountingSort x 11,911 ops/sec ±0.75% (92 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
    -359, -543, -440, -283,  -53, -149,  -18, -249, -323, -417,      
    -715, -741, -665, -463, -330, -682, -465, -228,   -5, -790,      
    -522, -458, -643, -748, -923, -863, -633, -801, -551,  -66,      
    -927, -106, -582,  -83, -420, -999, -589, -797, -777, -505,      
    -450, -228, -289, -202, -577, -856, -716, -666,  -94, -175,      
    -634, -418, -110, -104, -295, -483, -207, -514, -662, -231,      
    -720, -318, -816, -525, -128, -849, -911, -817,  -78, -655,      
    -195,  -88, -757, -237, -926, -824, -453, -137,  -21, -971,      
    -591, -592, -804, -171, -964, -184,  -13, -516, -744, -755,      
    -376, -827, -441, -464,  -95, -291, -551, -849, -979, -981,      
    ... 900 more items
  ]
]
Checking outputs...
Outputs are different (2 groups: Default, TimSort, QuickSort, RadixSort | CountingSort)
Benchmarking...
Default x 4,991 ops/sec ±0.72% (90 runs sampled)
TimSort x 11,593 ops/sec ±0.92% (92 runs sampled)
QuickSort x 17,779 ops/sec ±1.03% (93 runs sampled)
RadixSort x 37,368 ops/sec ±0.17% (91 runs sampled)
CountingSort x 1,918 ops/sec ±1.27% (92 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
     440, -413,   78, -721, -825, -297,  262,    4,  603,  146,  668,     
     122, -387,  898, -595,  735,  399,  302,  518,  899,  606,  307,    
    -712,  -33,  769, -962,  259, -756,  -94, -217,  746,  133,  430,    
     566, -213, -320, -894,  875,  330,  -93,  567,  639,  116, -436,    
    -922,  -67, -798,  200,  200,  797,  548, -449, -728,  -30,  464,    
    -796, -208,  310,  386,  778, -462,  603,   62, -136, -853, -132,    
     -65,  989, -703,  253, -348, -483,  147,  620,  -73, -877,  758,     
     158,  655,  -51, -988, -538,  913, -233, -344, -869, -337, -402,    
    -673,  290,  -58, -513,  268,  828,   24, -562, -286,  336,   87,    
    -819,
    ... 900 more items
  ]
]
Checking outputs...
Outputs are different (2 groups: Default, TimSort, QuickSort, RadixSort | CountingSort)
Benchmarking...
Default x 4,995 ops/sec ±0.68% (93 runs sampled)
TimSort x 11,634 ops/sec ±0.58% (93 runs sampled)
QuickSort x 18,108 ops/sec ±0.24% (94 runs sampled)
RadixSort x 34,434 ops/sec ±0.81% (95 runs sampled)
CountingSort x 2,787 ops/sec ±0.73% (90 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
    -54443,  97760, -86838, -26123,  -8128,   -238, -77442, -26465,  
    -25683, -91918, -87556,  13217, -13996, -47316, -52129,  50683,  
     -1535,  92218, -81771,  56267,  75424, -86764, -41395,  99941,  
    -80098,   3370, -81325,  46695,  92629, -17943, -48434, -41945,  
     37636,   5317,  27840,  76772,  97685,  94498, -82365,  20075,  
      5240, -10954,  26785, -51764,  24473, -31947,  32868,  84585,  
    -17788,  15723,  53121,   1402, -71971,  25168,  24273,  76557,  
     14105,  97223,  27560,   4200, -98895,  73641, -18631,  17547,  
     57625,  40266,   5864,  68988,  -9912,  40683, -24198,  33645,  
     -4799, -20165,   9093, -22537, -79877, -77205, -76465,  89086,  
     88947, -34893,  56502, -81710, -61632,  49438,  54065, -96921,  
    -43641,  93806, -66332,  54429,   4762, -21948,  58033,  32718,  
     46497,  48901,  72656, -91833,
    ... 99900 more items
  ]
]
Checking outputs...
Outputs are different (2 groups: Default, TimSort, QuickSort, RadixSort | CountingSort)
Benchmarking...
Default x 29.84 ops/sec ±1.00% (53 runs sampled)
TimSort x 57.63 ops/sec ±0.74% (72 runs sampled)
QuickSort x 95.54 ops/sec ±0.45% (79 runs sampled)
RadixSort x 330 ops/sec ±0.54% (86 runs sampled)
CountingSort x 15.27 ops/sec ±1.50% (41 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
     1480095888,    80490980, -1148367679,  1894641063,   703357404, 
     -412356284, -1274627256, -1146464115,   569282406,  1703586817, 
     1777011739,   545626995,   293823603, -1023372623,  1334237802, 
     1064066023,  1271770835,  -277889976,   154440505, -1777779144, 
     -298749009,   704064757,  1264528783,  -348508797,  -827442672, 
     1783789547,  -914016730, -1367159547,  -371139994,  -621087982, 
     -124677523,   807894506,   518377980,   647760741,   -25203961, 
      324792512,   274148217, -1544702008,  -762264841,  1936758835, 
    -1074553222,   -72186597,  1154139775,  1656182936, -1248962849, 
      982333376,  1043216847,  1943444969, -1365442538, -1200857251, 
     1022174289,  -871227394,  1707949825,  -799626869, -1460347409, 
    -1022012083,  -995114155,  -192249750,   790716413, -1544251986, 
    -1989121112,    91728971,  -308708710, -1923316038,  -790071894, 
     -926797366,  -955414632,  -455261997,  1769673261,   975956049, 
     -490768344,    15083011,  1934338622, -1377342051,   146759192, 
    -1249087992,  1328431332,  -138954844, -1949208436,  -153113838, 
    -1516972819, -1934839046,  -645528174,  -361611734,   775536328, 
      867228238,  1831288314,   656666712, -1980985944,  -674106598, 
     -217498705,  -515841737, -1801158845,  1638774743,  1065589965, 
     1972831642, -1274144613, -1900163252,  1298431388, -1943211633, 
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are different (2 groups: Default, TimSort, QuickSort, RadixSort | CountingSort)
Benchmarking...
Default x 2.19 ops/sec ±2.67% (10 runs sampled)
TimSort x 4.29 ops/sec ±1.16% (15 runs sampled)
QuickSort x 7.26 ops/sec ±1.39% (22 runs sampled)
RadixSort x 30.18 ops/sec ±3.05% (53 runs sampled)
CountingSort x 0.57 ops/sec ±5.11% (6 runs sampled)
Fastest is RadixSort
```
</details>
<details>
  <summary>REDUCE & LOOP</summary>

  Battle details: [code](/battles/reduce.js)
```javascript
> node battle reduce

<================REDUCE vs. LOOP================>
Test case 1:
[ [
    19, 14, 48, 45, 40,
    20, 81, 62, 17,  2 
  ] ]
Candidate: For index   
{
  '2': null,
  '14': null,
  '17': null,
  '20': null,
  '40': null,
  '45': null,
  '48': null,
  '62': null,
  '81': null
}
Candidate: For of      
{
  '2': null,
  '14': null,
  '17': null,
  '19': null,
  '20': null,
  '40': null,
  '45': null,
  '48': null,
  '62': null,
  '81': null
}
Candidate: Reduce
{
  '2': null,
  '14': null,
  '17': null,
  '19': null,
  '20': null,
  '40': null,
  '45': null,
  '48': null,
  '62': null,
  '81': null
}
Outputs are identical
Benchmark case:
[
  [
     72, 570, 273, 781, 124, 853, 620, 979, 665, 790, 523, 805,
    756, 538, 273, 680, 170, 979, 162, 183, 904, 540, 725,   6,
    304, 638, 225, 840, 478, 102, 908, 324, 398, 422, 523, 537,
    721, 135,  25, 976, 405, 899, 224, 588,  99, 179, 768,  13,
      8, 487, 681, 482, 928, 426,  51,  47, 126, 582,  81, 764,
    420, 419, 581, 794, 582, 911, 427,  31,  68, 185, 321, 219,
    312, 812, 345, 804, 585, 785, 395,  29,  76, 876, 474, 223,
    148, 252, 266, 891,  62, 561,  10, 309, 351, 360, 746, 237,
    891,  17, 578, 810,
    ... 900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
For index x 51,428 ops/sec ±2.31% (85 runs sampled)
For of x 50,839 ops/sec ±1.69% (90 runs sampled)
Reduce x 52,854 ops/sec ±7.48% (91 runs sampled)
Fastest is For index
Benchmark case:
[
  [
    4333, 3750, 9365, 2409, 7189, 8766, 9803, 7263, 6890, 4281,
    8815, 1926, 8425,  437, 9865, 6332, 7761, 7440, 8227, 9060,
    1190, 1782, 4300, 1761, 1631, 8950, 3244, 7458, 3222,  561,
    9432, 3703,  461, 9994, 1220, 4641, 7203, 7740, 9793, 6581,
    1557, 3535, 8195, 3936, 3572, 7627, 5495, 7078, 6361, 2373,
    3059, 6077, 4255, 5648, 6034, 5036, 1794, 6918, 2139, 1196,
    1752, 3595, 2137, 7432, 4823,  742, 6729, 7384,  398, 2250,
    1820, 7142, 8027, 9901, 9516, 3699, 8108, 5575, 9714, 3250,
    5780, 7127,  535, 1839, 7597, 1351,  698, 1358, 8346, 8522,
     814, 3012, 6825, 1084, 5133, 6803, 9228, 5477, 9630, 4702,
    ... 9900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
For index x 1,388 ops/sec ±1.37% (91 runs sampled)
For of x 1,360 ops/sec ±0.95% (88 runs sampled)
Reduce x 1,392 ops/sec ±0.80% (91 runs sampled)
Fastest is Reduce,For index
Benchmark case:
[
  [
    59413, 26141, 66596, 79931, 71001, 32911, 12163, 80330,
     2735, 23824, 30346, 52157, 67627, 41202, 55141, 97167,
    12738,  7225, 80172, 29582, 98932, 30420, 35931, 64484,
    11299, 36026, 50365, 23446, 44643, 58708, 51788, 98271,
    35696, 97842, 59597, 98804, 64625, 49110, 78938, 83303,
    67448, 94223,  3299, 64526, 44159, 69773, 61202, 27002,
    23075, 12461, 12914, 30586, 79260, 87236, 32098, 34757,
    64494, 86264,  3860, 73460, 15235, 18584, 29044, 14450,
    46282, 65126, 85996, 13845, 71749, 68042, 74367, 42344,
    81495, 86622, 87983, 42966, 28628, 62571, 60251, 12764,
    28716, 97530, 32212, 25808, 29400, 91641, 88873, 61912,
    27214, 71316, 98122, 33663, 87237, 91546, 72696, 59303,
    98516,  7272, 41198, 76642,
    ... 99900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
For index x 82.53 ops/sec ±4.05% (69 runs sampled)
For of x 88.85 ops/sec ±1.55% (74 runs sampled)
Reduce x 85.39 ops/sec ±1.73% (71 runs sampled)
Fastest is For of
Benchmark case:
[
  [
    955, 539, 711, 226,  80, 414, 978, 745, 901,  45, 294, 652,
    407, 252, 921, 288, 437, 306,  69, 335, 839, 647,  13, 305,
     15, 407,  15, 323, 932, 209, 450, 490, 468, 368, 258, 171,
    277, 887, 750, 864, 336, 849, 905, 878, 181, 895, 407, 433,
    828, 559, 648, 649, 173,  32,  55, 183, 141, 208, 780, 917,
    985, 280, 794, 980, 931, 887, 283, 694, 196, 564, 966, 300,
    360, 788, 227, 962, 207, 931,   2, 349, 265, 786,  99, 594,
     43, 454, 954, 144, 677, 736,  54, 787, 360, 935, 442, 784,
    581, 406, 449, 703,
    ... 99900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
For index x 806 ops/sec ±1.31% (89 runs sampled)
For of x 741 ops/sec ±1.28% (88 runs sampled)
Reduce x 874 ops/sec ±0.88% (89 runs sampled)
Fastest is Reduce
Benchmark case:
[
  [
    106864951, 739042687,  75708831, 919580254, 486657800, 216361120,    
    677882183, 352280587, 787512093, 676018267,  36146334, 764336754,    
     82311973, 994823475, 257463892, 767118154, 971878349, 148256313,    
    692203691, 365331743, 205140691, 726499655,  52280604, 475286222,    
    639279347, 521290347, 576106514, 940764297, 630851717, 657557842,    
    812817675, 946525996, 498891517, 164411623, 597120381, 985396065,    
    334045075, 347378366, 332813900, 327086731, 225625663, 244478384,    
    997150299, 775638822, 860742199, 713428578, 424512389, 418447100,    
     18457056, 595071789, 311272004, 232010713,  80198571, 997479656,    
    336670845, 423282119, 154161824, 712267398, 905927833, 658042309,    
    862851331, 870982607, 189088661, 732980457, 491345639, 438005175,    
    882585040, 956681657, 284985228, 316388360, 685005393,  56505911,    
    155232015, 181448582,  38736105, 753812898, 476078473, 411959149,    
    927666425, 649058835, 524947858, 891334626, 716200332,  42995494,    
    421736698, 197887697, 432902839,  22988957,  21467379, 778050516,    
    686963490, 761772475, 755143366, 429324202, 580857422,  52569741,    
    255117398, 598032812, 288755127, 184898018,
    ... 99900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
For index x 26.52 ops/sec ±2.23% (47 runs sampled)
For of x 27.04 ops/sec ±1.71% (48 runs sampled)
Reduce x 26.14 ops/sec ±3.09% (47 runs sampled)
Fastest is For of,For index,Reduce
```
</details>