const { interval } = rxjs;
const { map, filter, take } = rxjs.operators;

interval(200).pipe(
  take(11),
  filter(x => x % 2 === 0),
  map(x => x + x)
).subscribe({
  next: x => console.log(x),
  complete: x => console.log('complete', x)
});
