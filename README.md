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
    -80, -49,  81, -59, -22,  42, -40, -54, -24,  30,  47, -99,
    -96, -60,  13,  81, -46, -59, -70,   8,  48, -67, -38,  12,
    -18,  -9, -21,  39,  49,  90, -81,  59,   3,  27,  36,  -9,
    -43,   6,  85,  65, -59, -75,  17,  70, -78,  29,  79, -75,
     67, -67, -74, -30, -52, -73,  69, -51,  88, -34, -56,  29,
    -20,  64,  16,  39, -58, -45,  53,  72,  -2, -73,   9,  88,
    -56,  70, -93,  79, -61,  16, -46, -49, -36,  22,  88,  48,
     43, -52,  29, -81,  -2,  82,  93, -38,  65, -57, -65,  63,
    -72,  65,  95, -82
  ]
]
Candidate: Default
[
   95,  93,  90,  88,  88,  88,  85,  82,  81,  81,  79,  79,  
   72,  70,  70,  69,  67,  65,  65,  65,  64,  63,  59,  53,  
   49,  48,  48,  47,  43,  42,  39,  39,  36,  30,  29,  29,  
   29,  27,  22,  17,  16,  16,  13,  12,   9,   8,   6,   3,  
   -2,  -2,  -9,  -9, -18, -20, -21, -22, -24, -30, -34, -36,  
  -38, -38, -40, -43, -45, -46, -46, -49, -49, -51, -52, -52,  
  -54, -56, -56, -57, -58, -59, -59, -59, -60, -61, -65, -67,  
  -67, -70, -72, -73, -73, -74, -75, -75, -78, -80, -81, -81,  
  -82, -93, -96, -99
]
Candidate: TimSort
[
   95,  93,  90,  88,  88,  88,  85,  82,  81,  81,  79,  79,
   72,  70,  70,  69,  67,  65,  65,  65,  64,  63,  59,  53,
   49,  48,  48,  47,  43,  42,  39,  39,  36,  30,  29,  29,
   29,  27,  22,  17,  16,  16,  13,  12,   9,   8,   6,   3,
   -2,  -2,  -9,  -9, -18, -20, -21, -22, -24, -30, -34, -36,
  -38, -38, -40, -43, -45, -46, -46, -49, -49, -51, -52, -52,
  -54, -56, -56, -57, -58, -59, -59, -59, -60, -61, -65, -67,
  -67, -70, -72, -73, -73, -74, -75, -75, -78, -80, -81, -81,
  -82, -93, -96, -99
]
Candidate: RadixSort
[
   95,  93,  90,  88,  88,  88,  85,  82,  81,  81,  79,  79,
   72,  70,  70,  69,  67,  65,  65,  65,  64,  63,  59,  53,
   49,  48,  48,  47,  43,  42,  39,  39,  36,  30,  29,  29,
   29,  27,  22,  17,  16,  16,  13,  12,   9,   8,   6,   3,
   -2,  -2,  -9,  -9, -18, -20, -21, -22, -24, -30, -34, -36,
  -38, -38, -40, -43, -45, -46, -46, -49, -49, -51, -52, -52,
  -54, -56, -56, -57, -58, -59, -59, -59, -60, -61, -65, -67,
  -67, -70, -72, -73, -73, -74, -75, -75, -78, -80, -81, -81,
  -82, -93, -96, -99
]
Candidate: QuickSortOld
[
   95,  93,  90,  88,  88,  88,  85,  82,  81,  81,  79,  79,
   72,  70,  70,  69,  67,  65,  65,  65,  64,  63,  59,  53,
   49,  48,  48,  47,  43,  42,  39,  39,  36,  30,  29,  29,
   29,  27,  22,  17,  16,  16,  13,  12,   9,   8,   6,   3,
   -2,  -2,  -9,  -9, -18, -20, -21, -22, -24, -30, -34, -36,
  -38, -38, -40, -43, -45, -46, -46, -49, -49, -51, -52, -52,
  -54, -56, -56, -57, -58, -59, -59, -59, -60, -61, -65, -67,
  -67, -70, -72, -73, -73, -74, -75, -75, -78, -80, -81, -81,
  -82, -93, -96, -99
]
Candidate: QuickSort
[
   95,  93,  90,  88,  88,  88,  85,  82,  81,  81,  79,  79,
   72,  70,  70,  69,  67,  65,  65,  65,  64,  63,  59,  53,
   49,  48,  48,  47,  43,  42,  39,  39,  36,  30,  29,  29,
   29,  27,  22,  17,  16,  16,  13,  12,   9,   8,   6,   3,
   -2,  -2,  -9,  -9, -18, -20, -21, -22, -24, -30, -34, -36,
  -38, -38, -40, -43, -45, -46, -46, -49, -49, -51, -52, -52,
  -54, -56, -56, -57, -58, -59, -59, -59, -60, -61, -65, -67,
  -67, -70, -72, -73, -73, -74, -75, -75, -78, -80, -81, -81,
  -82, -93, -96, -99
]
Candidate: QuickSortMed3
[
   95,  93,  90,  88,  88,  88,  85,  82,  81,  81,  79,  79,
   72,  70,  70,  69,  67,  65,  65,  65,  64,  63,  59,  53,
   49,  48,  48,  47,  43,  42,  39,  39,  36,  30,  29,  29,
   29,  27,  22,  17,  16,  16,  13,  12,   9,   8,   6,   3,
   -2,  -2,  -9,  -9, -18, -20, -21, -22, -24, -30, -34, -36,
  -38, -38, -40, -43, -45, -46, -46, -49, -49, -51, -52, -52,
  -54, -56, -56, -57, -58, -59, -59, -59, -60, -61, -65, -67,
  -67, -70, -72, -73, -73, -74, -75, -75, -78, -80, -81, -81,
  -82, -93, -96, -99
]
Candidate: IntroSort
[
   95,  93,  90,  88,  88,  88,  85,  82,  81,  81,  79,  79,
   72,  70,  70,  69,  67,  65,  65,  65,  64,  63,  59,  53,
   49,  48,  48,  47,  43,  42,  39,  39,  36,  30,  29,  29,
   29,  27,  22,  17,  16,  16,  13,  12,   9,   8,   6,   3,
   -2,  -2,  -9,  -9, -18, -20, -21, -22, -24, -30, -34, -36,
  -38, -38, -40, -43, -45, -46, -46, -49, -49, -51, -52, -52,
  -54, -56, -56, -57, -58, -59, -59, -59, -60, -61, -65, -67,
  -67, -70, -72, -73, -73, -74, -75, -75, -78, -80, -81, -81,
  -82, -93, -96, -99
]
Outputs are identical
Test case 2:
[
  [
     61, -96,  -7, -32, -74, -63,  71, -39,  21,  39, -96,  22,
     98, -18, -23,   9,  91,  31, -72,  14,  55,  58, -30,  76,
    -29,  59,  40,  -2, -57, -51, -86, -93,  43,  13,  93,  51,
     33,  36,  76,  38,  74, -18, -76, -82, -33,  -1, -86, -33,
     71, -10,  50,  42, -82, -61,  59,  75,  45, -93,  83, -82,
     82, -62,  60,  39, -99, -76,  46, -87, -54, -45, -71, -56,
    -93, -86,  70, -40,  20, -68, -92, -83, -53,  15, -27, -49,
    -52, -58,   8,   5, -58,  67,  -1,   5, -75,  63,  60, -74,
     75, -92,  34, -64
  ]
]
Candidate: Default
[
   98,  93,  91,  83,  82,  76,  76,  75,  75,  74,  71,  71,
   70,  67,  63,  61,  60,  60,  59,  59,  58,  55,  51,  50,
   46,  45,  43,  42,  40,  39,  39,  38,  36,  34,  33,  31,
   22,  21,  20,  15,  14,  13,   9,   8,   5,   5,  -1,  -1,
   -2,  -7, -10, -18, -18, -23, -27, -29, -30, -32, -33, -33,
  -39, -40, -45, -49, -51, -52, -53, -54, -56, -57, -58, -58,
  -61, -62, -63, -64, -68, -71, -72, -74, -74, -75, -76, -76,
  -82, -82, -82, -83, -86, -86, -86, -87, -92, -92, -93, -93,
  -93, -96, -96, -99
]
Candidate: TimSort
[
   98,  93,  91,  83,  82,  76,  76,  75,  75,  74,  71,  71,
   70,  67,  63,  61,  60,  60,  59,  59,  58,  55,  51,  50,
   46,  45,  43,  42,  40,  39,  39,  38,  36,  34,  33,  31,
   22,  21,  20,  15,  14,  13,   9,   8,   5,   5,  -1,  -1,
   -2,  -7, -10, -18, -18, -23, -27, -29, -30, -32, -33, -33,
  -39, -40, -45, -49, -51, -52, -53, -54, -56, -57, -58, -58,
  -61, -62, -63, -64, -68, -71, -72, -74, -74, -75, -76, -76,
  -82, -82, -82, -83, -86, -86, -86, -87, -92, -92, -93, -93,
  -93, -96, -96, -99
]
Candidate: RadixSort
[
   98,  93,  91,  83,  82,  76,  76,  75,  75,  74,  71,  71,
   70,  67,  63,  61,  60,  60,  59,  59,  58,  55,  51,  50,
   46,  45,  43,  42,  40,  39,  39,  38,  36,  34,  33,  31,
   22,  21,  20,  15,  14,  13,   9,   8,   5,   5,  -1,  -1,
   -2,  -7, -10, -18, -18, -23, -27, -29, -30, -32, -33, -33,
  -39, -40, -45, -49, -51, -52, -53, -54, -56, -57, -58, -58,
  -61, -62, -63, -64, -68, -71, -72, -74, -74, -75, -76, -76,
  -82, -82, -82, -83, -86, -86, -86, -87, -92, -92, -93, -93,
  -93, -96, -96, -99
]
Candidate: QuickSortOld
[
   98,  93,  91,  83,  82,  76,  76,  75,  75,  74,  71,  71,
   70,  67,  63,  61,  60,  60,  59,  59,  58,  55,  51,  50,
   46,  45,  43,  42,  40,  39,  39,  38,  36,  34,  33,  31,
   22,  21,  20,  15,  14,  13,   9,   8,   5,   5,  -1,  -1,
   -2,  -7, -10, -18, -18, -23, -27, -29, -30, -32, -33, -33,
  -39, -40, -45, -49, -51, -52, -53, -54, -56, -57, -58, -58,
  -61, -62, -63, -64, -68, -71, -72, -74, -74, -75, -76, -76,
  -82, -82, -82, -83, -86, -86, -86, -87, -92, -92, -93, -93,
  -93, -96, -96, -99
]
Candidate: QuickSort
[
   98,  93,  91,  83,  82,  76,  76,  75,  75,  74,  71,  71,
   70,  67,  63,  61,  60,  60,  59,  59,  58,  55,  51,  50,
   46,  45,  43,  42,  40,  39,  39,  38,  36,  34,  33,  31,
   22,  21,  20,  15,  14,  13,   9,   8,   5,   5,  -1,  -1,
   -2,  -7, -10, -18, -18, -23, -27, -29, -30, -32, -33, -33,
  -39, -40, -45, -49, -51, -52, -53, -54, -56, -57, -58, -58,
  -61, -62, -63, -64, -68, -71, -72, -74, -74, -75, -76, -76,
  -82, -82, -82, -83, -86, -86, -86, -87, -92, -92, -93, -93,
  -93, -96, -96, -99
]
Candidate: QuickSortMed3
[
   98,  93,  91,  83,  82,  76,  76,  75,  75,  74,  71,  71,
   70,  67,  63,  61,  60,  60,  59,  59,  58,  55,  51,  50,
   46,  45,  43,  42,  40,  39,  39,  38,  36,  34,  33,  31,
   22,  21,  20,  15,  14,  13,   9,   8,   5,   5,  -1,  -1,
   -2,  -7, -10, -18, -18, -23, -27, -29, -30, -32, -33, -33,
  -39, -40, -45, -49, -51, -52, -53, -54, -56, -57, -58, -58,
  -61, -62, -63, -64, -68, -71, -72, -74, -74, -75, -76, -76,
  -82, -82, -82, -83, -86, -86, -86, -87, -92, -92, -93, -93,
  -93, -96, -96, -99
]
Candidate: IntroSort
[
   98,  93,  91,  83,  82,  76,  76,  75,  75,  74,  71,  71,
   70,  67,  63,  61,  60,  60,  59,  59,  58,  55,  51,  50,
   46,  45,  43,  42,  40,  39,  39,  38,  36,  34,  33,  31,
   22,  21,  20,  15,  14,  13,   9,   8,   5,   5,  -1,  -1,
   -2,  -7, -10, -18, -18, -23, -27, -29, -30, -32, -33, -33,
  -39, -40, -45, -49, -51, -52, -53, -54, -56, -57, -58, -58,
  -61, -62, -63, -64, -68, -71, -72, -74, -74, -75, -76, -76,
  -82, -82, -82, -83, -86, -86, -86, -87, -92, -92, -93, -93,
  -93, -96, -96, -99
]
Outputs are identical
Test case 3:
[
  [
    -22272, -12391,
      4205,  30152,
     54437,  59566,
     61541,  67629,
     77897,  89188
  ]
]
Candidate: Default
[
   89188,  77897,
   67629,  61541,
   59566,  54437,
   30152,   4205,
  -12391, -22272
]
Candidate: TimSort
[
   89188,  77897,
   67629,  61541,
   59566,  54437,
   30152,   4205,
  -12391, -22272
]
Candidate: RadixSort
[
   89188,  77897,
   67629,  61541,
   59566,  54437,
   30152,   4205,
  -12391, -22272
]
Candidate: QuickSortOld
[
   89188,  77897,
   67629,  61541,
   59566,  54437,
   30152,   4205,
  -12391, -22272
]
Candidate: QuickSort
[
   89188,  77897,
   67629,  61541,
   59566,  54437,
   30152,   4205,
  -12391, -22272
]
Candidate: QuickSortMed3
[
   89188,  77897,
   67629,  61541,
   59566,  54437,
   30152,   4205,
  -12391, -22272
]
Candidate: IntroSort
[
   89188,  77897,
   67629,  61541,
   59566,  54437,
   30152,   4205,
  -12391, -22272
]
Outputs are identical
Test case 4:
[
  [
    19,  97,  96,  75,  56,  36,  98,  83,  16, -13, -17, -22,
    75,  67,  61,  -5,  -9, -16, -20, -26, -80, -92,  59,  23,
     6, -44, -44, -65, -84, -89, -91,  46,   5, -27,  41,  77,
    41,  35,  29,  19,  17, -10, -65, -81,  65, -39, -72, -89,
    95,  94,  49,  19,  18, -64, -69, -71, -73,  29, -33,  82,
    57,  52,  23,   3,   2,  -9, -72, -84,  37, -22, -41, -94,
    18,  -5, -50, -50, -62, -69,   7,   0, -45, -47, -83, -90,
    89,  12,   4,  -4, -14, -18, -30, -32, -38, -94,  84,  60,
    48, -11, -83, -99
  ]
]
Candidate: Default
[
   98,  97,  96,  95,  94,  89,  84,  83,  82,  77,  75,  75,
   67,  65,  61,  60,  59,  57,  56,  52,  49,  48,  46,  41,
   41,  37,  36,  35,  29,  29,  23,  23,  19,  19,  19,  18,
   18,  17,  16,  12,   7,   6,   5,   4,   3,   2,   0,  -4,
   -5,  -5,  -9,  -9, -10, -11, -13, -14, -16, -17, -18, -20,
  -22, -22, -26, -27, -30, -32, -33, -38, -39, -41, -44, -44,
  -45, -47, -50, -50, -62, -64, -65, -65, -69, -69, -71, -72,
  -72, -73, -80, -81, -83, -83, -84, -84, -89, -89, -90, -91,
  -92, -94, -94, -99
]
Candidate: TimSort
[
   98,  97,  96,  95,  94,  89,  84,  83,  82,  77,  75,  75,
   67,  65,  61,  60,  59,  57,  56,  52,  49,  48,  46,  41,
   41,  37,  36,  35,  29,  29,  23,  23,  19,  19,  19,  18,
   18,  17,  16,  12,   7,   6,   5,   4,   3,   2,   0,  -4,
   -5,  -5,  -9,  -9, -10, -11, -13, -14, -16, -17, -18, -20,
  -22, -22, -26, -27, -30, -32, -33, -38, -39, -41, -44, -44,
  -45, -47, -50, -50, -62, -64, -65, -65, -69, -69, -71, -72,
  -72, -73, -80, -81, -83, -83, -84, -84, -89, -89, -90, -91,
  -92, -94, -94, -99
]
Candidate: RadixSort
[
   98,  97,  96,  95,  94,  89,  84,  83,  82,  77,  75,  75,
   67,  65,  61,  60,  59,  57,  56,  52,  49,  48,  46,  41,
   41,  37,  36,  35,  29,  29,  23,  23,  19,  19,  19,  18,
   18,  17,  16,  12,   7,   6,   5,   4,   3,   2,   0,  -4,
   -5,  -5,  -9,  -9, -10, -11, -13, -14, -16, -17, -18, -20,
  -22, -22, -26, -27, -30, -32, -33, -38, -39, -41, -44, -44,
  -45, -47, -50, -50, -62, -64, -65, -65, -69, -69, -71, -72,
  -72, -73, -80, -81, -83, -83, -84, -84, -89, -89, -90, -91,
  -92, -94, -94, -99
]
Candidate: QuickSortOld
[
   98,  97,  96,  95,  94,  89,  84,  83,  82,  77,  75,  75,
   67,  65,  61,  60,  59,  57,  56,  52,  49,  48,  46,  41,
   41,  37,  36,  35,  29,  29,  23,  23,  19,  19,  19,  18,
   18,  17,  16,  12,   7,   6,   5,   4,   3,   2,   0,  -4,
   -5,  -5,  -9,  -9, -10, -11, -13, -14, -16, -17, -18, -20,
  -22, -22, -26, -27, -30, -32, -33, -38, -39, -41, -44, -44,
  -45, -47, -50, -50, -62, -64, -65, -65, -69, -69, -71, -72,
  -72, -73, -80, -81, -83, -83, -84, -84, -89, -89, -90, -91,
  -92, -94, -94, -99
]
Candidate: QuickSort
[
   98,  97,  96,  95,  94,  89,  84,  83,  82,  77,  75,  75,
   67,  65,  61,  60,  59,  57,  56,  52,  49,  48,  46,  41,
   41,  37,  36,  35,  29,  29,  23,  23,  19,  19,  19,  18,
   18,  17,  16,  12,   7,   6,   5,   4,   3,   2,   0,  -4,
   -5,  -5,  -9,  -9, -10, -11, -13, -14, -16, -17, -18, -20,
  -22, -22, -26, -27, -30, -32, -33, -38, -39, -41, -44, -44,
  -45, -47, -50, -50, -62, -64, -65, -65, -69, -69, -71, -72,
  -72, -73, -80, -81, -83, -83, -84, -84, -89, -89, -90, -91,
  -92, -94, -94, -99
]
Candidate: QuickSortMed3
[
   98,  97,  96,  95,  94,  89,  84,  83,  82,  77,  75,  75,
   67,  65,  61,  60,  59,  57,  56,  52,  49,  48,  46,  41,
   41,  37,  36,  35,  29,  29,  23,  23,  19,  19,  19,  18,
   18,  17,  16,  12,   7,   6,   5,   4,   3,   2,   0,  -4,
   -5,  -5,  -9,  -9, -10, -11, -13, -14, -16, -17, -18, -20,
  -22, -22, -26, -27, -30, -32, -33, -38, -39, -41, -44, -44,
  -45, -47, -50, -50, -62, -64, -65, -65, -69, -69, -71, -72,
  -72, -73, -80, -81, -83, -83, -84, -84, -89, -89, -90, -91,
  -92, -94, -94, -99
]
Candidate: IntroSort
[
   98,  97,  96,  95,  94,  89,  84,  83,  82,  77,  75,  75,
   67,  65,  61,  60,  59,  57,  56,  52,  49,  48,  46,  41,
   41,  37,  36,  35,  29,  29,  23,  23,  19,  19,  19,  18,
   18,  17,  16,  12,   7,   6,   5,   4,   3,   2,   0,  -4,
   -5,  -5,  -9,  -9, -10, -11, -13, -14, -16, -17, -18, -20,
  -22, -22, -26, -27, -30, -32, -33, -38, -39, -41, -44, -44,
  -45, -47, -50, -50, -62, -64, -65, -65, -69, -69, -71, -72,
  -72, -73, -80, -81, -83, -83, -84, -84, -89, -89, -90, -91,
  -92, -94, -94, -99
]
Outputs are identical
Benchmark case:
[
  [
      36, -790,  806, -592,  907,  793, -972, -496,  141,  164,  321,
     -66, -232,  -49, -703, -791,  626,  868,  502, -142, -711,  564,
    -472, -364,  -98,  832,  437,  -94, -618,  550,  -12, -533, -286,
     420,  385,   14,  968, -626, -171, -128,  -95, -782, -849,  850,
     780, -354, -972, -645, -538, -218,  270,  176, -854,   62,  133,
     702,   74, -247,  690,  324, -528, -711,  172, -596, -251,  787,
     334, -360,   75,  216, -578, -491,  759,  -22, -970, -214, -453,
    -224, -299, -100,  357,  973,  522,  240,  336, -329,  249, -425,
     360, -334, -202,  433,  965, -976,  997, -277,  290,  403, -259,
      77
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 81,159 ops/sec ±0.96% (90 runs sampled)
TimSort x 266,674 ops/sec ±0.32% (93 runs sampled)
RadixSort x 157,241 ops/sec ±0.24% (94 runs sampled)
QuickSortOld x 260,785 ops/sec ±0.16% (93 runs sampled)
QuickSort x 395,786 ops/sec ±1.16% (92 runs sampled)
QuickSortMed3 x 392,054 ops/sec ±0.33% (94 runs sampled)
IntroSort x 154,510 ops/sec ±1.20% (92 runs sampled)
Fastest is QuickSort
Benchmark case:
[
  [
     773,  304, -869, -926,  482, -509, -456, -599, -502,  898,  443,
     818,  808,  501, -810,  354, -637, -262, -951,  120,  758,  -62,
    -415, -555, -958, -508, -340, -157, -940, -407,  583,  453,  976,
     461, -166, -450,  -56,  707,   36, -974,  933,  684, -253,  422,
    -186, -139,  232, -819,  379, -224,  690,  -10, -116, -113,  -77,
    -993, -252, -771, -994,   49,  627, -939,  458, -448, -644, -268,
     995, -977, -629,  -89,  546, -840,  394,  105,  187, -996,  635,
      37,  862,  983,  283,  843,  497,  289, -380, -301, -850, -854,
     474,  205,  -86, -394,  388,  563,  316, -759,   42, -679,  459,
    -122,
    ... 900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 4,861 ops/sec ±1.11% (91 runs sampled)
TimSort x 11,145 ops/sec ±0.24% (94 runs sampled)
RadixSort x 35,065 ops/sec ±0.14% (93 runs sampled)
QuickSortOld x 12,500 ops/sec ±1.00% (89 runs sampled)
QuickSort x 17,039 ops/sec ±1.38% (92 runs sampled)
QuickSortMed3 x 17,096 ops/sec ±0.15% (94 runs sampled)
IntroSort x 10,607 ops/sec ±0.92% (91 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
    -86829, -58667, -13472, -21248, -31174,  65125, -77067, -80391,
     69381, -91796,  56215, -15756,  82707,   1111, -79647,  50809,
    -30175, -19787,  69945,  36291,  25522, -10938,  22345, -21564,
    -96578,  47585,  41240, -15935,  84036, -90130,  43312, -91837,
     54955, -35684,   1578,   9190,  97208,  40726, -58353,  68309,
     62088, -89795,  15524, -17236, -57607, -79280, -78402,  91016,
     65007,  38130,  45895, -85721, -48831,  33540,  30966,  44747,
    -35706,  46620, -57484,  80554, -52315,  83203,  40139,   7719,
    -48914, -88357, -62964,  70634,   8692, -46800,  45701,  22781,
    -76729, -16070,  68797,  59168, -13077, -95578, -92789,  99892,
      4872,  -8350,  71327,  89067,  66604, -49509, -96307,  -7915,
    -82663, -37027,   8122, -57064,  32082, -51907, -80335, -17579,
    -70872,  47009,  68245, -56910,
    ... 99900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 29.24 ops/sec ±0.54% (51 runs sampled)
TimSort x 60.57 ops/sec ±1.38% (62 runs sampled)
RadixSort x 338 ops/sec ±0.55% (87 runs sampled)
QuickSortOld x 72.10 ops/sec ±0.56% (73 runs sampled)
QuickSort x 94.28 ops/sec ±0.39% (78 runs sampled)
QuickSortMed3 x 94.33 ops/sec ±0.34% (78 runs sampled)
IntroSort x 66.82 ops/sec ±0.42% (68 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
    -1588540938, -1939406878,  -195096772, -1833698521,  1586708361,
     1044727411,  1015630198,  1260485566,  1803037113,  1821591302,
      118335486,  1185671197,   835452790, -1612044142,   178377224,
    -1372931608, -1337123616,  -578659369,  -723455367,   886882163,
     -930814421,  -980090265, -1614988749,  1300560733,  -953293545,
     -493985203,  1736297514,   872415172,  -283987900,  -695369941,
      -22878051,   677518142,  1644786948,    25768645, -1090802992,
     1208586914,   609616906, -1299929965, -1326874911,  -632798999,
     1874106667,  1413704146,  -448128077,  1309478959, -1576077142,
    -1132137777, -1547095209,  -268406261,   443674055,   879125735,
     1296173079,  -259177674, -1399545379,  1760872710,  1615705106,
      647385476, -1591919743,   295009676,   855587599, -1437331677,
     1242175277,   603357460,   367852685,  1903830903,  1683526766,
     1023753084,  -999272149,   790526962,   740031417,  1782620400,
     -170049592,  1229573864, -1662805710,  1675312609,  1167705156,
     1299945330,  1598077368,   872584163,  1228598415,  1313644256,
     1470699677, -1561560113, -1647780023, -1502483329, -1019366161,
     1173370798,  1671117364,  -603618397,   125936619,   336507926,
     -161751553,   -27927104,   299072073, -1728561886,  1753512119,
     1228507608, -1436060379,  1910660299,   988453093, -1325596605,
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 2.22 ops/sec ±0.46% (10 runs sampled)
TimSort x 4.84 ops/sec ±1.17% (17 runs sampled)
RadixSort x 32.40 ops/sec ±1.04% (56 runs sampled)
QuickSortOld x 6.26 ops/sec ±0.19% (20 runs sampled)
QuickSort x 7.85 ops/sec ±0.17% (24 runs sampled)
QuickSortMed3 x 8.04 ops/sec ±0.23% (24 runs sampled)
IntroSort x 5.77 ops/sec ±0.91% (19 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
      611910024368504.5,   916234869687961.8,   739248012700244.2,
     438592571748274.75,   864649899364089.5,    -313594101625863,
     -998829430584112.5,     507900140221091,    -327035763274270,
      280202676529539.5,  523595145886474.25,   888557807909698.2,
     -938328465059816.8, -441039275700471.75,   206345045944539.5,
        923736374683661,  198585977072185.75,   788000475188612.2,
     -620639967526351.2,  -686801913873405.4,    7601641471780.75,
       -490597268699172, -156815608846567.75,  185255942338905.75,
     283818803783369.75,     264186756869509,  -326347988336069.6,
    -245175458998214.75,  -792487341750748.5,   670935079400338.8,
      677848124575244.2,  -959229225214773.6,  -646141291832176.8,
        804501010589552,    -868690047891616,   855362679153998.2,
        876856578102625,  -652325583851864.9,  -653714670860782.4,
     -371150418484159.4,   141792519059103.5,   393324717880923.5,
     -639187799471085.5,  -502029743240690.2,   835694308779841.5,
    -247339556858644.75, -408167658903859.25,  18104949759878.875,
      514792927034053.5,   606674565069137.2,  468433551223262.75,
        372671807074493,     937207434037064, -132538267130996.75,
     196779014363866.25,  450188472544365.75,   153473067136836.5,
    -227971485892250.12,    -250324563581898,  -400845421865374.5,
        371248659449967,  514541896907650.25,   566981470952660.5,
      -36219967458301.5,   574213142217397.2,   30359791360656.75,
     -782034798076305.4,   577971534796807.5,   965134659393945.2,
    -557850350701444.94,     284947730050121, -315220881923109.75,
      189469199274788.5,   619092703652662.5,  -638511306389749.9,
        602256339443103,  -314264375647527.4,   864172975808233.2,
     -864592634089422.4,    -304034077689129,  -997191361980146.6,
     522559310929697.75,  -495103476455770.7,   332750596879482.5,
       -641989998618301,  -343996803554576.9, -145575266821296.62,
     343027253876896.25,    -851872246479135,  -608714927888441.2,
       -109490319052151,   576654086029368.5,   75174616347737.38,
     -699347877716779.6,   879239648050058.5,    -167891803707700,
    -230463750165467.38, -149802829306589.38,   702579699214050.2,
     -114123161557241.5,
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are different (2 groups: Default, TimSort, QuickSortOld, QuickSort, QuickSortMed3, IntroSort | RadixSort)
Benchmarking...
Default x 1.17 ops/sec ±0.79% (7 runs sampled)
TimSort x 4.60 ops/sec ±1.09% (16 runs sampled)
RadixSort x 24.88 ops/sec ±1.43% (44 runs sampled)
QuickSortOld x 6.37 ops/sec ±0.24% (20 runs sampled)
QuickSort x 7.99 ops/sec ±0.18% (24 runs sampled)
QuickSortMed3 x 7.90 ops/sec ±0.18% (24 runs sampled)
IntroSort x 5.65 ops/sec ±1.16% (18 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
    -1999997547, -1999996128, -1999994771, -1999988712, -1999987995,
    -1999984223, -1999966364, -1999965662, -1999951320, -1999950194,
    -1999944037, -1999941997, -1999935973, -1999929632, -1999929493,
    -1999920916, -1999917991, -1999916392, -1999915355, -1999911998,
    -1999906196, -1999906101, -1999901684, -1999900656, -1999896869,
    -1999890464, -1999887478, -1999884432, -1999883168, -1999878094,
    -1999877708, -1999876981, -1999875866, -1999869970, -1999852842,
    -1999850568, -1999843082, -1999836702, -1999834458, -1999829702,
    -1999814286, -1999812190, -1999808891, -1999784779, -1999784743,
    -1999780928, -1999777082, -1999772843, -1999763535, -1999760108,
    -1999754163, -1999748813, -1999741998, -1999738552, -1999738122,
    -1999734270, -1999730684, -1999727358, -1999727142, -1999726618,
    -1999722038, -1999709076, -1999708873, -1999705694, -1999702636,
    -1999696068, -1999690614, -1999684542, -1999680172, -1999678923,
    -1999671322, -1999660376, -1999656068, -1999648387, -1999647268,
    -1999643828, -1999636295, -1999631768, -1999631557, -1999631212,
    -1999620282, -1999619555, -1999613620, -1999609467, -1999607719,
    -1999603619, -1999596738, -1999596625, -1999584492, -1999583192,
    -1999577946, -1999571589, -1999571140, -1999564694, -1999542794,
    -1999542014, -1999538405, -1999536485, -1999535370, -1999533309,
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 19.69 ops/sec ±1.94% (36 runs sampled)
TimSort x 22.98 ops/sec ±2.08% (42 runs sampled)
RadixSort x 19.63 ops/sec ±3.72% (37 runs sampled)
QuickSortOld x 15.42 ops/sec ±0.60% (42 runs sampled)
QuickSort x 16.96 ops/sec ±0.32% (45 runs sampled)
QuickSortMed3 x 9.45 ops/sec ±0.46% (28 runs sampled)
IntroSort x 16.96 ops/sec ±0.36% (45 runs sampled)
Fastest is TimSort
Benchmark case:
[
  [
    1999988795, 1999857998, 1999791334, 1999790023, 1999585641,
    1999580097, 1999476648, 1999366893, 1999358285, 1999219818,
    1998792934, 1998759710, 1998755093, 1998701367, 1998674956,
    1998377878, 1998372449, 1998086833, 1998077784, 1998042399,
    1997957882, 1997787186, 1997286663, 1997266970, 1997208327,
    1997126402, 1997074670, 1997070761, 1996936439, 1996890721,
    1996860442, 1996775436, 1996741399, 1996730313, 1996633295,
    1996512090, 1996511823, 1996353200, 1996215384, 1996200442,
    1995868193, 1995812230, 1995552787, 1995550088, 1995414096,
    1995273609, 1995125788, 1995120202, 1994998353, 1994990010,
    1994831778, 1994596265, 1994447717, 1994251180, 1993672170,
    1993481259, 1993470968, 1993404764, 1993332197, 1993172298,
    1993050412, 1992935735, 1992863095, 1992782941, 1992736323,
    1992540385, 1992394280, 1992352661, 1992338823, 1992330622,
    1992281469, 1992259074, 1992222339, 1992136869, 1992052121,
    1991944936, 1991925921, 1991917477, 1991894637, 1991858914,
    1991796299, 1991609347, 1991499629, 1991298958, 1991297551,
    1991258608, 1991243794, 1991238850, 1991229833, 1991209689,
    1991069371, 1990939215, 1990895642, 1990690089, 1990677344,
    1990664310, 1990133878, 1990044255, 1989882444, 1989800658,
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 2.26 ops/sec ±1.59% (10 runs sampled)
TimSort x 4.71 ops/sec ±0.71% (16 runs sampled)
RadixSort x 20.40 ops/sec ±2.36% (38 runs sampled)
QuickSortOld x 6.03 ops/sec ±0.53% (19 runs sampled)
QuickSort x 7.53 ops/sec ±0.23% (23 runs sampled)
QuickSortMed3 x 7.46 ops/sec ±0.21% (23 runs sampled)
IntroSort x 5.49 ops/sec ±1.16% (18 runs sampled)
Fastest is RadixSort
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
     1112, 46998, 26422,
    98436, 48083, 67786,
    70966, 36574, 35254,
      255
  ]
]
Candidate: Default
[
    255,  1112, 26422,
  35254, 36574, 46998,
  48083, 67786, 70966,
  98436
]
...
Outputs are identical
Benchmark case:
[
  [
    984, 830,  99, 208,  48,  95, 647, 590, 612, 595, 388, 393,
    807, 700, 867, 351, 388, 861, 391, 698, 306, 963, 765, 795,
    833, 668, 991, 949, 957, 607, 463, 338, 320, 240, 814, 609,
    109, 496, 246,  48, 704, 551, 948, 113, 110, 338, 306,  32,
    230, 203, 226, 961, 535, 806, 893,  84, 276,  20, 285, 988,
    366, 305, 277, 509, 558, 240, 141, 617, 776, 881, 526, 876,
    750, 980, 359, 461,  80, 971, 188, 580, 693, 954, 744, 357,
    107, 297, 158, 866, 498, 234, 955, 107, 880,  91, 889, 319,
    350, 215, 520, 592
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 80,382 ops/sec ±0.30% (87 runs sampled)
TimSort x 228,363 ops/sec ±1.68% (88 runs sampled)
QuickSort x 389,914 ops/sec ±0.14% (92 runs sampled)
RadixSort x 158,110 ops/sec ±0.56% (91 runs sampled)
CountingSort x 76,438 ops/sec ±0.24% (90 runs sampled)
Fastest is QuickSort
Benchmark case:
[
  [
     40, 865, 876, 993, 288,  31, 311, 400, 349,  39, 165, 649,
    714, 121, 638, 119, 252, 438,  87, 474, 773, 527, 205, 658,
    172, 544, 526,  24, 717,  49,  52, 133, 213, 225,  76, 929,
    572, 979, 820, 867, 726,  94, 138, 804, 987, 308, 838, 425,
    695, 174,  92, 952, 699, 972, 634, 490, 896, 997, 357, 726,
    998, 755, 601, 945, 344, 488, 544, 847, 682, 138, 913, 464,
    389, 198, 299, 512, 400, 198, 942, 651, 319, 358, 377, 348,
    538,  19, 244,  73, 420,  45,  32, 420, 561, 739, 852, 228,
    435, 129, 915, 192,
    ... 900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 4,883 ops/sec ±0.56% (90 runs sampled)
TimSort x 11,378 ops/sec ±0.21% (93 runs sampled)
QuickSort x 16,280 ops/sec ±0.19% (90 runs sampled)
RadixSort x 36,196 ops/sec ±0.52% (94 runs sampled)
CountingSort x 17,639 ops/sec ±0.20% (92 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
    18557, 18696, 15345, 93554, 32759, 85855, 38148, 89236,
    28486, 30325, 24230, 32266, 77888, 19853, 52221, 58944,
    93925, 37094, 13106,  8370, 70118, 86137, 17945, 39985,
    24640, 13217, 90160, 59006, 30302, 65891, 18868, 27604,
    59829, 50026, 36420, 74911, 42019, 96592, 99630, 54079,
    18110,  2845, 48127, 33949, 34956, 94637, 90359, 90965,
    88617,  3395, 63206, 79796, 74132, 36524, 27998, 76737,
    24432, 26999, 19154, 93540, 53062, 23686,  8136, 93819,
    53101, 28664, 77963, 81795, 94009, 40542,  3108, 38560,
     2250, 17419, 80232, 41835, 99243, 97913, 25185, 10356,
    10941, 97545, 27710, 38542, 72496, 65974, 66761, 45627,
    84885, 89063, 39071, 81740, 35012, 75609, 47238, 33083,
    78156, 18671, 70213, 85870,
    ... 99900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 28.23 ops/sec ±0.75% (50 runs sampled)
TimSort x 58.03 ops/sec ±1.61% (59 runs sampled)
QuickSort x 89.17 ops/sec ±0.20% (74 runs sampled)
RadixSort x 331 ops/sec ±0.75% (85 runs sampled)
CountingSort x 45.61 ops/sec ±0.65% (58 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
      12517380, 1689983794, 1743737466, 1134521624, 1722928184,  955811076,    
    1340713275, 1106612292, 1543005917,  321062417, 1940731875, 1008730863,    
     554086983, 1854795258,  432677176,  565491336, 1779152063, 1249861527,    
    1776301533,  321169217, 1468469726, 1034413359,  784760322, 1353999925,    
    1271720987, 1531126690, 1614519522, 1868999454,  514778704,  462554594,    
    1287714211, 1444257535,  871557582,  207560730,  820546415,  234244211,    
     678670915,   95889158,  115235645, 1224555878,   48316378, 1548494664,    
    1415828337,  181144330,  696276183, 1240276293, 1415018904, 1423697619,    
    1920627348, 1313269597,  198772256,  874818055, 1108393426, 1277077736,    
    1018447560, 1737148762, 1394149049,  713784508,  415376391, 1313744253,    
    1174294244,  788845385,  749787253,  308864858, 1747522511,  309954136,    
    1593987275, 1207296477, 1787242102, 1465856498, 1388614400,    2672681,    
     396508577, 1494856251,  130255803,  360815534,  439497477,  654786652,    
     679923352,  313760799, 1823387525,  219173875,   81250428, 1101194764,    
    1920091498,  162903888, 1413315376,  856621695, 1626208791,  972984494,    
    1537561753, 1923861577, 1224256916,  919914275,  490699730,   15070269,    
     551706666,  471762056, 1705357463, 1715676842,
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 2.26 ops/sec ±2.57% (10 runs sampled)
TimSort x 4.71 ops/sec ±2.67% (16 runs sampled)
QuickSort x 7.51 ops/sec ±0.94% (23 runs sampled)
RadixSort x 30.56 ops/sec ±1.03% (53 runs sampled)
CountingSort x 0.66 ops/sec ±3.29% (6 runs sampled)
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