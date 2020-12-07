import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const text = document.createElement('div');

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet sodales libero. Mauris diam nisl, bibendum vel orci vel, fringilla dictum risus. Sed at ex sit amet ante volutpat pulvinar quis ut velit. Morbi lacinia mattis dictum. Aliquam viverra pellentesque pulvinar. Aenean molestie magna mi, id ultricies tortor porta non. Praesent posuere, nibh at viverra sodales, dolor nibh sodales quam, eget commodo turpis eros a magna. Integer at sagittis nunc. Cras odio diam, porta ac nisi vel, feugiat hendrerit odio.
<br>
<br>
Sed suscipit, ex vel molestie pulvinar, quam orci cursus nibh, vitae sagittis nulla quam a mi. Mauris vitae sapien posuere, commodo quam ac, placerat ex. Pellentesque in vehicula magna. Vivamus ultrices sollicitudin mauris, in dignissim eros sagittis vel. Sed ullamcorper viverra vulputate. Nullam varius porttitor ligula, ac suscipit nunc volutpat in. Aenean ut ex facilisis, hendrerit est eget, vehicula leo. Nulla faucibus aliquet est, eget egestas neque pretium non. Proin molestie blandit mattis. Etiam imperdiet laoreet tortor, id sagittis nulla rhoncus sed. In id libero leo.
<br>
<br>
Fusce placerat efficitur pellentesque. Aenean quam risus, pulvinar sed fermentum dignissim, aliquam sit amet tellus. Fusce ut tellus vestibulum ipsum semper tristique ac eu est. Quisque a feugiat elit. Quisque pretium massa aliquam tortor elementum cursus. Integer nec dolor sed mauris egestas iaculis. Vivamus aliquet dui lectus, eu tincidunt enim viverra eu. Suspendisse potenti. Aenean rutrum odio sed enim scelerisque aliquam. Phasellus sed tempor erat. Vivamus nec scelerisque dui. Sed vulputate ut arcu a tincidunt. Vivamus blandit mi vitae eros volutpat gravida. Cras cursus euismod metus nec maximus. Maecenas dapibus feugiat odio et imperdiet.
<br>
<br>
Integer ullamcorper enim tellus, ac volutpat erat ullamcorper sit amet. Mauris rutrum pellentesque erat et finibus. Cras condimentum erat id quam dignissim, eu scelerisque sem sodales. Fusce vitae lectus sed tortor rhoncus vehicula et nec diam. Sed sodales risus quis erat lobortis, a mollis velit consectetur. In imperdiet, arcu non tincidunt mollis, orci quam egestas neque, vel faucibus sem nulla vitae purus. Nam nec metus a tortor placerat interdum. Praesent consectetur aliquet leo et suscipit. Integer vulputate posuere tortor non tempor. Fusce ultricies, metus a fermentum ornare, ligula diam tempor metus, vitae auctor metus lacus sed metus. Ut consequat sem a urna eleifend volutpat. Curabitur tincidunt blandit nibh non mollis.
<br>
<br>
Aliquam eget finibus leo. Aliquam vestibulum arcu arcu, consectetur ultrices tellus accumsan ac. Mauris consectetur ullamcorper dignissim. Sed ac orci pellentesque, faucibus sapien nec, aliquam urna. Morbi odio metus, blandit non congue et, rutrum nec nunc. Sed mollis a erat sed aliquet. Morbi malesuada tellus ac sapien tempor, vitae egestas tellus feugiat. Proin hendrerit, lacus ut tristique placerat, odio nunc porttitor purus, vel ultricies purus quam ac purus.
<br>
<br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis, urna quis tincidunt gravida, orci odio sollicitudin neque, et porta dui ex eu nulla. In hendrerit lorem vitae ante lacinia commodo. Aliquam ultrices congue elit sit amet molestie. Suspendisse in risus id eros dictum pellentesque. Nunc dignissim odio nec erat consectetur maximus. Cras facilisis vehicula nibh. Maecenas vel eleifend odio, at feugiat ligula. Donec consectetur venenatis lectus, vitae mattis sapien dignissim id. Sed elementum hendrerit fermentum. Nulla facilisi. Sed tincidunt eros mauris, eget fringilla arcu rutrum et. Sed pulvinar convallis elit, vitae accumsan ipsum feugiat vitae.
<br>
<br>
Suspendisse quis velit sit amet nisi fermentum tincidunt at eget neque. In interdum mi at varius aliquet. Morbi ornare blandit dui, nec dapibus nulla accumsan commodo. Sed ac semper nulla, vel volutpat est. Sed sed augue dignissim, aliquam velit ut, lobortis est. Aliquam eu accumsan tortor, at dictum felis. Curabitur id interdum est. Nulla volutpat consectetur velit vel vehicula. Maecenas auctor facilisis porttitor.
<br>
<br>
Fusce posuere sit amet velit eu consectetur. Curabitur sodales, eros at condimentum ultricies, odio eros eleifend ante, ac imperdiet leo leo vitae purus. Nam laoreet congue mi sed vehicula. Sed vitae arcu sed ex tristique dictum. Vestibulum eget maximus erat, a mollis justo. Phasellus id urna ac urna commodo egestas. Nulla imperdiet felis in purus tempor, ut viverra nibh aliquam. Etiam varius diam vel rutrum ullamcorper. Donec eros ex, commodo bibendum risus eu, fermentum placerat diam. Fusce eget libero sollicitudin, feugiat mi vitae, finibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet nulla id leo viverra pulvinar.
<br>
<br>
Proin sodales, lorem dictum rutrum gravida, risus mi volutpat magna, nec elementum lectus magna id odio. Phasellus at bibendum mauris, sed facilisis est. Phasellus eleifend venenatis urna non pharetra. Suspendisse potenti. Fusce sed euismod turpis. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam placerat vulputate scelerisque. Proin id massa quis leo viverra tincidunt ut pharetra felis. Cras ultricies vitae dui vitae pharetra. Curabitur auctor erat vitae odio dictum euismod. Donec elementum id mauris non cursus.
<br>
<br>
Donec malesuada vitae nisl non faucibus. Phasellus laoreet quis felis ut tincidunt. Proin sollicitudin metus turpis, vitae placerat lacus tincidunt quis. Aliquam consequat justo ac eros laoreet aliquam. Nullam scelerisque tempor augue, vel pellentesque mauris lacinia eget. Pellentesque varius varius urna a maximus. Quisque sed felis euismod, placerat orci vitae, eleifend metus. Nunc at nisl et ipsum maximus vestibulum a eget est. Suspendisse vel placerat lorem. Vestibulum blandit, libero nec dignissim lobortis, sapien urna interdum lectus, in facilisis elit dolor eu magna.
<br>
<br>
Cras semper mauris ac metus cursus, id bibendum eros imperdiet. Maecenas arcu arcu, egestas vitae arcu vitae, aliquam eleifend enim. Nunc tristique varius neque et venenatis. Donec et maximus sem. Vestibulum id ligula non orci consectetur semper. Praesent arcu velit, consequat ac libero ac, eleifend ornare sem. Sed dignissim ipsum ac dui imperdiet egestas. Aenean eleifend tincidunt mi, vel varius justo tincidunt a. Quisque elementum rhoncus venenatis. Duis convallis, felis vitae imperdiet aliquet, odio nibh ullamcorper leo, id condimentum elit sem eget urna. Aenean mollis imperdiet nisi sit amet fermentum. Cras faucibus sodales molestie. Quisque in massa a arcu gravida lobortis. Nam auctor sed lectus non faucibus. Phasellus vitae tellus quis justo ullamcorper pretium ac at orci. Mauris pretium auctor egestas.
<br>
<br>
Duis vel vulputate velit, non vehicula metus. Ut eu purus ut libero gravida sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tristique dignissim vulputate. Sed vitae fringilla metus, at dapibus nisl. Curabitur consequat ex nec faucibus scelerisque. Cras egestas enim vitae justo semper lobortis. Maecenas risus nibh, accumsan ac velit quis, viverra dictum tellus. Vestibulum sollicitudin erat nec dignissim cursus. Pellentesque quis ligula eu nibh rutrum pellentesque. Morbi posuere euismod velit. In bibendum ornare leo. Praesent in nisi ac metus hendrerit euismod. Sed vel hendrerit risus. Sed placerat purus quis est dictum congue. Suspendisse potenti.
<br>
<br>
Sed cursus eros eget tempus rhoncus. Etiam at libero molestie, lobortis odio sed, tristique tortor. Fusce vitae tincidunt ante, ut viverra nulla. Quisque vel neque augue. Maecenas pretium tortor eu magna pellentesque tincidunt. Nullam congue purus nec lacinia laoreet. Nunc scelerisque facilisis vehicula. Nullam tincidunt nunc ac consequat iaculis. Praesent pellentesque dolor non magna tristique finibus. Vivamus convallis lectus a orci euismod consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla accumsan vulputate velit vitae dapibus. Morbi vestibulum porttitor dolor id dapibus.
<br>
<br>
Nam facilisis aliquam sem, sit amet vehicula est mollis at. Donec sem dolor, vulputate vitae lectus eget, auctor ornare risus. Proin porttitor varius metus non gravida. Sed ut lorem vel magna fermentum scelerisque eu varius dolor. Suspendisse potenti. Proin pulvinar eros quis porta fringilla. Suspendisse eget ante egestas, viverra tortor sit amet, maximus nunc. Pellentesque at cursus velit. Donec imperdiet rutrum libero ac efficitur.
<br>
<br>
Vivamus a nibh suscipit, rutrum purus eget, faucibus est. In vulputate dui ligula, vel lacinia magna auctor in. Vivamus consectetur orci et urna lobortis, non finibus risus lobortis. Pellentesque at lobortis felis. Nullam id metus ipsum. Nam ultrices fermentum gravida. Vivamus sit amet tellus eros. Duis quis aliquam justo. Etiam cursus neque ac lobortis congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Praesent ut ipsum a magna consequat molestie sed vitae purus. Nam vel sodales sem. Aliquam ultricies scelerisque massa convallis consequat. Donec condimentum et lectus vel ultrices.
<br>
<br>
In lobortis lectus metus, ac auctor tortor dictum eu. Praesent maximus neque quis neque malesuada, sit amet vehicula orci interdum. Curabitur vitae dignissim quam. Donec fringilla tortor id dolor hendrerit, ut mattis massa viverra. Quisque in ultricies quam, in fringilla massa. Maecenas id turpis semper, pulvinar sapien dignissim, sodales felis. Sed dapibus, leo a auctor suscipit, sapien nibh mattis felis, et ultricies libero lorem sit amet felis. Aliquam fermentum consectetur dictum. Aenean luctus gravida erat. Duis augue magna, dapibus luctus eros sed, consequat fermentum arcu. Pellentesque magna diam, suscipit et ex eget, bibendum cursus turpis. Pellentesque nec ornare magna. Pellentesque posuere urna a enim auctor, ut iaculis turpis vehicula. Sed vehicula blandit lorem lobortis luctus.
<br>
<br>
Nunc et velit volutpat, ullamcorper neque a, pulvinar elit. In egestas urna tellus, id molestie mauris ullamcorper quis. Curabitur venenatis tortor nec diam aliquam vulputate. Mauris in dignissim est, in condimentum ipsum. Maecenas nec leo vel metus aliquam cursus non et nunc. Maecenas ut sapien interdum, scelerisque quam in, condimentum velit. Quisque sit amet diam semper, convallis diam et, pellentesque metus. Vivamus urna tortor, tempor nec aliquam quis, semper et enim. Fusce consectetur elit lorem, at dapibus neque ullamcorper eu.
<br>
<br>
Suspendisse a orci lorem. Donec maximus mauris nibh, nec porta mauris sollicitudin ac. Vestibulum molestie ac orci et cursus. Nam placerat dapibus mi. Donec blandit diam at diam lacinia semper eu in arcu. Morbi at dui nec turpis laoreet sollicitudin eu et massa. Aliquam accumsan tempor metus ut faucibus.
<br>
<br>
Aenean auctor lacinia libero nec suscipit. Nam iaculis ornare massa, sed porttitor lectus posuere sed. Proin lobortis rutrum augue, a auctor velit consequat euismod. Vestibulum vitae commodo mi. Suspendisse potenti. Aenean sodales aliquam metus in convallis. Nunc erat orci, mattis sit amet tempus eu, posuere vitae ex. Morbi mauris tellus, congue eu volutpat eget, tempus et massa. Mauris sit amet scelerisque mi, vel tempor est. Fusce dignissim mi quis porta cursus. Nam placerat tristique accumsan. Aliquam ut dignissim nibh, sed accumsan orci. Vestibulum molestie dapibus placerat. Curabitur pretium dolor pretium neque vestibulum commodo ac a lectus. Maecenas non orci odio.
<br>
<br>
Morbi mattis ultrices lectus vitae porta. Nulla finibus nec diam ut feugiat. Aenean ac aliquet ipsum. Mauris imperdiet posuere velit sit amet imperdiet. Fusce varius lacus a lobortis tincidunt. Maecenas at nisi nunc. Fusce ullamcorper augue ut augue semper, in porta erat egestas. Maecenas eget odio tortor. Aliquam elementum vel est in consequat. Cras aliquam, velit ac ornare tincidunt, massa odio vulputate diam, molestie imperdiet nulla felis nec enim. Nullam mi urna, pellentesque in urna eu, egestas pharetra mauris. Ut ac nunc at ante condimentum hendrerit at consequat nisl. Suspendisse at diam non est consequat tincidunt quis vitae dolor.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('style', 'position: fixed; top: 0; left: 0; height: 5px; width: 0%; background-color: #9034AA');
body.append(progressBar);

//calculate percent
const calculatePercent = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
  map(event => calculatePercent(event)),
  tap(console.log)
);

progress$.subscribe(percent => progressBar.style.width = `${percent}%`);