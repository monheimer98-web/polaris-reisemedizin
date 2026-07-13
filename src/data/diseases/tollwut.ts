/**
 * Krankheitsbild Tollwut — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Sachlich, ohne Heilversprechen (HWG-konform).
 *
 * Schwerpunkt: nahezu immer tödlich verlaufende Virusinfektion, die sich durch
 * rechtzeitige Prä- und Postexpositionsprophylaxe verhindern lässt. Der
 * Abschnitt „Verhalten nach Tierkontakt" betont den Notfallcharakter; der
 * Impf-Abschnitt erklärt die Reise-Indikation der vorbeugenden Impfung (PrEP).
 */
import type { ClinicalPage } from '../types';

export const tollwutDisease: ClinicalPage = {
  meta: {
    title: { de: 'Tollwut', en: 'Rabies' },
    description: {
      de: 'Tollwut – Erreger, Übertragung durch Tierbisse, Verbreitung, Krankheitsverlauf, Verhalten nach Tierkontakt, Impfung (PrEP) und Vorbeugung.',
      en: 'Rabies – pathogen, transmission via animal bites, distribution, course of disease, what to do after animal contact, vaccination (PrEP) and prevention.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Tollwut ist eine Virusinfektion, die über den Speichel infizierter Tiere – meist durch Hundebisse – übertragen wird. Mit rechtzeitiger Vorsorge und der richtigen Behandlung nach einem Tierkontakt lässt sie sich zuverlässig verhindern; einmal ausgebrochen, ist sie dagegen kaum behandelbar. Umso wichtiger ist der vorbeugende Schutz.',
      en: 'Rabies is a viral infection transmitted via the saliva of infected animals – usually through dog bites. With timely prevention and the right treatment after animal contact it can be reliably averted; once it has broken out, however, it is barely treatable. That makes preventive protection all the more important.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Tollwut wird durch Lyssaviren ausgelöst, die das Nervensystem befallen. Das klassische Tollwutvirus gehört zur Familie der Rhabdoviren. In Europa kommen zudem eng verwandte Fledermaus-Lyssaviren vor.',
          'Das Virus wandert nach einer Ansteckung entlang der Nervenbahnen zum Gehirn. Diese Wanderung erklärt, warum zwischen Ansteckung und Erkrankung oft Wochen bis Monate liegen – und warum eine Vorbeugung in dieser Zeit noch wirken kann.',
        ],
        en: [
          'Rabies is caused by lyssaviruses, which attack the nervous system. The classic rabies virus belongs to the rhabdovirus family. In Europe, closely related bat lyssaviruses also occur.',
          'After infection the virus travels along the nerve pathways to the brain. This migration explains why there are often weeks to months between infection and illness – and why prevention can still work during this time.',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'Das Virus wird über den Speichel infizierter Tiere übertragen, vor allem durch Bisse, aber auch durch Kratzer oder über Kontakt mit Schleimhäuten und offenen Wunden. Weltweit gehen rund 99 Prozent der Tollwutfälle beim Menschen auf Hundebisse zurück.',
          'Auch andere Säugetiere können das Virus übertragen, etwa Katzen, Affen und Fledermäuse. Besonders für Kinder besteht ein erhöhtes Risiko, da sie häufiger Kontakt zu Tieren suchen und Bisse seltener berichten.',
        ],
        en: [
          'The virus is transmitted via the saliva of infected animals, above all through bites, but also through scratches or contact with mucous membranes and open wounds. Worldwide, around 99 per cent of human rabies cases are due to dog bites.',
          'Other mammals can also transmit the virus, such as cats, monkeys and bats. Children are at particularly increased risk, as they more often seek contact with animals and report bites less frequently.',
        ],
      },
    },
    {
      id: 'verbreitung',
      heading: { de: 'Verbreitung', en: 'Geographic distribution' },
      body: {
        de: [
          'Tollwut kommt in mehr als 150 Ländern vor. Das höchste Risiko für Reisende besteht in Teilen Asiens und Afrikas, mit besonders vielen Fällen in Indien. Streunende Hunde in Städten und ländlichen Gebieten sind dabei die wichtigste Infektionsquelle.',
          'Deutschland gilt seit 2008 als frei von klassischer Tollwut bei landlebenden Tieren; ein Restrisiko geht hier von Fledermäusen aus. Für Reisen in Risikogebiete ist die Einschätzung der Lage vor Ort entscheidend – wir nehmen sie im Beratungsgespräch und anhand der unten genannten Quellen vor.',
        ],
        en: [
          'Rabies occurs in more than 150 countries. The highest risk for travellers is in parts of Asia and Africa, with particularly many cases in India. Stray dogs in towns and rural areas are the most important source of infection.',
          'Germany has been considered free of classic rabies in land-dwelling animals since 2008; a residual risk here comes from bats. For travel to risk areas, assessing the local situation is decisive – we do this in the consultation and on the basis of the sources listed below.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Zwischen Ansteckung und Erkrankung liegen meist zwei bis drei Monate, in Einzelfällen wenige Tage bis mehrere Jahre. Erste Anzeichen sind oft unspezifisch, etwa Fieber, Kopfschmerzen und Missempfindungen an der Bissstelle. Im weiteren Verlauf kommt es zu schweren neurologischen Symptomen, bei der häufigen Form mit Erregungszuständen, Krämpfen und ausgeprägter Angst vor Wasser (Hydrophobie).',
          'Die Erkrankung betrifft das Gehirn und ist, sobald Symptome aufgetreten sind, kaum noch behandelbar. Der gesamte Schutz beruht deshalb darauf, eine Infektion rechtzeitig – vor dem Ausbruch der Erkrankung – zu verhindern.',
        ],
        en: [
          'Between infection and illness there are usually two to three months, in individual cases a few days to several years. The first signs are often non-specific, such as fever, headache and abnormal sensations at the bite site. As it progresses, severe neurological symptoms develop, in the common form with agitation, spasms and a marked fear of water (hydrophobia).',
          'The disease affects the brain and, once symptoms have appeared, is barely treatable. All protection is therefore based on preventing an infection in time – before the disease can break out.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Keine Behandlung bei Ausbruch – Vorbeugung entscheidend', en: 'No treatment once it breaks out – prevention is decisive' },
        text: {
          de: 'Für die ausgebrochene Tollwut gibt es keine ursächliche Behandlung. Entscheidend ist deshalb die Vorbeugung: durch umsichtiges Verhalten gegenüber Tieren, durch die richtige Reaktion nach einem Tierkontakt und – je nach Reise – durch eine vorbeugende Impfung.',
          en: 'There is no causal treatment for rabies once it has broken out. Prevention is therefore decisive: through careful behaviour towards animals, through the right response after animal contact and – depending on the trip – through preventive vaccination.',
        },
      },
    },
    {
      id: 'notfall',
      heading: { de: 'Verhalten nach Tierkontakt', en: 'What to do after animal contact' },
      body: {
        de: [
          'Jeder Biss, Kratzer oder Schleimhautkontakt mit einem möglicherweise infizierten Tier in einem Risikogebiet ist ein Notfall. Die Wunde sollte sofort und gründlich – etwa 15 Minuten – mit Wasser und Seife gewaschen und anschließend desinfiziert werden.',
          'Unmittelbar danach ist ärztliche Hilfe vor Ort aufzusuchen, um eine Schutzbehandlung nach Risikokontakt (Postexpositionsprophylaxe) einzuleiten. Diese ist auch dann notwendig, wenn die Wunde klein erscheint, und gilt unabhängig davon, ob zuvor geimpft wurde. Rechtzeitig begonnen, ist diese Schutzbehandlung nahezu immer wirksam.',
        ],
        en: [
          'Any bite, scratch or mucous-membrane contact with a potentially infected animal in a risk area is an emergency. The wound should be washed immediately and thoroughly – for about 15 minutes – with soap and water and then disinfected.',
          'Immediately afterwards, seek local medical help to start protective treatment after risk contact (post-exposure prophylaxis). This is necessary even if the wound appears small, and applies regardless of whether vaccination was given beforehand. Started in time, this protective treatment is almost always effective.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Tierkontakt ist ein Notfall', en: 'Animal contact is an emergency' },
        text: {
          de: 'Warten Sie nach einem Biss oder Kratzer nicht ab: Wunde sofort lange mit Wasser und Seife reinigen und umgehend ärztliche Hilfe suchen – auch bei kleinen Verletzungen und auch, wenn Sie geimpft sind. Eine vorbeugende Impfung verschafft im Notfall wertvolle Zeit, ersetzt die Schutzbehandlung nach dem Kontakt aber nicht.',
          en: 'After a bite or scratch, do not wait: clean the wound immediately and at length with soap and water and seek medical help straight away – even for small injuries and even if you are vaccinated. Preventive vaccination buys valuable time in an emergency but does not replace the protective treatment after contact.',
        },
      },
    },
    {
      id: 'impfung',
      heading: { de: 'Schutzimpfung', en: 'Vaccination' },
      body: {
        de: [
          'Zur Vorbeugung steht ein gut verträglicher Totimpfstoff zur Verfügung, der ab dem Säuglingsalter angewendet werden kann. Die vorbeugende Impfung vor der Reise (Präexpositionsprophylaxe) besteht in der Regel aus zwei Dosen im Abstand von einer Woche; bei dauerhaft erhöhtem Risiko kann später eine weitere Dosis sinnvoll sein.',
          'Die Vorimpfung verhindert eine Ansteckung nicht allein, vereinfacht aber die notwendige Schutzbehandlung nach einem Tierkontakt erheblich: Es sind dann nur noch zwei Impfdosen nötig, und das in Risikoländern oft schwer verfügbare Tollwut-Immunglobulin wird nicht mehr benötigt. Das ist besonders bei Reisen abseits guter medizinischer Versorgung von Vorteil.',
          'Die Ständige Impfkommission (STIKO) und die DTG empfehlen die vorbeugende Tollwut-Impfung als Reiseimpfung unter anderem bei längeren Aufenthalten, Reisen in entlegene Regionen mit eingeschränktem Zugang zu einer Schutzbehandlung, möglichem Tierkontakt sowie für Kinder. Ob die Impfung für Sie sinnvoll ist, klären wir individuell im Beratungsgespräch.',
        ],
        en: [
          'A well-tolerated inactivated vaccine that can be used from infancy is available for prevention. Preventive vaccination before travel (pre-exposure prophylaxis) usually consists of two doses one week apart; in cases of permanently increased risk a further dose may be sensible later.',
          'Pre-vaccination does not prevent infection on its own but considerably simplifies the necessary protective treatment after animal contact: only two further vaccine doses are then needed, and the rabies immunoglobulin that is often hard to obtain in risk countries is no longer required. This is a particular advantage when travelling away from good medical care.',
          'The German Standing Committee on Vaccination (STIKO) and the DTG recommend preventive rabies vaccination as a travel vaccination, among others for longer stays, travel to remote regions with limited access to protective treatment, possible animal contact and for children. Whether vaccination is sensible for you is something we clarify individually in the consultation.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Frühzeitig planen', en: 'Plan early' },
        text: {
          de: 'Die vorbeugende Impfung benötigt mehrere Tage bis zur vollständigen Wirkung und sollte daher rechtzeitig vor der Abreise geplant werden. Die Verfügbarkeit der Tollwut-Impfstoffe kann zeitweise eingeschränkt sein – vereinbaren Sie Ihren Termin am besten frühzeitig.',
          en: 'Preventive vaccination needs several days to take full effect and should therefore be planned in good time before departure. The availability of rabies vaccines can be temporarily limited – it is best to arrange your appointment early.',
        },
      },
    },
  ],
  sourceIds: ['rkiTollwut', 'whoRabies', 'peiTollwut', 'stikoImpfempfehlungen', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-06-12'),
  related: [
    {
      label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' },
      path: '/leistungen/reiseberatung',
    },
    {
      label: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations at a glance' },
      path: '/leistungen/reiseimpfungen',
    },
    {
      label: { de: 'Risikogebiete', en: 'Risk areas' },
      path: '/risikogebiete',
    },
  ],
};
