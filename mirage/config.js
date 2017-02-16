//import {Enum} from 'npm:enumify';

export default function() {

  this.namespace = '/api';

  //class TimingType extends Enum {}
  //TimingType.initEnum(['Timed', 'Untimed']);

  //class SectionType extends Enum {}
  //SectionType.initEnum(['All', 'Quantative', 'Verbal']);

  let practiceTypes = [{
      type: 'practice-type',
      id: 'Custom',
      attributes: {
        type: 'Custom',
        options: {
          timing: ['Timed', 'Untimed'],
          sections: ['Quantative', 'Verbal']
        }
      }
    }, {
        type: 'practice-type',
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
        problemIds: ['82cjfh', '72cjfh'],
        numberOfProblems: 2,
        section: 'Verbal',
        isComplete: true,
        problemStats: [{
          problemId: '82cjfh',
          yourAnswer: 'A',
          isCorrect: false,
          sectionType: 'VerbalReasoning',
          questionType: 'ReadingComprehension',
          difficultyLevel: 'Medium',
          percentCorrect: 0.64
        }, {
          problemId: '72cjfh',
          yourAnswer: 'B',
          isCorrect: true,
          sectionType: 'VerbalReasoning',
          questionType: 'ReadingComprehension',
          difficultyLevel: 'Hard',
          percentCorrect: 0.44
        }],
        practiceType: {
          type: 'Custom',
          options: {
            timing: ['Untimed'],
            sections: ['Verbal']
          }
        }
      }
    }];

    // User <-> Practice Session <-> AnsweredProblemStats

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
        "questionType": "reading-comprehension",
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
        "questionType": "reading-comprehension",
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
        "questionType": "reading-comprehension",
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
        "questionType": "text-completion",
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
        "questionType": "text-completion",
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
        "questionType": "text-completion",
        "question": "The Chinese, who began systematic astronomical and weather observations shortly after the ancient Egyptians, were assiduous record-keepers, and because of this, can claim humanity’s longest continuous _____ of natural events.",
        "answer": "B",
        "canSelectMultipleAnswers": false,
        "difficultyLevel": "Easy",
        "stats": {
          "percentCorrect": 0.82
        }
      }
    }];

  let profile = {
    id: 1,
    attributes: {
      username: 'jhwang',
      password: 'Password123',
      practiceSessions: []
    }
  };

  this.get('/practice-types', function() {
    return { data: practiceTypes };
  });

  this.get('/practice-types/:id', function(db, request) {
    return { data: practiceTypes.find((pType) => request.params.id === pType.id) };
  });

  // gets you a history of your practice sessions
  this.get('/practice-sessions', function() {
    return { data: practiceSessions };
  });

  // creates a new practice session
  var pSessionId = 1;
  this.post('/practice-sessions', function(db, request) {
    let practiceSession = JSON.parse(request.requestBody).data;
    if (practiceSession) {
      practiceSession.id = ++pSessionId;

      // need to grab X question ids
      practiceSession.attributes.problemIds = problems.map((p) => p.id);
      practiceSession.attributes.isComplete = false;
      practiceSession.attributes.creationDate = new Date();
      practiceSession.attributes.lastModified = new Date();
      practiceSession.attributes.problemStats = [];
      problems.forEach(function(p) {
         practiceSession.attributes.problemStats.push({
            problemId: p.id,
            isCorrect: false,
            sectionType: p.attributes.sectionType,
            questionType: p.attributes.questionType,
            percentCorrect: p.attributes.stats.percentCorrect,
            difficultyLevel: p.attributes.difficultyLevel
          });
      });
      practiceSessions.push(practiceSession);
      console.log(practiceSessions);
    }

    return { data: practiceSession };
  });

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

  this.patch('/practice-sessions/:practiceSessionId', function(db, request) {
    let practiceSession = JSON.parse(request.requestBody).data;
    console.log(practiceSession.id);
    // https://github.com/emberjs/data/issues/4721
    // TL;DR JSONAPIAdapter does not support only sending changed properties for PATCH yet
    let success = false;
    practiceSession.id = parseInt(practiceSession.id)
    for (var i = 0;i < practiceSessions.length;i++) {
      if (practiceSessions[i].id === practiceSession.id) {
        practiceSessions[i] = practiceSession;
        success = true;
      }
    }

    if (success) {
      return { data: null };
    }
    else {
      return { errors: ['Failed to Patch Session ' + practiceSession.id] };
    }
  });

  this.post('/practice-sessions/:practiceSessionId/problem/:problem_id', function(db, request) {
    let sessionId = request.params.practiceSessionId;
    let problemId = request.params.problem_id;
  });

  this.get('/problems', function() {
    // TODO: Filter based on criteria
    return { data: problems };
  });

  this.get('/problems/:id', function(db, request) {
    return { data: problems.find((p) => request.params.id === p.id) };
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
