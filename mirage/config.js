import {Enum} from 'npm:enumify';

export default function() {

  this.namespace = '/api';

  //class TimingType extends Enum {}
  //TimingType.initEnum(['Timed', 'Untimed']);

  //class SectionType extends Enum {}
  //SectionType.initEnum(['All', 'Quantative', 'Verbal']);

  let practiceTypes = [{
      type: 'practice-types',
      id: 'Custom',
      attributes: {
        type: 'Custom',
        options: {
          timing: ['Timed', 'Untimed'],
          sections: ['Quantative', 'Verbal']
        }
      }
    }, {
        type: 'practice-types',
        id: 'Quick',
        attributes: {
          type: 'Quick',
          options: {
            sections: ['Quantative', 'Verbal']
          }
        }
    }];

  let practiceSessions = [{
    id: 1,
    type: 'practice-session',
    attributes: {
      creationDate: new Date(2016, 12, 12, 16, 45, 0, 0),
      lastModified: new Date(2016, 12, 15, 20, 0, 0, 0),
      sessionStats: {
        numberOfQuestions: 4,
        questions: ['id1', 'id2']
      },
      practiceType: {
        type: 'Custom',
        options: {
          timing: ['Untimed'],
          sections: ['Verbal']
        }
      }
    }
  }];


    let problems = [{
      id: "82cjfh",
      type: 'problem',
      attributes: {
        "passage": "Immediately relevant to game theory are the sex ratios in certain parasitic wasp species that have a large excess of females. In these species, fertilized eggs develop into females and unfertilized eggs into males.  A female stores sperm and can determine the sex of each egg she lays by fertilizing it or leaving it unfertilized. By Fisher‘s genetic argument that the sex ratio will be favored which maximizes the number of descendants an individual will have and hence the  number of gene copies transmitted, it should pay a female to produce equal numbers of sons and daughters. Hamilton, noting that the eggs develop within their host—the larva of another insect—and that the newly emerged adult wasps mate immediately and disperse,  offered a remarkably cogent analysis. Since only one female usually lays eggs in a given larva, it would pay her to produce one male only, because this one male could fertilize all his sisters on emergence. Like Fisher, Hamilton looked for an evolutionarily stable strategy,  but he went a step further in recognizing that he waslooking for a strategy.",
        "answerChoices": {
          "A": "conducted their research at approximately the same time",
          "B": "sought to manipulate the sex ratios of some of the animals they studied",
          "C": "sought an explanation of why certain sex ratios exist and remain stable",
          "D": "studied game theory, thereby providing important groundwork for the later development of strategy theory",
          "E": "studied reproduction in the same animal species"
        },
        "sectionType": "VerbalReasoning",
        "questionType": "ReadingComprehension",
        "question": "The author suggests that the work of Fisher and Hamilton was similar in that both scientists",
        "answer": "C",
        "canSelectMultipleAnswers": false,
        "difficultyLevel": "Medium",
        "stats": {
          "percentCorrect": 0.64
        }
      }
    }, {
      id: "72cjfh",
      type: 'problem',
      attributes: {
        "passage": "Immediately relevant to game theory are the sex ratios in certain parasitic wasp species that have a large excess of females. In these species, fertilized eggs develop into females and unfertilized eggs into males.  A female stores sperm and can determine the sex of each egg she lays by fertilizing it or leaving it unfertilized. By Fisher‘s genetic argument that the sex ratio will be favored which maximizes the number of descendants an individual will have and hence the  number of gene copies transmitted, it should pay a female to produce equal numbers of sons and daughters. Hamilton, noting that the eggs develop within their host—the larva of another insect—and that the newly emerged adult wasps mate immediately and disperse,  offered a remarkably cogent analysis. Since only one female usually lays eggs in a given larva, it would pay her to produce one male only, because this one male could fertilize all his sisters on emergence. Like Fisher, Hamilton looked for an evolutionarily stable strategy,  but he went a step further in recognizing that he waslooking for a strategy.",
        "answerChoices": {
          "A": "How many eggs does the female wasp usually lay in a single host larva?",
          "B": "Can some species of wasp determine sex ratios among their offspring?",
          "C": "What is the approximate sex ratio among the offspring of parasitic wasps?"
        },
        "sectionType": "VerbalReasoning",
        "questionType": "ReadingComprehension",
        "question": "The passage contains information that would answer which of the following questions about wasps?",
        "answer": "B",
        "canSelectMultipleAnswers": false,
        "difficultyLevel": "Hard",
        "stats": {
          "percentCorrect": 0.44
        }
      }
    }, {
      id: "72cggh",
      type: 'problem',
      attributes: {
        "passage": "Immediately relevant to game theory are the sex ratios in certain parasitic wasp species that have a large excess of females. In these species, fertilized eggs develop into females and unfertilized eggs into males.  A female stores sperm and can determine the sex of each egg she lays by fertilizing it or leaving it unfertilized. By Fisher‘s genetic argument that the sex ratio will be favored which maximizes the number of descendants an individual will have and hence the  number of gene copies transmitted, it should pay a female to produce equal numbers of sons and daughters. Hamilton, noting that the eggs develop within their host—the larva of another insect—and that the newly emerged adult wasps mate immediately and disperse,  offered a remarkably cogent analysis. Since only one female usually lays eggs in a given larva, it would pay her to produce one male only, because this one male could fertilize all his sisters on emergence. Like Fisher, Hamilton looked for an evolutionarily stable strategy,  but he went a step further in recognizing that he waslooking for a strategy.",
        "answerChoices": {
          "A": "Adult female wasps are capable of storing sperm.",
          "B": "Female wasps lay their eggs in the larvae of other insects.",
          "C": "The adult female wasp can be fertilized by a male that was hatched in the same larva as herself.",
          "D": "So few male wasps are produced that extinction is almost certain.",
          "E": "Male wasps do not emerge from their hosts until they reach sexual maturity."
        },
        "sectionType": "VerbalReasoning",
        "questionType": "ReadingComprehension",
        "question": "Which of the following is NOT true of the species of parasitic wasps discussed in the passage?",
        "answer": "D",
        "canSelectMultipleAnswers": false,
        "difficultyLevel": "Medium",
        "stats": {
          "percentCorrect": 0.65
        }
      }
    }, {
      id: "12bzvj",
      type: 'problem',
      attributes: {
        "answerChoices": {
          "A": "lasts",
          "B": "varies",
          "C": "falters",
          "D": "accelerates",
          "E": "dwindles"
        },
        "sectionType": "VerbalReasoning",
        "questionType": "TextCompletion",
        "question": "Although adolescent maturational and developmental states occur in an orderly sequence, their timing _____ with regard to onset and duration.",
        "answer": "B",
        "canSelectMultipleAnswers": false,
        "difficultyLevel": "Easy",
        "stats": {
          "percentCorrect": 0.76
        }
      }
    }, {
      id: "92bzwj",
      type: 'problem',
      attributes: {
        "answerChoices": {
          "A": "encouraging",
          "B": "daunting",
          "C": "unpromising",
          "D": "superficial",
          "E": "challenging"
        },
        "sectionType": "VerbalReasoning",
        "questionType": "TextCompletion",
        "question": "The prospects of discovering new aspects of the life of a painter as thoroughly studied as Vermeer are not, on the surface,_____.",
        "answer": "A",
        "canSelectMultipleAnswers": false,
        "difficultyLevel": "Hard",
        "stats": {
          "percentCorrect": 0.33
        }
      }
    }, {
      id: "92bzxj",
      type: 'problem',
      attributes: {
        "answerChoices": {
          "A": "defiance",
          "B": "documentation",
          "C": "maintenance",
          "D": "theory",
          "E": "domination"
        },
        "sectionType": "VerbalReasoning",
        "questionType": "TextCompletion",
        "question": "The Chinese, who began systematic astronomical and weather observations shortly after the ancient Egyptians, were assiduous record-keepers, and because of this, can claim humanity’s longest continuous _____ of natural events.",
        "answer": "B",
        "canSelectMultipleAnswers": false,
        "difficultyLevel": "Easy",
        "stats": {
          "percentCorrect": 0.82
        }
      }
    }];

  this.get('/practice-types', function(db, request) {
    return { data: practiceTypes };
  });

  this.get('/practice-types/:id', function(db, request) {
    return { data: practiceTypes.find((pType) => request.params.id === pType.id) };
  });

  // gets you a history of your practice sessions
  this.get('/practice-sessions', function(db, request) {
    return { data: practiceSessions };
  });

  this.post('/practice-sessions', function(db, request) {
    var pSessionId = 1;
    let practiceSession = JSON.parse(request.requestBody).data;
    if (practiceSession) {
      practiceSession.id = ++pSessionId;
      practiceSessions.push(practiceSession);
      console.log(practiceSessions);
    }

    return { data: practiceSession };
  });

  // update the practice session
  // this.patch('/practice-sessions/:practiceSessionId', function(db, request) {
  //   let practiceSession = practiceTypes.find((practiceSession) => request.params.practiceSessionId === practiceSession.id);
  //
  //   practiceSession.sessionStats.numberOfQuestions += request.params.numberOfQuestions;
  //   practiceSession.sessionStats.questions.concat(request.params.questions);
  //   practiceSession.lastModified = new Date();
  //
  //   practiceSession.save();
  // });

  this.get('/practice-sessions/:practiceSessionId', function(db, request) {
    if (!request.params.practiceSessionId) {
      return { errors: ['No practice session id requested!'] };
    }
    let practiceSession = practiceSessions.find((ps) => request.params.practiceSessionId == ps.id);

    if (!practiceSession) {
      return { errors: ['Could not find the practice session!'] };
    }

    return { data: practiceSession };
  });

  this.get('/problems', function(db, request) {
    // TODO: Filter based on criteria
    return { data: problems };
  });

  // Information about the user, endpoints

  // For [User], Submit [Statistics] for [Question]
  // this.post('/users/:userId/questionStats/:questionId', function(db, request) {
  //   return {};
  // });
  //
  // // the user's question statistics
  // this.get('/users/:userId/questionStats' ,function(db, request) {
  //   return {};
  // });
  //
  // // information about the user
  // this.get('/users/:userId' ,function(db, request) {
  //
  // });



}
