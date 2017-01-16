import {Enum} from 'npm:enumify';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

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
          sections: ['All', 'Quantative', 'Verbal']
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

  let questions = [{
    id: "82cjfh",
    attributes: {
      Passage: "Immediately relevant to game theory are the sex ratios in certain parasitic wasp species that have a large excess of females. In these species, fertilized eggs develop into females and unfertilized eggs into males.  A female stores sperm and can determine the sex of each egg she lays by fertilizing it or leaving it unfertilized. By Fisher‘s genetic argument that the sex ratio will be favored which maximizes the number of descendants an individual will have and hence the  number of gene copies transmitted, it should pay a female to produce equal numbers of sons and daughters. Hamilton, noting that the eggs develop within their host—the larva of another insect—and that the newly emerged adult wasps mate immediately and disperse,  offered a remarkably cogent analysis. Since only one female usually lays eggs in a given larva, it would pay her to produce one male only, because this one male could fertilize all his sisters on emergence. Like Fisher, Hamilton looked for an evolutionarily stable strategy,  but he went a step further in recognizing that he waslooking for a strategy.",
      AnswerChoices: {
        "A": "conducted their research at approximately the same time",
        "B": "sought to manipulate the sex ratios of some of the animals they studied",
        "C": "sought an explanation of why certain sex ratios exist and remain stable",
        "D": "studied game theory, thereby providing important groundwork for the later development of strategy theory",
        "E": "studied reproduction in the same animal species"
      },
      "SectionType": "VerbalReasoning",
      "QuestionType": "ReadingComprehension",
      "Question": "The author suggests that the work of Fisher and Hamilton was similar in that both scientists",
      "Answer": "C",
      "CanSelectMultipleAnswers": false,
      "DifficultyLevel": "Medium",
      "Stats": {
        "PercentCorrect": 0.64
      }
    }
  },
  {
    "Passage": "Immediately relevant to game theory are the sex ratios in certain parasitic wasp species that have a large excess of females. In these species, fertilized eggs develop into females and unfertilized eggs into males.  A female stores sperm and can determine the sex of each egg she lays by fertilizing it or leaving it unfertilized. By Fisher‘s genetic argument that the sex ratio will be favored which maximizes the number of descendants an individual will have and hence the  number of gene copies transmitted, it should pay a female to produce equal numbers of sons and daughters. Hamilton, noting that the eggs develop within their host—the larva of another insect—and that the newly emerged adult wasps mate immediately and disperse,  offered a remarkably cogent analysis. Since only one female usually lays eggs in a given larva, it would pay her to produce one male only, because this one male could fertilize all his sisters on emergence. Like Fisher, Hamilton looked for an evolutionarily stable strategy,  but he went a step further in recognizing that he waslooking for a strategy.",
    "AnswerChoices": {
      "A": "How many eggs does the female wasp usually lay in a single host larva?",
      "B": "Can some species of wasp determine sex ratios among their offspring?",
      "C": "What is the approximate sex ratio among the offspring of parasitic wasps?"
    },
    "SectionType": "VerbalReasoning",
    "QuestionType": "ReadingComprehension",
    "Question": "The passage contains information that would answer which of the following questions about wasps?",
    "Answer": "B",
    "Id": "72cjfh",
    "CanSelectMultipleAnswers": false,
    "DifficultyLevel": "Hard",
    "Stats": {
      "PercentCorrect": 0.44
    }
  },
  {
    "Passage": "Immediately relevant to game theory are the sex ratios in certain parasitic wasp species that have a large excess of females. In these species, fertilized eggs develop into females and unfertilized eggs into males.  A female stores sperm and can determine the sex of each egg she lays by fertilizing it or leaving it unfertilized. By Fisher‘s genetic argument that the sex ratio will be favored which maximizes the number of descendants an individual will have and hence the  number of gene copies transmitted, it should pay a female to produce equal numbers of sons and daughters. Hamilton, noting that the eggs develop within their host—the larva of another insect—and that the newly emerged adult wasps mate immediately and disperse,  offered a remarkably cogent analysis. Since only one female usually lays eggs in a given larva, it would pay her to produce one male only, because this one male could fertilize all his sisters on emergence. Like Fisher, Hamilton looked for an evolutionarily stable strategy,  but he went a step further in recognizing that he waslooking for a strategy.",
    "AnswerChoices": {
      "A": "Adult female wasps are capable of storing sperm.",
      "B": "Female wasps lay their eggs in the larvae of other insects.",
      "C": "The adult female wasp can be fertilized by a male that was hatched in the same larva as herself.",
      "D": "So few male wasps are produced that extinction is almost certain.",
      "E": "Male wasps do not emerge from their hosts until they reach sexual maturity."
    },
    "SectionType": "VerbalReasoning",
    "QuestionType": "ReadingComprehension",
    "Question": "Which of the following is NOT true of the species of parasitic wasps discussed in the passage?",
    "Answer": "D",
    "Id": "72cggh",
    "CanSelectMultipleAnswers": false,
    "DifficultyLevel": "Medium",
    "Stats": {
      "PercentCorrect": 0.65
    }
  },
  {
      "AnswerChoices": {
        "A": "lasts",
        "B": "varies",
        "C": "falters",
        "D": "accelerates",
        "E": "dwindles"
      },
      "SectionType": "VerbalReasoning",
      "QuestionType": "TextCompletion",
      "Id": "12bzvj",
      "Question": "Although adolescent maturational and developmental states occur in an orderly sequence, their timing _____ with regard to onset and duration.",
      "Answer": "B",
      "CanSelectMultipleAnswers": false,
      "DifficultyLevel": "Easy",
      "Stats": {
        "PercentCorrect": 0.76
      }
    },
    {
      "AnswerChoices": {
        "A": "encouraging",
        "B": "daunting",
        "C": "unpromising",
        "D": "superficial",
        "E": "challenging"
      },
      "SectionType": "VerbalReasoning",
      "QuestionType": "TextCompletion",
      "Id": "92bzwj",
      "Question": "The prospects of discovering new aspects of the life of a painter as thoroughly studied as Vermeer are not, on the surface,_____.",
      "Answer": "A",
      "CanSelectMultipleAnswers": false,
      "DifficultyLevel": "Hard",
      "Stats": {
        "PercentCorrect": 0.33
      }
    },
    {
      "AnswerChoices": {
        "A": "defiance",
        "B": "documentation",
        "C": "maintenance",
        "D": "theory",
        "E": "domination"
      },
      "SectionType": "VerbalReasoning",
      "QuestionType": "TextCompletion",
      "Id": "92bzxj",
      "Question": "The Chinese, who began systematic astronomical and weather observations shortly after the ancient Egyptians, were assiduous record-keepers, and because of this, can claim humanity’s longest continuous _____ of natural events.",
      "Answer": "B",
      "CanSelectMultipleAnswers": false,
      "DifficultyLevel": "Easy",
      "Stats": {
        "PercentCorrect": 0.82
      }
    }];

  let practiceSessions = [{
    id: 1,
    attributes: {
      creationDate: new Date(2016, 12, 12, 16, 45, 0, 0),
      lastModified: new Date(2016, 12, 15, 20, 0, 0, 0),
      sessionStats: {
        numberOfQuestions: 4,
        section: 'Verbal',
        questions: ['id1', 'id2']
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
  this.put('/practice-sessions/:practiceSessionId', function(db, request) {
    let practiceSession = practiceTypes.find((practiceSession) => request.params.practiceSessionId === practiceSession.id);

    practiceSession.sessionStats.numberOfQuestions += request.params.numberOfQuestions;
    practiceSession.sessionStats.questions.concat(request.params.questions);
    practiceSession.lastModified = new Date();

    practiceSession.save();
  });

  this.get('/practice-sessions/:practiceSessionId', function(db, request) {
    let practiceSession = practiceSessions.find((ps) => request.params.practiceSessionId == ps.id);
    if (practiceSession) {
      return { data: practiceSession };
    }
    else {
      return { errors: ['Could not find the practice session!'] };
    }
  });

  this.get('/questions', function(db, request) {
    if (request.params.section === '') {

    }
    else if (request.params.section === '') {

    }
    else if (request.params.section === '') {

    }
    else {

    }
    // need to take into consideration:
    // - questions a user has/has not answered
    // - what section the questions should be from
    //
    //return { data: questions.slice(0, 3); };
    //let questionSet = new Set(questions);
    //var options = request.params.practiceType.options;
    //if (options.)

    //return { data: questionSet.filter(q => !request.params.questionIds.has(q)) }; // TODO:
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
