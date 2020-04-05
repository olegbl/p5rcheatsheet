// https://hardcoregamer.com/2020/03/31/persona-5-royal-confidant-guide/370507/
JSON.stringify({
  id: $('.entry-title')
    .first()
    .text()
    .match(/: (.*) \(/)[1],
  name: $('.entry-title')
    .first()
    .text()
    .match(/\((.*)\)/)[1],
  benefits: [
    ...$(`.entry-content > h2:contains("Benefits")`).toArray(),
    ...$(`.entry-content > h3:contains("Benefits")`).toArray(),
  ]
    .map(header =>
      $(header)
        .nextAll(`table`)
        .first()
        .find(`tr`)
        .toArray()
        .slice(1) // ignore column labels
        .map(tr =>
          $(tr)
            .find(`td`)
            .toArray()
            .map(td =>
              $(td)
                .text()
                .trim(),
            )
            .reduce((obj, value, index) => {
              obj[{0: 'rank', 1: 'label', 2: 'description'}[index]] = value;
              return obj;
            }, {}),
        ),
    )
    .shift(),
  conversations: [
    ...$(`.entry-content > h2:contains("Rank")`).toArray(),
    ...$(`.entry-content > h3:contains("Rank")`).toArray(),
  ]
    .map(headerNode => {
      const header = $(headerNode);
      const label = header
        .text()
        .trim()
        .replace(/\n.*/, '');
      const note =
        header
          .next('p')
          .toArray()
          .map(p =>
            $(p)
              .text()
              .trim(),
          )
          .shift() || '';
      const responses = header
        .nextAll(`table`)
        .first()
        .find(`tr`)
        .toArray()
        .map(tr =>
          $(tr)
            .find(`td`)
            .toArray()
            .slice(1) // ignore row labels
            .map(td =>
              $(td)
                .text()
                .trim(),
            )
            .filter(text => text != null && text !== ''),
        );
      return {label, note, responses};
    })
    .filter(Boolean),
});

// https://samurai-gamers.com/persona-5/confidants-list-schedule-guide/
let day = '';
JSON.stringify(
  jQuery(`h3:contains("Confidant Availability")`)
    .nextAll(`table`)
    .first()
    .find(`tr`)
    .toArray()
    .slice(1)
    .map(tr => {
      const tds = jQuery(tr)
        .find(`td`)
        .toArray();
      if (tds.length > 1) {
        day = jQuery(tds[0])
          .text()
          .trim();
      }
      const td = jQuery(tds[tds.length - 1]);
      const time = td.text().match(/(.*) /)[1];
      const availability = td.text().match(/✘/) == null;
      return [day, time, availability];
    }),
);

// https://hardcoregamer.com/2020/03/31/persona-5-royal-school-answers-guide/370520/
JSON.stringify(
  $('tr')
    .toArray()
    .map(tr =>
      $(tr)
        .find('td')
        .toArray()
        .slice(0, 2)
        .map(td => $(td).text()),
    )
    .filter(([date, answer]) => date.match(/^[a-zA-Z]+ [0-9]+$/) != null),
);
