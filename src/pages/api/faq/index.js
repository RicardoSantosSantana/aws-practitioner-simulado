export default function faq(req, res) {
    const dados =   [
          {
           "categoria":"Planos de Suporte",
           "pergunta":"Quais são os planos de suporte disponíveis na AWS?",
           "resposta":[
               "A AWS possui quatro (04) planos de suporte: Básico, Desenvolvedor, Negócios e Empresarial. Em sua prova de certificação eles estarão como Basic, Developer, Business e Enterprise."
           ]
          },
          {
           "categoria":"Planos de Suporte",
           "pergunta":"Qual o nível de suporte de arquitetura é fornecido pelo AWS Support?",
           "resposta":[
               "O nível de suporte de arquitetura fornecido varia conforme o nível de suporte. Níveis de serviço mais elevados oferecem suporte progressivo para o caso de uso e especificações do aplicativo do cliente.",
               "<strong>Básico: </strong>free tier<br/> Acesso gratuito à central de recursos, ao painel de status dos serviços, às perguntas frequentes sobre produtos, aos fóruns de discussão e ao suporte a verificações de integridade.",
               "<strong>Desenvolvedor:</strong> componentes básicos <br/>Orientação sobre como usar todos os produtos, recursos e serviços da AWS juntos. Inclui orientação sobre as melhores práticas e instrução arquitetônica generalizada.",
               "<strong>Business:</strong> orientação de casos de uso <br/> Orientação sobre quais produtos, recursos e serviços da AWS usar para melhor oferecer suporte aos casos de uso específicos. Inclui orientação quanto à otimização de produtos da AWS e à configuração para atender a suas necessidades específicas.",
               "<strong>Enterprise:</strong> arquitetura do aplicativo <br/>  Parceria consultiva oferecendo suporte a casos de uso e aplicativos específicos. Inclui análises de projeto e orientações de arquitetura. A equipe de suporte ao cliente do nível Empresarial inclui um gerente técnico da conta (TAM) designado e acesso a um arquiteto de soluções da AWS."
           ]    
          },
          {
           "categoria":"Planos de Suporte",
           "pergunta":"Quantos usuários podem abrir casos de suporte técnico?",
           "resposta":[
               "<strong>Básico:</strong> Não podem abrir casos de suporte técnico.",
               "<strong>Desenvolvedor: </strong>Permite que um (01) usuário abra casos de suporte técnico",
               "<strong>Business e Enterprise: </strong>Permitem que um número ilimitado de usuários abra casos de suporte técnico (com o suporte do AWS Identity and Access Management (IAM))."
           ]    
          },
          {
           "categoria":"Planos de Suporte",
           "pergunta":"Qual é o tempo de resposta (SLA) do suporte?",
           "resposta":[        
               {
                   "text":"O tempo de resposta varia conforme o plano de suporte escolhido:", 
                   "image":"tempo-resposta-sla.png"
               }
               
           ]    
          },
          {
           "categoria":"Planos de Suporte",
           "pergunta":"Como faço para entrar em contato?",
           "resposta":[
               "Se você tiver um plano de suporte pago, pode abrir um caso de suporte on-line na <a href='https://console.aws.amazon.com/support/home?#/'>Central de suporte.</a> Se você tiver o suporte no nível Business ou Empresarial, poderá solicitar que a AWS entre em contato com você em qualquer telefone ou iniciar uma conversa via chat com um dos nossos engenheiros.",
               "E dependendo do seu nível de suporte, o chat também fica disponível, além do telefone e e-mail."        
           ]    
          },
          {
           "categoria":"Planos de Suporte",
           "pergunta":"Quais os idiomas do AWS Support?",
           "resposta":[
               "O AWS Support por enquanto está disponível nos idiomas Inglês e em Japonês."        
           ]    
          },
          {
           "categoria":"Planos de Suporte",
           "pergunta":"Quais softwares de terceiros têm suporte?",
           "resposta":[
               "Os níveis Business e Enterprise do AWS Support incluem suporte limitado para sistemas operacionais e componentes de pilhas de aplicativos comuns. Os engenheiros do AWS Support podem auxiliar na instalação, configuração e resolução de problemas dos softwares de terceiros incluídos na lista de compatibilidade."        
           ]
          },
          {
           "categoria":"Planos de Suporte",
           "pergunta":"O que é o suporte para verificações de saúde?",
           "resposta":[
               "O suporte a verificações de integridade monitora algumas verificações de status exibidas no console do Amazon EC2. Quando uma dessas verificações falha, todos os clientes têm a opção de abrir um caso de suporte técnico de alta severidade.",
               "O suporte a verificações de integridade abrange determinadas verificações do Amazon Elastic Compute Cloud (Amazon EC2) e do Amazon Elastic Block Store (Amazon EBS)."
           ]
          },
          {
           "categoria":"Planos de Suporte",
           "pergunta":"Como posso obter suporte, caso uma instância do EC2 falhe na verificação de status do sistema?",
           "resposta":[        
               "Se uma verificação de status do sistema do EC2 falhar por mais de 20 minutos, será exibido um botão que permite que qualquer cliente da AWS abra um caso. A maioria dos detalhes sobre o seu caso é preenchida automaticamente, como o nome da instância, a região e as informações do cliente, mas você pode incluir contexto adicional redigindo uma descrição de texto livre.",
               { 
                 "text":"Observação: o suporte para verificações de integridade abrange apenas verificações de status do sistema do EC2 e não a verificação de status da instância do EC2.",
                 "image":"suporte-ec2.png"
               } 
               
           ]
          },
          {
           "categoria":"Planos de Suporte",
           "pergunta":"Enterprise On-Ramp",
           "resposta":[        
               "Em <strong>Dezembro/2021</strong>, a AWS adicionou um novo plano de suporte; <strong>'Enterprise On-Ramp'</strong>.",
               { 
                 "text":"Assim, teremos 05 planos de suporte: Basic, Developer, Business, Enterprise On-Ramp & Enterprise.",
                 "image":"onramp.jpeg"
               } ,
               "Segundo a política de certificação AWS, um novo produto, serviço ou recurso, deve estar disponível publicamente por seis meses antes de aparecer em um exame de certificação.",
               "Por isso, até Julho de 2021, ainda haverá questões apenas com as nomenclaturas (Basic, Developer, Business e Enterprise)."
               
           ]
          },
          {
           "categoria":"Nível Gratuito",
           "pergunta":"Quando o nível gratuito da AWS expirará?",
           "resposta":[
               "Duração de 12 meses. Porém, quando o nível gratuito expirar OU se o uso do aplicativo ultrapassar os níveis do nível gratuito, você simplesmente pagará as taxas de serviço padrão conforme o uso."
           ]
          },   
          {
           "categoria":"Nível Gratuito",
           "pergunta":"O que é o nível gratuito da AWS?",
           "resposta":[
               "O nível gratuito da AWS oferece aos clientes a capacidade de explorar e testar gratuitamente serviços da AWS até os limites especificados para cada serviço."
           ]
          },   
          {
           "categoria":"Nível Gratuito",
           "pergunta":"Se nos cadastrarmos para o faturamento consolidado, poderemos obter o nível gratuito da AWS para cada conta?",
           "resposta":[
               "Não, os clientes que usam o faturamento consolidado para consolidar o pagamento de várias contas terão acesso a apenas um nível gratuito por organização."
           ]
          },   
          {
           "categoria":"Nível Gratuito",
           "pergunta":"Se eu não esgotar todo o uso do nível gratuito mensal, ele será acumulado para o próximo mês?",
           "resposta":[
               "Não, o nível gratuito da AWS é aplicado apenas ao uso mensal. O nível gratuito expira no primeiro dia de cada mês e não é acumulado."
           ]
          },  
          {
           "categoria":"Nível Gratuito",
           "pergunta":"Se eu exceder o limite do nível gratuito em um determinado mês, quanto terei que pagar?",
           "resposta":[
               "Se a sua utilização ultrapassar os limites mensais do nível gratuito, você pagará as taxas de serviço da AWS padrão conforme o uso."
           ]
          },
          {
           "categoria":"Nível Gratuito",
           "pergunta":"Como eu sei quanto utilizei e se excedi os níveis de uso gratuito?",
           "resposta":[
               "Você pode ver a atividade de uso atual e passada por serviço e região entrando na sua conta e indo para o painel de gerenciamento de faturamento e custos."
           ]
          },
          {
           "categoria":"Nível Gratuito",
           "pergunta":"Estou qualificado para o nível de uso gratuito, mas recebi uma cobrança. Por quê?",
           "resposta":[
               "O nível gratuito se aplica a determinados serviços da AWS e até um valor máximo específico de uso mensal. Quando uma conta excede o limite do nível gratuito, as taxas de serviço da AWS padrão são faturadas no seu cartão de crédito."
           ]
          },
          {
           "categoria":"Nível Gratuito",
           "pergunta":"Posso usar o nível gratuito da AWS em qualquer região?",
           "resposta":[
               "Sim."
           ]
          },
          {
           "categoria":"Nível Gratuito",
           "pergunta":"Um cliente da AWS tem acesso a 750 horas de instância em cada instância t2.micro Linux e Windows proporcionadas pelo nível gratuito da AWS?",
           "resposta":[
               "Sim. Um cliente com acesso ao nível gratuito da AWS pode usar até 750 horas de instância de cada instância t2.micro executando Linux e Windows. A utilização das instâncias t2.micro do Linux e do Windows é contada independentemente."
           ]
          },   
          {
           "categoria":"Nível Gratuito",
           "pergunta":"Quais são as três ofertas gratuitas na AWS ?",
           "resposta":[
               "São as do tipo sempre gratuitas, as de 12 meses gratuitos e as de testes por um curto prazo."
           ]
          },   
          {
           "categoria":"SNS",
           "pergunta":"O que é o Amazon Simple Notification Service (Amazon SNS)?",
           "resposta":[
               "O Amazon Simple Notification Service (Amazon SNS) é um web service que facilita a configuração, a operação e o envio de notificações da Nuvem."
           ]
          },   
          {
           "categoria":"SNS",
           "pergunta":"Quais são alguns usos de exemplo das notificações do Amazon SNS?",
           "resposta":[
               "O serviço do Amazon SNS oferece suporte a uma ampla variedade de necessidades, incluindo notificação de eventos, aplicativos de monitoramento, sistemas de fluxo de trabalho, atualizações de informações urgentes, aplicativos móveis e qualquer outro aplicativo que gere ou consuma notificações.",
               "Por exemplo, o Amazon SNS pode ser usado em sistemas de fluxo de trabalho para vincular eventos entre aplicativos, mover dados entre datastores ou atualizar registros em sistemas de negócios.",
               "Um padrão comum é usar o Amazon SNS para publicar mensagens nas filas de mensagens do Amazon SQS, a fim de enviar mensagens de forma confiável e assíncrona para um ou mais componentes do sistema."
           ]
          },   
          {
           "categoria":"SNS",
           "pergunta":"Como o Amazon SNS funciona?",
           "resposta":[
               "Primeiro os <strong>desenvolvedores</strong> criam um <strong>''tópico''</strong> que é um ''ponto de acesso'' – identificando um assunto específico ou um tipo de evento – para a publicação de mensagens e a permissão de clientes para se inscrever nas notificações.",
               "Depois do tópico criado, seu <strong>proprietário</strong> define políticas, como a limitação de quem pode publicar mensagens, se inscrever, ou até especificar quais protocolos de notificação serão utilizados (como o uso do, HTTP/HTTPS, e-mail).",
               "Os <strong>assinantes</strong> são os clientes interessados em receber as notificações de tópicos. Eles podem se inscrever em um tópico ou serem inscritos pelo proprietário do tópico. Os assinantes especificam o protocolo e o endpoint (URL, endereço de e-mail etc.) para receberem as notificações.",
               "Quando os <strong>editores</strong> tiverem informações ou atualizações para notificar seus assinantes, eles publicam uma mensagem para o tópico – que acionará imediatamente o <strong>Amazon SNS</strong> para entregar a mensagem a todos os assinantes aplicáveis"
           ]
          },   
          {
           "categoria":"SNS",
           "pergunta":"Qual a diferença do Amazon SNS, do Amazon SQS?",
           "resposta":[
               "O <strong>Amazon SNS</strong> permite que aplicativos enviem mensagens para vários assinantes através de um mecanismo de 'push'. Já o <strong>Amazon SQS</strong> é um serviço de fila de mensagens usado por aplicativos distribuídos para trocar mensagens através de um modelo de sondagem e pode ser usado para desacoplar componentes de envio e recebimento.",
               "Um padrão comum é usar o <strong>Amazon SNS</strong> para publicar mensagens nas filas do <strong>Amazon SQS</strong>, a fim de enviar mensagens de forma confiável e assíncrona para um ou mais componentes do sistema."        
           ]
          },   
          {
           "categoria":"SNS",
           "pergunta":"Quanto custa o Amazon SNS?",
           "resposta":[
               "Com o <strong>Amazon SNS</strong>, não há taxa mínima e você paga somente por aquilo que usar",
               "Contudo, consultando o site em <strong>agosto de 2020</strong>, os usuários pagam 0,50 USD por 1 milhão de solicitações do Amazon SNS, 0,06 USD por 100.000 entregas de notificação via HTTP e 2,00 USD por 100.000 entregas de notificação via e-mail.",
               "Para mensagens SMS, os usuários podem enviar 100 notificações grátis e as cobranças de mensagens subsequentes variam por país de destino.",
               "O <strong>Amazon SNS </strong>também inclui um nível gratuito, no qual os usuários podem começar a usar o serviço gratuitamente. A cada mês, os clientes do Amazon SNS não pagam encargos pelo primeiro 1 milhão de solicitações do Amazon SNS, pelas 100.000 primeiras notificações via HTTP, pelas 100 primeiras notificações via SMS e pelas 1.000 primeiras notificações via e-mail."
           ]
          },   
          {
           "categoria":"SNS",
           "pergunta":"Qual é o formato de um tópico do Amazon SNS?",
           "resposta":[
               "Há um limite de 256 caracteres para os nomes dos tópicos. Caracteres alfanuméricos mais hifens (-) e sublinhados (_) são permitidos. Os nomes de tópicos devem ser exclusivos em uma conta da AWS. Após excluir um tópico, você pode reutilizar o nome do tópico."
           ]
          },   
          {
           "categoria":"SNS",
           "pergunta":"O que é um Amazon Resource Name (ARN) ?",
           "resposta":[
               "Quando um tópico é criado, o <strong>Amazon SNS</strong> atribuirá um <strong>ARN (Amazon Resource Name)</strong> exclusivo para o tópico, que incluirá o nome do serviço (SNS), a região, o ID da AWS do usuário e o nome do tópico. O ARN será retornado como parte da chamada de API para criar o tópico. Sempre que um editor ou assinante precisar desempenhar qualquer ação no tópico, eles deverão consultar o ARN exclusivo do tópico.",
               "Exemplo de um ARN para o tópico chamado “mytopic”, criado por um usuário com o ID da conta da AWS “123456789012” e hospedado na região Leste dos EUA, ficará como: <strong> arn:aws:sns:us-east-1:1234567890123456:mytopic</strong>"
           ]
          },   
          {
           "categoria":"SNS",
           "pergunta":"Quais são as operações disponíveis do Amazon SNS e quem pode desempenhar essas operações?",
           "resposta":[
               "O Amazon SNS fornece um conjunto de APIs simples para habilitar notificações de eventos para <strong>proprietários</strong> de tópicos, <strong>assinantes</strong> e <strong>editores.</strong> Deste modo, e dependendo do seu nível de acesso, você conseguirá executar as seguintes ações no tópico.",
               "<strong>O proprietário do tópico pode:</<strong>",
               "CreateTopic – Crie um novo tópico",
               "DeleteTopic – Exclua um tópico criado anteriormente.",
               "ListTopics – Lista dos tópicos de propriedade de um determinado usuário (ID da AWS).",
               "ListSubscriptionsByTopic – Lista dos tópicos de um determinado tópico",
               "SetTopicAttributes – Defina/modifique atributos de tópicos, incluindo a definição e a modificação de permissões do editor/assinante, transportes compatíveis etc.",
               "GetTopicAttributes – Obtenha/visualize atributos existentes de um tópico",
               "AddPermission – Conceda acesso a usuários selecionados para as ações específicas",
               "RemovePermission – Remova permissões referentes a usuários selecionados para as ações específicas",
               "<strong>O assinante do tópico pode:</strong>",
               "Subscribe – Inscreva uma nova assinatura em um determinado tópico, que gerará uma mensagem de confirmação do Amazon SNS",
               "ConfirmSubscription – Responda a uma mensagem de confirmação de assinatura, confirmando a solicitação de assinatura para receber notificações do tópico assinado",
               "UnSubscribe – Cancele uma assinatura cadastrada anteriormente",
               "ListSubscriptions – Liste assinaturas de propriedade de um determinado usuário (ID da AWS)",
               "<strong>O editor do tópico pode:</strong>",
               "Publish: Publique uma nova mensagem para o tópico."
           ]
          },   
          {
           "categoria":"SNS",
           "pergunta":"Quais são os diferentes formatos de entrega/transportes para receber notificações?",
           "resposta":[
               "Para que os clientes possam ter ampla flexibilidade no mecanismos de entrega, o Amazon SNS oferece suporte a notificações por meio de vários protocolos de transporte, como:",
               "<strong>“HTTP”, “HTTPS” </strong>– Os assinantes especificam um URL como parte do registro da assinatura; as notificações serão entregues por meio de um HTTP POST para o URL específico.",
               "<strong>“Email”, “Email-JSON” </strong> – Mensagens são enviadas para endereços cadastrados como e-mail. O Email-JSON envia notificações como um objeto JSON, enquanto o E-mail envia e-mails baseados em texto.",
               "<strong>“SQS” </strong> – Os usuários podem especificar uma fila SQS padrão como o endpoint. O Amazon SNS enfileirará uma mensagem de notificação para a fila especificada (que os assinantes poderão, em seguida, processar usando APIs do SQS como ReceiveMessage, DeleteMessage etc.).",
               "<strong>“SMS” </strong> – As mensagens são enviadas para os números de telefone cadastrados como mensagens de texto SMS."
           ]
          },   
          {
           "categoria":"SNS",
           "pergunta":"Quem pode criar um tópico?",
           "resposta":[
               "Os tópicos podem ser criados somente pelos usuários com IDs de AWS válidos que se inscreveram no Amazon SNS."
           ]
          },   
          {
           "categoria":"SQS",
           "pergunta":"Qual a diferença entre o Amazon SQS e o Amazon SNS?",
           "resposta":[
               "O <strong>Amazon SNS</strong> permite que aplicativos enviem mensagens críticas em termos de tempo para vários assinantes através de um mecanismo de “push”, eliminando a necessidade de verificar periodicamente ou “pesquisar” por atualizações.",
               "O <strong>Amazon SQS</strong> é um serviço de fila de mensagens usado por aplicativos distribuídos para trocar mensagens e pode ser usado para desacoplar componentes de envio e recebimento."
           ]
          },   
          {
           "categoria":"SQS",
           "pergunta":"O Amazon SQS oferece ordenação de mensagens?",
           "resposta":[
               "Sim. As filas do tipo FIFO (first-in-first-out) - do Português, primeiro a entrar, primeiro a sair - preservam a ordem exata de envio e recebimento das mensagens."
           ]
          },  
          {
           "categoria":"SQS",
           "pergunta":"Qual é o custo do Amazon SQS?",
           "resposta":[
               "Você paga apenas pelo que utilizar e não há taxa mínima."
           ]
          },   
          {
           "categoria":"SQS",
           "pergunta":"O que posso fazer com o nível gratuito do Amazon SQS?",
           "resposta":[
               "O nível gratuito do Amazon SQS disponibiliza 1 milhão de solicitações por mês sem custo."
           ]
          },   
          {
           "categoria":"SQS",
           "pergunta":"Quem pode executar operações em uma fila de mensagens?",
           "resposta":[
               "Apenas um proprietário de conta da AWS (ou uma conta da AWS para a qual o proprietário da conta delegou direitos) pode executar operações em uma fila de mensagens do Amazon SQS."
           ]
          },   
          {
           "categoria":"SQS",
           "pergunta":"Qual é a latência típica do Amazon SQS?",
           "resposta":[
               "As latências típicas para solicitações das APIs SendMessage, ReceiveMessage e DeleteMessage estão na casa das dezenas ou poucas centenas de milissegundos."
           ]
          },   
          {
           "categoria":"SQS",
           "pergunta":"Em quais regiões as filas FIFO estão disponíveis?",
           "resposta":[
               "As consultas FIFO estão disponíveis em todas as regiões da AWS em que o Amazon SQS é oferecido, exceto Ásia-Pacífico (Osaka-Local)."
           ]
          },   
          {
           "categoria":"SQS",
           "pergunta":"Posso converter a fila padrão atual em uma fila FIFO?",
           "resposta":[
               "Não. Você deve selecionar o tipo de fila ao criá-la."
           ]
          },   
          {
           "categoria":"SQS",
           "pergunta":"Qual o nível de confiabilidade do armazenamento de dados no Amazon SQS?",
           "resposta":[
               "O Amazon SQS armazena todas as filas de mensagens e mensagens em uma única região altamente disponível da AWS, com várias zonas de disponibilidade (AZs) redundantes para que nenhuma falha única de computador, rede ou AZ possa impedir o acesso às mensagens."
           ]
          },    
          {
           "categoria":"SQS",
           "pergunta":"O Amazon SQS tem certificação PCI DSS?",
           "resposta":[
               "Sim. O Amazon SQS tem certificação PCI DSS de nível 1"
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual ferramenta pode ser usada para visualizar seus custos e uso da AWS nos últimos meses e para ter obter uma previsão de como serão seus custos da AWS no futuro?",
           "resposta":[
               "AWS Cost Explorer",
               "<strong>Explicação</strong>",
               "O <strong>AWS Cost Explorer</strong> permite que você visualize os gastos passados, atuais e obtenha previsões do seu uso na AWS ao longo do tempo."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual dos seguintes serviços é um serviço de banco de dados AWS? (Escolha dois)",
           "resposta":[
               "<strong>Amazon RDS</strong> e <strong>Amazon RedShift</strong> ",
               "<strong>Explicação</strong>",
               "Se você errou essa pergunta, o exercício na aula Serviços AWS para escrever em um documento os nomes dos serviços/produtos AWS e suas definições/características, irá lhe ajudar a acertar questões similares deste tipo na sua prova de certificação."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual das opções a seguir é um dos princípios de design relacionados à confiabilidade na nuvem?",
           "resposta":[
               "Recuperar-se automaticamente de uma falha",
               "<strong>Explicação</strong>",
               "A recuperação automática em caso de falha, é um princípio de design de confiabilidade."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"No modelo de responsabilidade compartilhada da AWS, quem é responsável pela segurança e conformidade?",
           "resposta":[
               "A AWS e o cliente compartilham a responsabilidade",
               "<strong>Explicação</strong>",
               "A responsabilidade é dos dois."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual serviço da AWS você pode usar para estabelecer uma conexão de rede dedicada entre seus aplicativos locais e recursos da AWS?",
           "resposta":[
               "AWS Direct Connect",
               "<strong>Explicação</strong>",
               "O AWS Direct Connect é um serviço de nuvem que facilita estabelecer uma conexão de rede dedicada, do seu local de hospedagem, para a AWS. ", 
               "Com o AWS Direct Connect, você pode estabelecer uma conectividade privada entre a AWS e o seu datacenter, escritório e/ou ambiente de compartilhamento. ",
               "Em muitos casos, essa conectividade pode reduzir os custos de rede, aumentar a taxa de transferência da largura de banda e oferecer uma experiência de rede mais consistente que as conexões baseadas na Internet."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual das seguintes afirmações são verdadeiras? (escolha dois)",
           "resposta":[
               "Instâncias spot são uma escolha econômica se você puder ser flexível sobre quando seus aplicativos são oferecidos e se seus aplicativos podem ser interrompidos.",
               "O preço por hora para Instâncias Spot varia de acordo com a demanda",
               "<strong>Explicação</strong>",
               "As instâncias spot do Amazon EC2 permitem aproveitar a capacidade não utilizada do EC2 na Nuvem AWS. Em comparação com a definição de preço sob demanda, as instâncias spot oferecem descontos de até 90%."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"A calculadora de TCO da AWS ajuda os clientes a fazer uma comparação de TCO (custo total de propriedade) entre a infraestrutura local e a AWS. Quais das opções a seguir contribuem para o custo geral? (escolha dois)",
           "resposta":[
               "Custo de rede e Custo de mão de obra de TI",
               "<strong>Explicação</strong>",
               "A calculadora TCO permite visualizar uma estimativa de custos do ambiente on-premises, versus o ambiente da Nuvem.",
               "<strong>NOTA: </strong>Por mais que essa calculadora não esteja mais acessível, os alunos ainda estão sinalizando perguntas sobre ela, neste exame de certificação."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Se você suspeitar que sua conta da AWS está comprometida, o que deve fazer? (escolha dois)",
           "resposta":[
               "Excluir todos os usuários IAM potencialmente comprometidos e todos os recursos que você não criou e alterar a senha de todos os outros usuários IAM.",
               "Responda a todas as notificações que você erigir do AWS Support por meio do AWS Support Center.",
               "<strong>Explicação</strong>",
               "A remoção do usuário de um grupo de usuários é suficiente, mas como não existe essa opção nas alternativas, a exclusão do usuário é a escolha correta. Outro ponto a ter atenção é nas notificações recebidas pela equipe de suporte.",
               "Existem outros meios de mitigar brechas de segurança, mas apagar todos os recursos da AWS ou apagar sua conta root, NÃO são as respostas certas."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual é o plano mínimo do AWS Support que fornece um conjunto completo de verificações do AWS Trusted Advisor e acesso 24x7 por telefone, e-mail e bate-papo com engenheiros de suporte em nuvem?",
           "resposta":[
               "Business",
               "<strong>Explicação</strong>",
               "Haverá perguntas sobre <strong>qual o mínimo</strong>, com relação <strong>ao custo</strong>, na escolha de um serviço, plano ou produto. Fique atento na interpretação dos enunciados."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual dos serviços a seguir pode ser usado para automatizar implantações de software para seus serviços de computação da AWS e seus servidores locais? (escolha dois)",
           "resposta":[
               "AWS CodeDeploy e AWS OpsWorks",
               "<strong>Explicação</strong>",
               "O AWS CodeDeploy é um serviço totalmente gerenciado de implantação, que automatiza implantações de software. Já o AWS OpsWorks, é um serviço de gerenciamento de configurações que oferece instâncias gerenciadas do Chef e do Puppet.",
               "<strong>Nota: </strong> Recomendo como exercício, escrever os nomes dos serviços, os produtos e suas características em um documento ou planilha para estudar. Isso irá lhe ajudar a lembrar e acertar questões deste tipo em sua prova."
           ]
          },      
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual das opções a seguir, são considerados benefícios financeiros de mudar para a Nuvem AWS? (escolha dois)",
           "resposta":[
               "TCO reduzido (custo total de propriedade) e OPEX reduzido (despesas operacionais)",
               "<strong>Explicação</strong>",
               "Um dos grandes problemas de CAPEX no ambiente on-premisses, é a falta de elasticidade, fazendo com que você sempre tenha capacidade demais ou insuficiente para atender as demandas do negócio. Pense num varejo, que na época de Natal ou BlackFriday, pode precisar de até 5x a sua capacidade para operar normalmente devido à alta demanda.", 
               "Talvez não faça sentido adquirir toda a capacidade necessária no pico de uso (com CAPEX), deixando o hardware ocioso durante o resto do ano. ",
               "Pior ainda, seria dimensionar mal o pico da demanda, e não suportar os alto níveis de acessos, perdendo clientes e vendas no momento de maior oportunidade de faturamento da companhia. ",
               "Usar a capacidade elástica na Nuvem resolve muito bem esse problema, porque ao deixar de adquirir hardwares no seu ambiente on-premisses, você reduz o seu Custo por Propriedade (TCO) e permite que você transforme o que seria custo fixo em variável."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual serviço da AWS você pode usar para instalar um banco de dados de terceiros?",
           "resposta":[
               "Amazon EC2",
               "<strong>Explicação</strong>",
               "O Amazon RDS não permite você instalar um banco de dados de terceiros, você precisa escolher uma das engines disponíveis. O Amazon DynamoDB também não permite mudar o tipo do banco de dados. E o Amazon EMR usa um Hadoop Framework."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Você pode projetar seu sistema na nuvem AWS para ser capaz de resistir à falha de um indivíduo ou de vários componentes. Este é um exemplo de qual característica da AWS?",
           "resposta":[
               "Alta disponibilidade",
               "<strong>Explicação</strong>",
               "Alta disponibilidade é a característica de um ambiente resiliente a falhas."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Quais das opções a seguir são princípios de design importantes para a arquitetura em nuvem da AWS? (escolha dois)",
           "resposta":[
               "Implementar acoplamento solto.",
               "Remova pontos no seu ambiente que podem causar falhas",
               "<strong>Explicação</strong>",
               "Este princípio faz parte do AWS Well-Architected. Nele você encontrará orientações para ajudar os arquitetos de Nuvem a criar infraestruturas seguras, resilientes, eficientes e de alta performance para aplicações e cargas de trabalho."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual serviço fornece visibilidade da atividade do usuário, registrando as ações realizadas em sua conta?",
           "resposta":[
               "Amazon CloudTrail",
               "<strong>Explicação</strong>",
               "O AWS CloudTrail é um serviço que possibilita governança, conformidade, auditoria operacional e auditoria de riscos em sua conta da AWS. Com ele você poderá verificar o histórico de eventos da atividade da conta da AWS, inclusive ações executadas por meio do Console de Gerenciamento da AWS, dos AWS SDKs, das ferramentas da linha de comando e de outros Serviços da AWS."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual dos cenários a seguir é um exemplo de escalabilidade vertical? (escolha dois)",
           "resposta":[
               "Aumentando a capacidade de uma instância EC2.",
               "Diminuindo a capacidade de uma instância EC2",
               "<strong>Explicação</strong>",
               "Enquanto na escalabilidade vertical você aumenta ou diminui os recursos da instância (CPU, memória e disco rígido), na escalabilidade horizontal você aumenta ou diminui o número (quantidade) de instâncias."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual serviço da AWS você deve usar para ter uma visão geral da utilização de suas instâncias reservadas e cálculos sobre instâncias reservadas recomendadas?",
           "resposta":[
               "AWS Cost Explorer",
               "<strong>Explicação</strong>",
               "Para visualizar a utilização da instância, os cálculos, previsões de uso e recomendações, utiliza-se o AWS Cost Explorer."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual das opções a seguir é uma maneira da AWS de ajudar as empresas a reduzir seus custos de TI ao hospedar seus recursos na nuvem da AWS?",
           "resposta":[
               "A AWS reduz continuamente os preços da computação em nuvem.",
               "<strong>Explicação</strong>",
               "A AWS de tempos em tempos reduz os preços dos seus serviços."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual das opções a seguir é usada para gerenciar o faturamento e o pagamento de várias contas da AWS em uma conta mestre?",
           "resposta":[
               "Faturamento consolidado",
               "<strong>Explicação</strong>",
               "O faturamento consolidado é uma característica para gerenciar o pagamento de múltiplas contas AWS."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Quais das seguintes afirmações relacionadas a Instâncias Spot são verdadeiras? (escolha dois)",
           "resposta":[
               "Se a instância spot for interrompida pela Amazon, durante sua primeira hora, você não será tarifado por esse uso.",
               "Se você estiver utilizando uma instância com o SO Windows e você encerrar a instância, você será tarifado pelas horas completas utilizadas e uma hora inteira pela hora interrompida.",
               "<strong>Explicação</strong>",
               "As instâncias spot possuem muitas vantagens, quando comparadas com as instâncias sob demanda, mas é importante que você saiba suas características antes de adquirir esse produto. Por exemplo, elas podem chegar a 90% de desconto se comparadas com uma instância sob-demanda (MEMORIZE isso); Outras características são: - Se a Amazon interromper a sua instância spot, você NÃO será tarifado; - Se você parar ou encerrar a sua instância spot Linux, você será cobrado pelos segundos utilizados - Se você parar ou encerrar a sua instância spot Windows, será cobrado pelas horas inteiras usadas e por uma hora completa da hora parcial interrompida.",
               "<a href='https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/spot-interruptions.html#billing-for-interrupted-spot-instances'>+INFO: </a>"
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Qual serviço de segurança da AWS avalia os aplicativos para melhorar sua segurança e conformidade?",
           "resposta":[
               "AWS Inspector",
               "<strong>Explicação</strong>",
               "O Amazon Inspector é um serviço de avaliação de segurança automático que ajuda a melhorar a segurança e a conformidade dos aplicativos implantados na AWS.",
               "O Amazon Inspector avalia automaticamente aplicativos em busca de exposições, vulnerabilidades ou discrepâncias em relação às melhores práticas."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"No modelo de responsabilidade compartilhada, quais são os exemplos de controles compartilhados? (Escolha dois)",
           "resposta":[
               "Gerencimento de patches",
               "Gerenciamento de configurações",
               "<strong>Explicação</strong>",
               "Do mesmo modo que os clientes são responsáveis em aplicar o patch de correções em seus aplicativos e gerenciar a configuração do seu ambiente, a AWS também é responsável de fazer o mesmo na sua camada de responsabilidade."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"De acordo com os pilares do AWS Well Architected Framework, qual das opções a seguir é um princípio de design para Excelência Operacional?",
           "resposta":[
               "Aprenda com todas as falhas operacionais",
               "<strong>Explicação</strong>",
               "Aprender com as falhas, faz parte do pilar de Operação, do AWS Well-Architected."
           ]
          },    
          {
           "categoria":"Simulado - Parte 1",
           "pergunta":"Um aplicativo armazena imagens que serão recuperadas com pouca frequência, mas devem estar disponíveis para recuperação imediatamente. Qual é a opção de armazenamento mais econômica que atende a esses requisitos?",
           "resposta":[
               "Acesso infrequente padrão Amazon S3",
               "<strong>Explicação</strong>",
               "O S3 Standard-IA é indicado para dados acessados com menos frequência, mas que exigem acesso rápido quando necessários."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual característica da AWS permite que uma empresa internacional forneça aplicativos de baixa latência para seus clientes em todo o mundo?",
           "resposta":[
               "Alcance global",
               "<strong>Explicação</strong>",
               "Se você está procurando por baixa latência, os serviços têm de estarem próximos dos clientes. Assim, a característica Alcance Global é a resposta correta"
           ]
          },   
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual dos serviços a seguir fornece acesso sob demanda aos relatórios de segurança e conformidade da AWS?",
           "resposta":[
               "AWS Artfact",
               "<strong>Explicação</strong>",
               "O AWS Artifact oferece acesso sob demanda, acesso aos relatórios de segurança e conformidade da AWS e a acordos online específicos como HIPPA e SOCs."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual característica da AWS descreve a capacidade de adquirir recursos conforme você precisa deles e liberar recursos quando não precisar mais deles?",
           "resposta":[
               "Elasticidade",
               "<strong>Explicação</strong>",
               "Assim como um elástico de borracha, que você pode expandir para segurar mais objetos e retrair quando tem poucos objetos, a característica de elasticidade na Nuvem permite você adquirir mais recursos ou liberar estes, quando o seu uso não é mais necessário."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual das seguintes afirmações são verdadeiras? (Escolha dois)",
           "resposta":[
               "O serviço Amazon CloudFront permite o armazenamento em cache de conteúdo em Locais de Borda para distribuição rápida aos clientes.",
               "Existem mais Locais de Borda do que Zonas de Disponibilidade e Mais Zonas de Disponibilidade do que Regiões.",
               "<strong>Explicação</strong>",
               "O Amazon CloudFront utiliza Locais de Borda como cache. Além disto, existem mais Locais de Borda do que Zonas de Disponibilidade, e mais Zonas de Disponibilidade do que Regiões.",
               {
                   "text":"<a href=' https://aws.amazon.com/pt/about-aws/global-infrastructure/?p=ngi&loc=1'><strong>Fonte</strong></a>", 
                   "image":"regioes-zonas.png"
               }
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual das opções a seguir é um serviço da AWS que atua como Domain Name System (DNS)?",
           "resposta":[
               "Amazon Route 53",
               "<strong>Explicação</strong>",
               "Resolver DNS, é uma função do Amazon Route 53."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Quais das seguintes afirmações são verdadeiras (escolha duas)",
           "resposta":[
               "O Plano de Suporte da AWS Enterprise inclui gerenciamento de eventos de infraestrutura sem taxa adicional.",
               "O Plano de Suporte Business da AWS inclui gerenciamento de eventos de infraestrutura mediante uma taxa adicional.",
               "<strong>Explicação</strong>",
               "Entender as diferentes características de cada plano de suporte da AWS, é fundamental para acertar perguntas deste tipo."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"No modelo de responsabilidade compartilhada da AWS, qual das opções a seguir é responsabilidade da AWS?",
           "resposta":[
               "Segurança fisica da infraestrutura",
               "<strong>Explicação</strong>",
               "Das alternativas disponíveis, é responsabilidade da AWS a segurança física (controle de acesso) em seus data centers.",
               "<a href='https://aws.amazon.com/pt/compliance/shared-responsibility-model/'>Veja mais aqui</a>"
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual das opções a seguir ajuda a proteger o acesso a uma conta da AWS?",
           "resposta":[
               "Utilizar a autenticação de duas etapas (MFA).",
               "<strong>Explicação</strong>",
               "A AWS dá muita atenção na segurança no acesso dos seus serviços, e o uso da autenticação de duas etapas (MFA), é uma camada de segurança extra no seu ambiente."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual serviço da AWS fornece gerenciamento centralizado e faturamento consolidado para todas as suas contas da AWS?",
           "resposta":[
               "AWS Organizations",
               "<strong>Explicação</strong>",
               "O AWS Organizations ajuda a gerenciar e a centralizar o seu faturamento em uma única conta. Além disto, o AWS Organizations facilita o controle de acesso, o gerenciamento de conformidade, melhora a segurança do ambiente e auxilia no compartilhando de recursos entre outras contas AWS."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Você precisa implementar uma fila de mensagens gerenciado em trânsito, entre os servidores de aplicativos. Qual serviço você deve usar?",
           "resposta":[
               "Amazon SQS",
               "<strong>Explicação</strong>",
               "O Amazon Simple Queue Service (SQS) é um serviço de filas de mensagens gerenciado que permite o desacoplamento e a escalabilidade de microsserviços, sistemas distribuídos e aplicativos sem servidor."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Quais dos serviços a seguir possuem recurso de mitigação de ataques DDoS de negação de serviços distribuída?",
           "resposta":[
               "AWS Shield",
               "<strong>Explicação</strong>",
               "O AWS Shield oferece de detecção e mitigações em linha automáticas e sempre ativas, que minimizam o tempo de inatividade e a latência dos aplicativos, fornecendo proteção contra DDoS, sem necessidade de envolver o AWS Support. O AWS Shield tem dois níveis, Standard e Advanced."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Quais são as vantagens da computação em nuvem? (escolha duas)",
           "resposta":[
               "Mudar de despesas CAPEX, para despesas variáveis.",
               "Beneficiar-se da economia em escala.",
               "<strong>Explicação</strong>",
               "O CAPEX (ou capital expenditure), refere-se às despesas ou investimentos em bens de capital (ativos). Por exemplo, quando uma empresa compra um servidor físico para instalar no data center próprio, isso é tratado como CAPEX.",
               "Já OPEX (ou operational expenditure), refere-se às despesas operacionais.",
               "Por exemplo, quando uma empresa utiliza Cloud Computing, pagando por hora de utilização de um serviço em nuvem, isso é tratado como OPEX.",
               "No caso de CAPEX, as despesas são utilizadas para comprar bens físicos, como um hardware. E no caso de OPEX, paga-se pelo uso do serviço e não pela propriedade do bem.",
               "A Computação em Nuvem é vantajosa em relação ao ambiente on-premises, porque nela, você paga apenas pelo que utilizar, beneficiando-se da economia em escala, transformando custos fixos em custos variáveis e substituindo CAPEX por OPEX."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual calculadora da AWS pode ser usada pelo usuário para estimar a economia de custos ao utilizar a nuvem da AWS, em relação ao ambiente local / tradicional?",
           "resposta":[
               "Calculadora de TCO",
               "<strong>Explicação</strong>",
               "A calculadora TCO permite visualizar uma estimativa de custos do ambiente on-premises, versus o ambiente da Nuvem.",
               "<strong>NOTA:</strong> Por mais que essa calculadora não esteja mais acessível, os alunos ainda estão sinalizando perguntas sobre ela, neste exame de certificação."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Quais das seguintes opções estão incluídas no plano de suporte Enterprise da AWS? (escolha dois)",
           "resposta":[
               "Um Gerente Técnico de Conta  (TAM) designado.",
               "Revisões Well-Architected e análises de operações.",
               "<strong>Explicação</strong>",
               "Entender as diferentes características do plano de suporte da AWS, é fundamental para acertar perguntas deste tipo no seu exame."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual das opções a seguir é o modelo de precificação do Amazon EC2 que oferece o maior desconto?",
           "resposta":[
               "Reservar e pagar tudo antecipadamente, por um período de 3 anos.",
               "<strong>Explicação</strong>",
               "Você obtém o melhor desconto se reservar as instâncias por um período de 3 anos e escolher pagar por tudo adiantado."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual dos seguintes serviços da AWS pode ser usado para armazenar e arquivar dados por 5 anos com o menor custo?",
           "resposta":[
               "Amazon S3 Glacier",
               "<strong>Explicação</strong>",
               "O Amazon S3 Glacier e o S3 Glacier Deep Archive são classes de armazenamento seguro, resiliente e de custo extremamente baixo para arquivamento de dados e backups de longa duração. Para se ter uma ideia de custo, os clientes podem armazenar dados por apenas 1 USD por terabyte por mês, o que representa uma economia significativa, em comparação a soluções locais."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual serviço permite que você expanda e diminua automaticamente seu aplicativo em resposta à demanda?",
           "resposta":[
               "Amazon EC2 Auto Scaling",
               "<strong>Explicação</strong>",
               "O Auto Scaling do Amazon EC2 ajuda a manter a disponibilidade das aplicações e permite adicionar ou remover automaticamente instâncias do EC2 de acordo com as condições definidas."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Em comparação com data centers tradicionais, a nuvem AWS tem:",
           "resposta":[
               "Custos variáveis mais baixos e custo iniciais mais baixos.",
               "<strong>Explicação</strong>",
               "AWS oferece baixo custo variável, já que possui o modelo <strong>pay-as-you-go</strong> (pague o que usar), permitindo utilizar os serviços da Nuvem sem precisar pagar adiantado ou assinar algum termo de compromisso de uso."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Onde você pode encontrar a listagens de software de fornecedores independentes, que tornam mais fácil encontrar, testar, comprar e implantar software executado na AWS?",
           "resposta":[
               "AWS Marketplace",
               "<strong>Explicação</strong>",
               "O AWS Marketplace é um local dentro da Nuvem AWS que permite com que você adquira instâncias com softwares do mercado pré-configurados para uso."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Qual serviço da AWS permite codificar sua infraestrutura e tratá-la apenas como código?",
           "resposta":[
               "AWS CloudFormation",
               "<strong>Explicação</strong>",
               "O AWS CloudFormation permite usar linguagens de programação ou um arquivo de texto simples para modelar e provisionar de forma automática e segura todos os recursos necessários para os aplicativos em todas as regiões e contas."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Como você pode ativar a autenticação multifator (MFA) para uma conta da AWS por meio de uma interface baseada no navegador?",
           "resposta":[
               "Usando o serviço IAM por meio do Console de Gerenciamento AWS",
               "<strong>Explicação</strong>",
               "Para habilitar a MFA, utilize o IAM através do Console de Gerenciamento AWS"
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"No modelo de responsabilidade compartilhada da AWS, qual das opções a seguir é responsabilidade do cliente?",
           "resposta":[
               "Políticas AWS IAM",
               "<strong>Explicação</strong>",
               "As políticas do IAM (senhas, usuários) é responsabilidade do cliente definir."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Conter outros grupos",
           "resposta":[
               "O que um grupo do IAM NÃO pode fazer?",
               "<strong>Explicação</strong>",
               "Haverá perguntas negativas em seu exame. Fique atento ao <strong>NÃO</strong> que poderá estar em maiúsculo ou minúsculo no enunciado."
           ]
          },    
          {
           "categoria":"Simulado - Parte 2",
           "pergunta":"Quais das seguintes opções são vantagens de mudar para a nuvem AWS (escolha duas)",
           "resposta":[
               "Tempo de disponibilidade no mercado reduzido.",
               "Não há necessidade de advinhar os requisitos de capacidade.",
               "<strong>Explicação</strong>",
               "Não precisar ficar adivinhando a capacidade das cargas de trabalho e o tempo reduzido na disponibilização no mercado, são as vantagens de ir para a Nuvem."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Qual é a credencial de acesso que os desenvolvedores podem utilizar para obter acesso programático em uma API da AWS, AWS CLI, SDK, e outras ferramentas de desenvolvimento?",
           "resposta":[
               "Chaves de Acesso (Access Keys)",
               "<strong>Explicação</strong>",
               "As <strong>chaves de acesso (access keys)</strong> são credenciais de longo prazo para um usuário do IAM ou um Usuário raiz da Conta AWS. Você pode usar chaves de acesso para assinar solicitações programáticas na AWS CLI ou na API da AWS (diretamente ou usando o SDK da AWS).",
               "As <strong>chaves de acesso</strong> consistem em duas partes: um <strong>ID de chave de acesso</strong> (por exemplo, AKIAIOSFODNN7EXAMPLE) e uma <strong>chave de acesso secreta</strong> (por exemplo, wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY).",
               "Como um nome de usuário e uma senha, você deve usar o ID da chave de acesso e a chave de acesso secreta em conjunto para autenticar suas solicitações. Gerencie suas chaves de acesso de forma tão segura quanto você gerencia seu nome de usuário e sua senha.",
               "<a target='__blank' href='https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_credentials_access-keys.html'>Fonte</a>"
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Qual serviço da AWS pode ser usado para monitorar, reter as ações e atividade da conta, como chamadas API, na sua infraestrutura da AWS?",
           "resposta":[
               "AWS CloudTrail",
               "<strong>Explicação</strong>",
               "O AWS CloudTrail é um serviço que possibilita governança, conformidade, auditoria operacional e auditoria de riscos em sua conta da AWS. Com o CloudTrail, é possível registrar, monitorar continuamente e reter a atividade da conta relacionada às ações executadas na infraestrutura da AWS."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Qual serviço da AWS pode ser usado para hospedar um site estático?",
           "resposta":[
               "Amazon S3",
               "<strong>Explicação</strong>",
               "O Amazon S3 permite fazer o host de sites estáticos."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Qual dos seguintes serviços oferece escalonamento automático para tornar seus aplicativos tolerantes a falhas?",
           "resposta":[
               "Grupo de Auto Scaling",
               "<strong>Explicação</strong>",
               "Com o Auto Scaling você pode definir como o seu ambiente irá responder a falhas."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Qual das seguintes opções descreve a arquitetura de nuvem híbrida na AWS?",
           "resposta":[
               "Alguns recursos disponiveis na AWS e outros disponíveis na infraestrutura local.",
               "<strong>Explicação</strong>",
               "Em um ambiente híbrido haverá uma parte dos recursos no ambiente local (on-premises) e uma outra parte dos recursos sendo executados na Nuvem."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Qual dos serviços a seguir permite que você avalie, audite e avalie as configurações de seus recursos da AWS?",
           "resposta":[
               "AWS Config",
               "<strong>Explicação</strong>",
               "O AWS Config é um serviço que permite acessar, auditar e avaliar as configurações dos recursos da AWS. O Config monitora e grava continuamente registros das configurações de recursos da AWS e lhe permite automatizar a avaliação das configurações registradas com base nas configurações desejadas."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Você deseja ser notificado quando o custo de uso da AWS exceder (ou houver previsão de que excederá) um valor específico em dólares. Qual dos seguintes serviços da AWS oferece esse recurso?",
           "resposta":[
               "Orçamentos da AWS",
               "<strong>Explicação</strong>",
               "O Orçamentos AWS permite que você defina orçamentos personalizados que enviam alertas quando o uso ou os custos excedem o valor orçado."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Uma empresa deseja migrar para a AWS, um aplicativo que atuará como ininterrupto por um período de 3 anos. Qual das opções a seguir é o modelo de precificação EC2 que oferece a solução mais econômica?",
           "resposta":[
               "Instâncias reservadas",
               "<strong>Explicação</strong>",
               "Se no enunciado definiu um período (1 ou 3 anos), procure por instâncias reservadas nas alternativas."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Qual das opções a seguir é uma prática recomendada de arquitetura?",
           "resposta":[
               "Distribuir em várias zonas de disponibilidade",
               "<strong>Explicação</strong>",
               "Se você distribuir os seus recursos em múltiplas zonas de disponibilidade e uma das suas instâncias falhar, você poderá fazer com que a sua aplicação utilize a instância que está na outra zona de disponibilidade e não ter downtime (tempo de inatividade)."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Quais das seguintes são medidas de segurança recomendadas ao criar acesso a uma conta da AWS? (escolha dois)",
           "resposta":[
               "Conceda acesso com o menor privilégio necessário.",
               "Habilitar MFA",
               "<strong>Explicação</strong>",
               "Definir o mínimo privilégio para o usuário e habilitar o MFA na conta, refletirá na segurança do seu ambiente na Nuvem."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Qual plano de suporte da AWS oferece um tempo de resposta de menos de 1 hora para paralisações do sistema de produção e menos de 15 minutos para paralisações críticas do sistema de negócios?",
           "resposta":[
               "Enterprise",
               "<strong>Explicação</strong>",
               "O único plano de suporte que oferece uma resposta em menos de 15 minutos para ambientes críticos, é o plano Enterprise."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Qual das opções a seguir é um serviço de transferência de dados da AWS usado para migrar e transportar conjuntos de dados em escala de exabyte para dentro e fora da AWS?",
           "resposta":[
               "AWS Snowmobile",
               "<strong>Explicação</strong>",
               "Para transportar exabyte, deve-se solicitar o AWS Snowmobile (caminhão)."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Uma empresa tem um aplicativo que deve estar disponível globalmente o tempo todo. Qual dos seguintes mecanismos de implantação ele deve usar?",
           "resposta":[
               "Implantação em várias regiões.",
               "<strong>Explicação</strong>",
               "A implementação em múltiplas regiões, permitirá com que a aplicação fique disponível globalmente, mesmo que uma região fique fora por um período de tempo."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Uma empresa está procurando ajuda para construir uma infraestrutura de aplicativo segura e de alto desempenho usando as práticas recomendadas de arquitetura da AWS mais recentes. Qual das opções a seguir pode fornecer orientação gratuitamente?",
           "resposta":[
               "Use uma ferramenta AWS Well-Architected",
               "<strong>Explicação</strong>",
               "O AWS Well-Architected ajuda arquitetos de nuvem a criar infraestruturas seguras, resilientes, eficientes e de alta performance para aplicações e cargas de trabalho.",
               "Baseado em cinco pilares (excelência operacional, segurança, confiabilidade, eficiência de performance e otimização de custos), ele fornece uma abordagem consistente para que clientes e parceiros avaliem arquiteturas e implementem designs que podem se expandir com o tempo."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"No modelo de responsabilidade compartilhada da AWS, qual das opções a seguir NÃO é um controle compartilhado?",
           "resposta":[
               "Proteção física e segurança da infraestrutura",
               "<strong>Explicação</strong>",
               "A proteção física da infraestrutura AWS, é uma responsabilidade exclusiva da AWS."
           ]
          },       
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Qual código HTTP indica o upload bem-sucedido de um objeto para o Amazon S3?",
           "resposta":[
               "<strong>200</strong>",
               "<strong>Explicação</strong>",
               "Perguntas técnicas são pouco prováveis de aparecerem nesta prova, porém, ",
               "<strong>Lembre-se:</strong> se enviar um objeto para um bucket S3, e precisar confirmar se o envio ocorreu com sucesso, a resposta no cabeçalho é 200."
           ]
          },    
          {
           "categoria":"Simulado  - Parte 3",
           "pergunta":"Qual das opções a seguir indica como funciona o preço do AWS Lambda?",
           "resposta":[
               "Os clientes são cobrados com base no número de solicitações de funções Lambda e na duração da execução do código.",
               "<strong>Explicação</strong>",
               "Com o AWS Lambda você é cobrado pelo número de solicitações de suas funções e pela duração, o tempo que leva para que seu código seja executado."
           ]
          },    
          {
           "categoria":"S3",
           "pergunta":"O que é o Amazon S3?",
           "resposta":[
               "O Amazon S3 é um armazenamento de objetos criado para armazenar e recuperar qualquer quantidade de dados de qualquer local na Internet. Ele é um serviço de armazenamento simples que oferece uma infraestrutura de armazenamento de dados com escalabilidade infinita a um custo bastante reduzido."        
           ]
          },    
          {
           "categoria":"S3",
           "pergunta":"O que posso fazer com o Amazon S3?",
           "resposta":[
               "O Amazon S3 disponibiliza uma interface de serviço da Web simples que pode ser usada para armazenar e recuperar qualquer quantidade de dados, a qualquer momento, de qualquer lugar na Web. Como o Amazon S3 é altamente escalável e você <strong>só paga pelo que usa</strong>, é possível começar com um porte reduzido e expandir o aplicativo da forma desejada, sem comprometer o desempenho ou a confiabilidade."        
           ]
          },    
          {
           "categoria":"S3",
           "pergunta":"Quais tipos de dados eu posso armazenar no Amazon S3?",
           "resposta":[
               "Você pode armazenar praticamente qualquer tipo de dados em qualquer formato."        
           ]
          },    
          {
           "categoria":"S3",
           "pergunta":"Qual quantidade de dados é possível armazenar no Amazon S3?",
           "resposta":[
               "O volume total de dados e o número de objetos que você pode armazenar são ilimitados. Objetos individuais do Amazon S3 podem variar em tamanho, desde um mínimo de 0 byte até um máximo de 5 terabytes."        
           ]
          },    
          {
           "categoria":"S3",
           "pergunta":"Quais categorias de armazenamento o Amazon S3 oferece?",
           "resposta":[
               "O Amazon S3 oferece uma ampla variedade de classes de armazenamento para diferentes casos de uso. Elas incluem:",
               "<strong>S3 Standard</strong>, para armazenamento geral de dados acessados com frequência;",
               "<strong>S3 Intelligent-Tiering</strong>, para dados com padrões de acesso desconhecido ou dinâmico;",
               "<strong>S3 Standard-Infrequent Access</strong> (S3 Standard – IA) e <strong>S3 One Zone-Infrequent Access</strong> (S3 One Zone – IA) para dados de longa vida, mas acessados com menos frequência, e;",
               "<strong>Amazon S3 Glacier </strong>(S3 Glacier) e Amazon S3 Glacier Deep Archive (S3 Glacier Deep Archive) para preservação digital e arquivamento de dados de longo prazo."
           ]
          },    
          {
           "categoria":"S3",
           "pergunta":"O que a Amazon faz com meus dados no Amazon S3?",
           "resposta":[
               "A Amazon armazenará os dados e controlará o uso associado para efeitos de cobrança. A Amazon não acessará seus dados para nenhuma outra finalidade que não seja a da oferta do Amazon S3, exceto quando exigido por lei."        
           ]
          },    
          {
           "categoria":"S3",
           "pergunta":"Qual interface devo usar com o Amazon S3?",
           "resposta":[
               "O Amazon S3 disponibiliza uma interface REST de web services simples baseada em padrões, criada para trabalhar com qualquer toolkit de desenvolvimento da Internet. As operações são intencionalmente simples para facilitar a adição de novos protocolos de distribuição e camadas funcionais."        
           ]
          },    
          {
           "categoria":"S3",
           "pergunta":"Qual a confiabilidade do Amazon S3?",
           "resposta":[
               "O Amazon S3 concede a todos os desenvolvedores o acesso para a mesma infraestrutura de armazenamento de dados altamente escalável, disponível, rápida e econômica usada pela Amazon para operar a sua própria rede global de sites.",
               "As classes de armazenamento S3 Standard, S3 Standard – IA e S3 One Zone – IA foram projetadas para oferecer respectivamente 99,99%, 99,9% e 99,5% de disponibilidade, enquanto as classes S3 Glacier e S3 Glacier Deep Archive foram projetadas para oferecer 99,99% de disponibilidade e SLA de 99,9%."
           ]
          },    
          {
           "categoria":"S3",
           "pergunta":"Qual é o custo do Amazon S3?",
           "resposta":[
               "Com o Amazon S3, pague somente pelo que for usado. Não há taxa mínima. Você pode estimar sua conta mensal utilizando a <a target='__blank' href='https://calculator.s3.amazonaws.com/index.html'>Calculadora Mensal da AWS.</a>"        
           ]
          },    
          {
           "categoria":"S3",
           "pergunta":"Qual é a segurança dos dados no Amazon S3?",
           "resposta":[
               "O Amazon S3 é seguro por padrão. Somente os proprietários dos recursos do Amazon S3 têm acesso a esses recursos após sua criação. O Amazon S3 oferece suporte à autenticação de usuário para controlar o acesso aos dados.",
               "Você pode usar mecanismos de controle de acesso, como políticas de bucket e Access Control Lists (ACLs) para conceder seletivamente permissões para usuários e grupos de usuários.",
               "O console do Amazon S3 destaca os buckets com acesso público, indica a origem da capacidade de acesso público e avisa se alterações em políticas e ACLs do bucket disponibilizarão esse bucket para acesso público. Você deve habilitar a opção Bloquear acesso público para todas as contas e buckets que não deseja tornar publicamente acessíveis.",
               "<strong>Quer se aprofundar? Acesse:</strong>",
               "<a target='__blank' href='https://aws.amazon.com/pt/s3/faqs/'>https://aws.amazon.com/pt/s3/faqs/</a>"
           ]
          },    
          {
           "categoria":"EBS",
           "pergunta":"O que acontece com os meus dados quando uma instância do Amazon EC2 termina?",
           "resposta":[
               "Ao contrário dos dados salvos em uma <strong>instance store</strong> (que persiste apenas enquanto essa instância está ativa), os dados armazenados em um volume do Amazon EBS podem persistir independentemente da duração da instância."        
           ]
          },    
          {
           "categoria":"EBS",
           "pergunta":"Posso juntar vários volumes para obter uma performance melhor?",
           "resposta":[
               "<strong>Sim.</strong> É possível juntar vários volumes para atingir até 80.000 IOPS ou 2.375 MiB/s quando eles estiverem anexados a instâncias EC2 maiores."        
           ]
          },    
          {
           "categoria":"EBS",
           "pergunta":"Os volumes precisam ser desvinculados para a criação de um snapshot?",
           "resposta":[
               "Não, os snapshots podem ser feitas em tempo real enquanto o volume está anexado e em uso."        
           ]
          },    
          {
           "categoria":"EBS",
           "pergunta":"O que é a criptografia do Amazon EBS?",
           "resposta":[
               "A criptografia do Amazon EBS oferece criptografia contínua de volumes de dados, volumes de inicialização e snapshots do EBS, eliminando a necessidade de criar e manter uma infraestrutura segura de gerenciamento de chaves."        
           ]
          },    
          {
           "categoria":"EBS",
           "pergunta":"Por que devo usar a criptografia do EBS?",
           "resposta":[
               "Você pode usar a criptografia do Amazon EBS para satisfazer requisitos de conformidade de segurança e criptografia de dados em repouso na nuvem."        
           ]
          },    
          {
           "categoria":"EBS",
           "pergunta":"Como são gerenciadas as chaves de criptografia do Amazon EBS?",
           "resposta":[
               "A criptografia do Amazon EBS cuida do gerenciamento de chaves para você. Cada volume criado obtêm uma chave AES exclusiva de 256 bits."        
           ]
          },    
          {
           "categoria":"EBS",
           "pergunta":"A criptografia do EBS suporta volumes de inicialização?",
           "resposta":[
               "<strong>Sim</strong>"        
           ]
          },    
          {
           "categoria":"EBS",
           "pergunta":"Serei cobrado pelas IOPS provisionadas em um volume de IOPS provisionadas quando ele for desconectado de uma instância?",
           "resposta":[
               "Sim, você será cobrado pelas IOPS provisionadas quando ele for desconectado de uma instância. Quando um volume é desacoplado, recomendamos que considere criar um snapshot e excluir o volume para reduzir os custos."        
           ]
          },    
          {
           "categoria":"EBS",
           "pergunta":"É possível conectar o mesmo volume em múltiplas instâncias?",
           "resposta":[
               "Sim, para isso verifique se o tipo do volume selecionado, permite habilitar a opção <strong>Multi-Attach</strong>"
           ]
          },    
          {
           "categoria":"EBS",
           "pergunta":"Existe uma taxa adicional para ativar o Multi-Attach?",
           "resposta":[
               "Não.",
               "<strong>Quer se aprofundar? Acesse:</strong>",
               "<a target='__blank' href='https://aws.amazon.com/pt/ebs/faqs/'>https://aws.amazon.com/pt/ebs/faqs/</a>"
           ]
          },    
          {
           "categoria":"S3 Glacier",
           "pergunta":"Por que o Amazon Glacier agora é chamado de Amazon S3 Glacier?",
           "resposta":[
               "Há muito tempo os clientes consideram o Amazon Glacier, nosso serviço de armazenamento para backup e arquivamento, como uma classe de armazenamento do Amazon S3.",
               "Na verdade, uma porcentagem muito alta dos dados armazenados no Amazon Glacier hoje vem diretamente de clientes que usam políticas de ciclo de vida do S3 para mover os dados menos acessados para o Amazon Glacier.",
               "Agora, o Amazon Glacier faz parte do S3 oficialmente e será conhecido como Amazon S3 Glacier (S3 Glacier)."
           ]
          },    
          {
           "categoria":"S3 Glacier",
           "pergunta":"Como devo escolher entre o Amazon S3 Glacier e o Amazon Simple Storage Service (Amazon S3)?",
           "resposta":[
               "O Amazon S3 é um serviço de armazenamento durável, seguro, simples e rápido, projetado para facilitar a computação de escala da Web para desenvolvedores.",
               "Use o Amazon S3 se precisar de baixa latência ou acesso frequente aos dados. Use o Amazon S3 Glacier caso o armazenamento de baixo custo seja primordial e não seja necessário acessar os dados em milissegundos."    
           ]
          },    
          {
           "categoria":"S3 Glacier",
           "pergunta":"O que a Amazon faz com meus dados no Amazon S3 Glacier?",
           "resposta":[
               "A Amazon armazenará os dados e controlará o uso associado para efeitos de cobrança. A Amazon não acessará seus dados para nenhuma outra finalidade, fora da oferta do Amazon S3 Glacier, exceto quando exigido por lei."        
           ]
          },    
          {
           "categoria":"S3 Glacier",
           "pergunta":"Qual a resiliência do Amazon S3 Glacier?",
           "resposta":[
               "O Amazon S3 Glacier foi projetado para fornecer durabilidade anual média de 99,999999999% para um arquivo."        
           ]
          },    
          {
           "categoria":"S3 Glacier",
           "pergunta":"Qual a confiabilidade do Amazon S3 Glacier?",
           "resposta":[
               "O Amazon S3 Glacier foi projetado para proporcionar disponibilidade de 99,99%."        
           ]
          },    
          {
           "categoria":"S3 Glacier",
           "pergunta":"O que é o S3 Glacier Deep Archive?",
           "resposta":[
               "O S3 Glacier Deep Archive é uma nova <a target='__blank' href='https://aws.amazon.com/pt/s3/storage-classes/'><strong>classe de armazenamento do Amazon S3</strong><a> que oferece armazenamento de objetos seguro e resiliente para retenção de dados de longo prazo, acessados uma ou duas vezes por ano."
           ]
          },    
          {
           "categoria":"S3 Glacier",
           "pergunta":"Qual é a quantidade mínima de dados que posso armazenar usando o Amazon S3 Glacier?",
           "resposta":[
               "Não há limite mínimo para a quantidade de dados que pode ser armazenada no Amazon S3 Glacier. O tamanho de cada arquivamento pode variar entre 1 byte e 40 terabytes."        
           ]
          },    
          {
           "categoria":"S3 Glacier",
           "pergunta":"Qual o volume de dados que posso recuperar gratuitamente?",
           "resposta":[
               "O Amazon S3 Glacier oferece um nível gratuito de recuperação de 10 GB. É possível recuperar todo mês 10 GB dos seus dados do Amazon S3 Glacier gratuitamente."        
           ]
          },    
          {
           "categoria":"S3 Glacier",
           "pergunta":"Como será cobrada a exclusão de dados com menos de 3 meses?",
           "resposta":[
               "O Amazon S3 Glacier foi projetado para casos de uso em que os dados são retidos por meses, anos ou décadas.",
               "A exclusão de dados do Amazon S3 Glacier é gratuita se o arquivo excluído estiver armazenado a pelo menos três meses.",
               "Se o arquivo for excluído antes dos três meses após o upload, será cobrada uma tarifa de exclusão antecipada.",
               "<strong>Por exemplo:</strong> Na região Leste dos EUA (Norte da Virgínia), será cobrada uma taxa de exclusão antecipada pro rata de 0,012 USD por gigabyte excluído antes dos três meses estabelecidos.",
               "Portanto, se você excluir 1 gigabyte de dados 1 mês após o upload, será cobrada uma taxa de exclusão antecipada de 0,008 USD. Se você excluir 1 gigabyte 2 meses após o upload, será cobrada uma taxa de exclusão antecipada de 0,004 USD."
           ]
          },    
          {
           "categoria":"S3 Glacier",
           "pergunta":"Como posso recuperar os dados do serviço?",
           "resposta":[
               "Quando você faz uma solicitação para recuperar dados do S3 Glacier, inicia um trabalho de recuperação para um arquivo. Depois que o trabalho de recuperação for concluído, seus dados estarão disponíveis para download ou acesso por 24 horas."        
           ]
          },    
          {
           "categoria":"Certificação AWS",
           "pergunta":"Há requisitos obrigatórios para fazer um exame AWS?",
           "resposta":[
               "O treinamento é recomendado como parte da preparação para a certificação, mas não é obrigatório para obtê-la."        
           ]
          },    
          {
           "categoria":"Certificação AWS",
           "pergunta":"Qual a melhor maneira de se preparar antes do exame?",
           "resposta":[
               "A melhor preparação para os exames de certificação é a prática. A AWS recomenda de seis meses a dois anos, dependendo do nível do exame. Neste curso, a experiência não é necessária, mas <strong>NÃO</strong> fique só na teoria, coloque na prática o que você está aprendendo."        
           ]
          },    
          {
           "categoria":"Certificação AWS",
           "pergunta":"A AWS possui exame simulados?",
           "resposta":[
               "Sim, os oficiais da AWS custam <strong>20 USD</strong>. Agora se você quer um exame mais barato e do tipo EAD (Ensino a Distância), recomendo ver meus outros cursos."        
           ]
          },    
          {
           "categoria":"Certificação AWS",
           "pergunta":"Onde posso fazer um exame AWS?",
           "resposta":[
               "Exames AWS estão disponíveis nas redes de centros de teste da <strong>Pearson VUE</strong> e da <strong>PSI.</strong> Neste curso, existem duas aulas que explico como fazer sua inscrição e como pedir tempo extra na prova."
           ]
          },    
          {
           "categoria":"Certificação AWS",
           "pergunta":"Qual a política para fazer novamente um exame?",
           "resposta":[
               "Os candidatos que não forem aprovados em um exame deverão aguardar 14 dias antes de fazer o exame novamente. Não há limite para o número de tentativas de exame até que o candidato seja aprovado. Para cada tentativa de exame, é necessário pagar o preço integral de inscrição. Os candidatos dos exames beta podem fazer apenas uma tentativa."
           ]
          },    
          {
           "categoria":"Certificação AWS",
           "pergunta":"Se eu não puder comparecer, posso reagendar o exame?",
           "resposta":[
               "<strong>Sim.</strong> Você pode cancelar ou reagendar seu exame até 24 horas antes do agendamento original sem taxas adicionais."        
           ]
          },    
          {
           "categoria":"Certificação AWS",
           "pergunta":"Quantas perguntas preciso responder para ser aprovado no exame AWS Cloud Practitioner.",
           "resposta":[
               "A <strong>AWS não publica as pontuações de aprovação no exame</strong> porque as perguntas e as pontuações dos exames são atualizadas para refletir alterações nos formulários dos testes à medida que o conteúdo é atualizado. Mas por experiência própria no meu último exame, <strong>espere encontrar 65 perguntas </strong>e a nota de corte - para este exame - em <strong>70%.</strong>"        
           ]
          },    
          {
           "categoria":"Certificação AWS",
           "pergunta":"Com que frequência os exames são atualizados?",
           "resposta":[
               "A AWS atualiza regularmente as perguntas do exame de acordo com o guia do exame. Mas não se preocupe, este curso possui o compromisso de atualizar e avisar os alunos sobre as mudanças ocorridas."        
           ]
          },    
          {
           "categoria":"Certificação AWS",
           "pergunta":"Quando a AWS lança um produto ou serviço, em quanto tempo ele aparece no exame?",
           "resposta":[
               "Um novo produto, serviço ou recurso deve estar disponível publicamente (GA) por seis meses antes de aparecer em um exame de certificação."        
           ]
          },    
          {
           "categoria":"Certificação AWS",
           "pergunta":"Quando receberei o resultado do exame?",
           "resposta":[
               "Após a conclusão do exame, você receberá uma notificação de aprovação ou reprovação na tela do teste.",
               "<strong>Quer se aprofundar? Acesse:</strong>",
               "<a target='__blank' href='https://aws.amazon.com/pt/certification/faqs/'>https://aws.amazon.com/pt/certification/faqs/</a>"
           ]
          },    
          {
           "categoria":"EC2",
           "pergunta":"O que é o Amazon Elastic Compute Cloud (Amazon EC2)?",
           "resposta":[
               "O Amazon Elastic Compute Cloud (Amazon EC2) é um serviço da web que fornece capacidade computacional redimensionável na Nuvem. Ele foi projetado para facilitar a computação em escala na Web para os desenvolvedores."        
           ]
          },    
          {
           "categoria":"EC2",
           "pergunta":"O que posso fazer com o Amazon EC2?",
           "resposta":[
               "O Amazon EC2 reduz a apenas alguns minutos o tempo necessário para obter e inicializar novas instâncias de servidor, permitindo que você dimensione a capacidade rapidamente para mais e para menos, à medida que seus requisitos de computação mudarem."        
           ]
          },    
          {
           "categoria":"EC2",
           "pergunta":"Por que preciso verificar meu número de telefone ao me cadastrar no Amazon EC2?",
           "resposta":[
               "O registro do Amazon EC2 exige que você tenha um número de telefone válido e um endereço de e-mail no arquivo com a AWS, caso precisemos entrar em contato."        
           ]
          },    
          {
           "categoria":"EC2",
           "pergunta":"Quantas instâncias posso executar no Amazon EC2?",
           "resposta":[
               "Você está limitado a executar instâncias sob demanda de acordo com o <a target='__blank' href='https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits'>limite de instâncias sob demanda</a> baseado em vCPU, comprar 20 instâncias reservadas e solicitar instâncias spot de acordo com seu <a target='__blank' href='http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-limits.html'>limite de spots dinâmicos</a> por região. Para aumentar esse limite, é necessário preencher um <a target='__blank' href='https://aws.amazon.com/support/createCase?type=service_limit_increase&serviceLimitIncreaseType=ec2-instances'>formulário</a> na AWS."
           ]
          },    
          {
           "categoria":"EC2",
           "pergunta":"O que o Acordo de Nível de Serviço do Amazon EC2 assegura?",
           "resposta":[
               "Nosso SLA garante uma porcentagem de tempo de disponibilidade mensal de pelo menos <strong>99,99%</strong> para o Amazon EC2 e o Amazon EBS em uma determinada região."        
           ]
          },    
          {
           "categoria":"EC2",
           "pergunta":"Quais ambientes do sistema operacional são compatíveis?",
           "resposta":[
               "No momento, o Amazon EC2 é compatível com vários sistemas operacionais, incluindo: Amazon Linux, Ubuntu, Windows Server, Red Hat Enterprise Linux, SUSE Linux Enterprise Server, Fedora, Debian, CentOS, Gentoo Linux, Oracle Linux e FreeBSD."        
           ]
          },    
          {
           "categoria":"EC2",
           "pergunta":"Com que rapidez os sistemas serão executados?",
           "resposta":[
               "Normalmente, leva menos de 10 minutos a partir da emissão da chamada de RunInstances, para o ponto onde todas as instâncias solicitadas começam suas sequências de inicialização.",
               " Esse período depende de uma série de fatores, incluindo o tamanho da AMI, o número de instâncias que estão sendo iniciadas e há quanto tempo essa AMI foi iniciada pela última vez. As imagens iniciadas pela primeira vez poderão demorar um pouco mais para serem inicializadas."
           ]
          },    
          {
           "categoria":"EC2",
           "pergunta":"Como faço para acessar meus sistemas?",
           "resposta":[
               "Cada instância retorna um conjunto de nomes de DNS, um para cada sistema que está sendo inicializado. Esse nome pode ser usado para acessar o sistema exatamente como você faria se estivesse no seu próprio Datacenter."        
           ]
          },    
          {
           "categoria":"EC2",
           "pergunta":"Com que rapidez posso expandir ou reduzir minha capacidade?",
           "resposta":[
               "O Amazon EC2 fornece um ambiente de computação verdadeiramente elástico. O Amazon EC2 permite que você aumente ou diminua a capacidade em minutos, não horas ou dias."        
           ]
          },    
          {
           "categoria":"EC2",
           "pergunta":"Como será a cobrança e o faturamento do uso que eu fizer do Amazon EC2",
           "resposta":[
               "Você paga somente pelo que usar. A definição de preço exibida é uma taxa horária. No entanto, dependendo da instância escolhida, cada tipo de instância é cobrado por hora ou segundo (mínimo de 60 segundos). Instâncias com o status <i>'Stopped'<i/> <strong>não</strong> geram custos.",
               "<strong>Quer se aprofundar? Acesse:</strong>",
               "<a target='__blank' href='https://aws.amazon.com/pt/ec2/faqs/'>https://aws.amazon.com/pt/ec2/faqs/</a>"
           ]
          },    
          {
           "categoria":"ASG",
           "pergunta":"O que é o AWS Auto Scaling?",
           "resposta":[
               "O AWS Auto Scaling é um novo serviço da AWS para ajudar a otimizar o desempenho de aplicativos e reduzir custos de infraestrutura por meio da escalabilidade fácil e segura de vários recursos da AWS.",
               "O serviço simplifica a experiência de escalabilidade, permitindo escalar coleções de recursos relacionados usados por um aplicativo com apenas alguns cliques."        
           ]
          },    
          {
           "categoria":"ASG",
           "pergunta":"Quando devo usar o AWS Auto Scaling?",
           "resposta":[
               "Você deve usar o AWS Auto Scaling para aplicativos que usam um ou mais recursos escaláveis e estão sujeitos a cargas variáveis.",
               "Um bom exemplo seria um aplicativo web de comércio eletrônico que recebe tráfego variável durante o dia."        
           ]
          },    
          {
           "categoria":"ASG",
           "pergunta":"Quais as diferentes formas de escalabilidade de recursos da AWS?",
           "resposta":[
               "Os clientes da AWS dispõem de várias opções para escalar recursos." ,
               "O <a target='__blank' href='https://aws.amazon.com/pt/ec2/autoscaling/'> Amazon EC2 Auto Scaling</a> ajuda a garantir que você tenha o número correto de instâncias do Amazon EC2 disponíveis para processar a carga dos aplicativos.",
               "O EC2 Auto Scaling também pode detectar uma instância não íntegra, encerrá-la e substituí-la por uma nova instância."
           ]
          },    
          {
           "categoria":"ASG",
           "pergunta":"Quais os benefícios do AWS Auto Scaling?",
           "resposta":[
               "O AWS Auto Scaling é uma forma rápida e fácil de otimizar o desempenho e os custos dos aplicativos.</br> Para citar alguns benefícios deste serviço, são: </br><ul><li>Escalabilidade rápida e automatizada</li><li>Garantia de desempenho do ambiente</li><li>Estimativa real de custos e reflexo direto em cost saving, evitando gastos desnecessários</li></ul>"
           ]
          },    
          {
           "categoria":"ASG",
           "pergunta":"Como posso começar a usar o AWS Auto Scaling?",
           "resposta":[
               "O AWS Auto Scaling permite a seleção de aplicativos de acordo com tags de recursos ou com pilhas do AWS CloudFormation. Com apenas alguns cliques, é possível criar um plano de escalabilidade para um aplicativo."        
           ]
          },    
          {
           "categoria":"ASG",
           "pergunta":"O que é escalabilidade preditiva?",
           "resposta":[
               "Escalabilidade preditiva é um recurso do AWS Auto Scaling que examina padrões históricos de tráfego e os projeta para programar mudanças futuras no número de instâncias do EC2 nos momentos adequados.",
               "A escalabilidade preditiva usa modelos de machine learning para prever padrões diários e semanais."
           ]
          },    
          {
           "categoria":"ASG",
           "pergunta":"O que pode ser escalado com o AWS Auto Scaling?",
           "resposta":[
               "<ul><li>Grupos do <a target='__blank' href='https://aws.amazon.com/pt/ec2/'>Amazon EC2 </a>Auto Scaling</li><li>Produtos do <a target='__blank' href='https://aws.amazon.com/pt/ecs/'>Amazon Elastic Container Service (ECS)</a></li><li>Frotas <a target='__blank' href='https://aws.amazon.com/pt/ec2/spot/'>do Amazon EC2</a></li><li>Capacidade de throughput do <a target='__blank' href='https://aws.amazon.com/pt/dynamodb/'>Amazon DynamoDB</a></li><li>Réplicas do Aurora para o <a target='__blank' href='https://aws.amazon.com/pt//rds/aurora/'>Amazon Aurora</a></li></ul>"
           ]
          },    
          {
           "categoria":"ASG",
           "pergunta":"Como o AWS Auto Scaling faz recomendações de escalabilidade?",
           "resposta":[
               "O AWS Auto Scaling baseia as recomendações de escalabilidade nas métricas e limites de escalabilidade mais comuns usados para Auto Scaling.",
               "Além disso, o serviço recomenda limites seguros de escalabilidade através de recomendações de tamanhos mínimo e máximo para os recursos."
           ]
          },    
          {
           "categoria":"ASG",
           "pergunta":"Em quais regiões o AWS Auto Scaling está disponível?",
           "resposta":[
               "Na maioria das regiões e em constante expansão."        
           ]
          },    
          {
           "categoria":"ASG",
           "pergunta":"Quanto custa o AWS Auto Scaling?",
           "resposta":[
               "De forma semelhante ao Auto Scaling de recursos individuais da AWS, o uso do AWS Auto Scaling é gratuito.",
               "<strong>Quer se aprofundar? Acesse:</strong>",
               "<a target='__blank' href='https://aws.amazon.com/pt/autoscaling/faqs/'>https://aws.amazon.com/pt/autoscaling/faqs/</a>"
           ]
          },    
          {
           "categoria":"AWS Snow",
           "pergunta":"O que é o Snowcone?",
           "resposta":[
               "O AWS Snowcone é um dispositivo de computação e transferência de dados, pequeno, portátil, robusto e seguro. Você pode usar o Snowcone para coletar, processar e transferir dados para a Nuvem, enviando o dispositivo off-line para a AWS ou on-line com o AWS DataSync."        
           ]
          },    
          {
           "categoria":"AWS Snow",
           "pergunta":"O que é o AWS Snowball?",
           "resposta":[
               "O AWS Snowball é um serviço que fornece dispositivos robustos e seguros para que você possa utilizar os <strong>recursos de armazenamento e computação</strong> da AWS em seus ambientes de borda e transferir dados de e para a AWS. Esses dispositivos robustos são comumente chamados de dispositivos AWS Snowball ou AWS Snowball Edge.",
               "O AWS Snowball anteriormente se referia especificamente a uma versão prévia do hardware desses dispositivos. Entretanto, esse modelo foi substituído por um hardware atualizado. Agora, o serviço do AWS Snowball opera com dispositivos Snowball Edge, que incluem recursos de computação integrados e também armazenamento."
           ]
          },    
          {
           "categoria":"AWS Snow",
           "pergunta":"O que é o Snowball Edge?",
           "resposta":[
               "O Snowball Edge é um dispositivo de computação de borda e transferência de dados, fornecido pelo serviço AWS Snowball. Com armazenamento e <strong>poder computacional integrado</strong>, ele fornece serviços selecionados da AWS para uso em pontos de presença.",
               "O Snowball Edge é fornecido em duas opções, Storage Optimized e Compute Optimized, para dar suporte ao processamento de dados locais e à <strong>coleta em ambientes desconectados</strong>, como navios, moinhos de vento e fábricas distantes."
           ]
          },    
          {
           "categoria":"AWS Snow",
           "pergunta":"O que é o AWS Snowmobile?",
           "resposta":[
               "O AWS Snowmobile é o primeiro serviço de migração de dados na escala de exabytes que permite migrar conjuntos de dados muito grandes de ambientes locais para a AWS. Cada <strong>Snowmobile é um caminhão </strong> de dados seguros com uma capacidade de <strong>armazenamento de até 100 PB</strong> que pode ser enviado para sua localização e conectado diretamente ao backbone da sua rede para executar a migração de dados de alta velocidade.",
               "Você pode migrar rapidamente um exabyte de dados com dez Snowmobiles em paralelo por meio de uma única localização ou de vários datacenters. O Snowmobile é oferecido pela AWS como um serviço gerenciado."
           ]
          },    
          {
           "categoria":"AWS Snow",
           "pergunta":"Qual é a diferença entre o Snowball e o Snowball Edge?",
           "resposta":[
               "O termo <strong>AWS Snowball agora se refere ao serviço em geral,</strong> e Snowball Edge se refere aos tipos de dispositivos que o serviço usa atualmente – algumas vezes chamados genericamente de dispositivos AWS Snowball.",        
               "Os primeiros projetos de hardware do Snowball tinham apenas a função de transporte de dados. O <strong>Snowball Edge tem a capacidade adicional de executar computação local</strong>, mesmo sem uma conexão de rede disponível."
           ]
          },    
          {
           "categoria":"AWS Snow",
           "pergunta":"Quando solicitar o AWS Snowball e o AWS Snowmobile?",
           "resposta":[
               "Migração <strong>Petabytes</strong>, solicite o <strong>AWS Snowball</strong>",
               "Migração <strong>Exabytes</strong>, solicite o <strong>AWS Snowmobile</strong>"
           ]
          },    
          {
           "categoria":"AWS Snow",
           "pergunta":"Quem deve usar o Snowball Edge?",
           "resposta":[
               "Considere o Snowball Edge se precisar <strong>executar tarefas de computação em ambientes inóspitos</strong>, hostis, móveis, <strong>sem conexão ou com conexão intermitente.</strong>",
               "Porém, lembre-se, os dispositivos Snowball Edge devem ser <strong>devolvidos em até 360 dias</strong> a partir da sua preparação.",
               "Você também pode considerá-lo para <strong>transferências e migrações de dados</strong> em grande escala quando não houver banda larga disponível para serviços de transferência online de alta velocidade, como o AWS DataSync."
           ]
          },    
          {
           "categoria":"AWS Snow",
           "pergunta":"Posso usar o Snowball Edge para migrar dados de uma região da AWS para outra?",
           "resposta":[
               "<strong>Não.</strong> O Snowball Edge foi criado como solução de transporte de dados para mover grandes volumes de dados para uma região da AWS específica ou para fora dela. Quando é necessário transferir dados entre regiões da AWS, recomendamos usar a replicação entre regiões do S3 como alternativa."        
           ]
          },    
          {
           "categoria":"AWS Snow",
           "pergunta":"O Snowball Edge oferece suporte às funções do Lambda?",
           "resposta":[
               "<strong>Sim</strong>, as funções do Lambda são hospedadas e podem ser executadas no Snowball Edge em resposta a eventos de armazenamento de dados."        
           ]
          },    
          {
           "categoria":"AWS Snow",
           "pergunta":" Quando devo considerar o agrupamento de dispositivos Snowball Edge em clusters?",
           "resposta":[
               "Com um cluster Snowball Edge, você aumenta a durabilidade e a escalabilidade do armazenamento local. Agrupar Snowballs cria um armazenamento local compatível com S3 durável e escalável.",
               "Os dados podem ser enviados para a AWS simplesmente movendo Snowballs para dentro e para fora do cluster. Os clusters do Snowball Edge permitem aumentar ou reduzir a escala da capacidade de armazenamento local de acordo com a necessidade, adicionando ou removendo dispositivos e eliminando a necessidade de comprar hardware de alto custo.",        
               "<strong>Quer se aprofundar? Acesse:</strong><ul><li><a target='__blank' href='https://aws.amazon.com/pt/snowcone/faqs/'>https://aws.amazon.com/pt/snowcone/faqs/</li><li><a target='__blank' href='https://aws.amazon.com/pt/snowball/faqs/'>https://aws.amazon.com/pt/snowball/faqs/</li><li><a target='__blank' href='https://aws.amazon.com/pt/snowmobile/faqs/'>https://aws.amazon.com/pt/snowmobile/faqs/</li></ul>"
           ]
          },    
          {
           "categoria":"VPC",
           "pergunta":"O que é a Amazon Virtual Private Cloud?",
           "resposta":[
               "A <strong>Amazon VPC</strong> permite provisionar uma seção da nuvem da Amazon Web Services (AWS) isolada logicamente onde você pode executar recursos da AWS na rede virtual que você mesmo define. Você tem controle total sobre o ambiente de rede virtual, inclusive com relação à seleção dos seus próprios intervalos de endereço IP, à criação de sub-redes e à configuração de tabelas de roteamento e gateways de rede.",
               "Além disso, você pode criar uma conexão de Virtual Private Network (VPN) por hardware entre o datacenter corporativo e a VPC e usar a Nuvem AWS como uma extensão desse datacenter."
           ]
          },    
          {
           "categoria":"VPC",
           "pergunta":"Quais são os componentes do Amazon VPC?",
           "resposta":[
               "<ul><li><strong>Virtual Private Cloud:</strong> uma rede virtual isolada logicamente na Nuvem AWS.</li><li><strong>Sub-rede:</strong> um segmento de um intervalo de endereços IP da VPC.</li><li><strong>Internet Gateway:</strong> o lado da Amazon VPC de uma conexão à Internet pública.</li><li><strong>NAT Gateway:</strong> um serviço de Network Address Translation (NAT – Conversão de endereços de rede) gerenciado e altamente disponível para recursos em uma sub-rede privada para acesso à Internet.</li><li><strong>Virtual Private Gateway:</strong> o lado da Amazon VPC de uma conexão VPN.</li><li><strong>Conexão emparelhada:</strong> uma conexão emparelhada permite rotear tráfego através de endereços IP privados entre duas VPCs emparelhadas.</li><li><strong>VPC Endpoints:</strong> permitem conectividade privada de uma VPC a serviços hospedados na AWS sem usar Internet Gateway, VPN, dispositivos de Network Address Translation (NAT) ou proxies de firewall.</li><li><strong>Internet Gateway somente para saída:</strong> um gateway stateful para oferecer acesso somente de saída a tráfego IPv6 da VPC para a Internet.</li></ul>"
           ]
          },    
          {
           "categoria":"VPC",
           "pergunta":"Por que devo usar a Amazon VPC?",
           "resposta":[
               "A Amazon VPC permite que você crie uma rede virtual na Nuvem AWS, <strong>sem necessidade de</strong> VPNs, hardware ou datacenters físicos."
           ]
          },    
          {
           "categoria":"VPC",
           "pergunta":"Quais são as opções disponíveis do Amazon VPC?",
           "resposta":[
               "Existem quatro tipos, que são:",
               "1. Amazon VPC com uma única sub-rede pública",
               "2. Amazon VPC com sub-redes públicas e privadas",
               "3. Amazon VPC com sub-redes públicas e privadas, e acesso ao AWS Site-to-Site VPN",
               "4. Amazon VPC com uma única sub-rede privada e acesso ao AWS Site-to-Site VPN"
           ]
          },    
          {
           "categoria":"VPC",
           "pergunta":"Como será a cobrança e o faturamento relacionados ao uso que eu fizer do Amazon VPC?",
           "resposta":[
               "Não há encargos adicionais para a criação e o uso da própria VPC. Sua cobrança é associada na utilização dos outros serviços, como o uso do Amazon EC2.",
               "Se você conectar sua VPC ao datacenter corporativo usando a conexão via VPN de hardware opcional, a definição de preço será por hora de conexão da VPN (o período no qual uma conexão VPN ficou no estado “available”)."
           ]
          },    
          {
           "categoria":"VPC",
           "pergunta":"Quais são as opções de conexão com a Amazon VPC?",
           "resposta":[
               "Você pode conectar a Amazon VPC:</br><ul><li>Com a Internet, utilizando o <strong>Internet Gateway.</strong></li><li>Com seu datacenter corporativo, utilizando uma conexão do <strong>AWS Site-to-Site VPN </strong>(por meio do gateway privado virtual)</li><li>Com a Internet e seu datacenter corporativo, utilizando um <strong>Internet Gateway</strong> e um <strong>gateway privado virtual.</strong></li><li>A outros serviços da AWS, utilizando um <strong>Internet Gateway, NAT, gateway privado virtual</strong> ou <strong>VPC endpoints.</strong></li><li>Com outras Amazon VPCs, por meio de <strong>conexões</strong> emparelhadas de VPCs.</li></ul>"
           ]
          },    
          {
           "categoria":"VPC",
           "pergunta":"Quais intervalos de endereços IP são atribuídos a uma Amazon VPC padrão?",
           "resposta":[
               "As VPCs padrão recebem uma atribuição de intervalo CIDR de 172.31.0.0/16. Os subnets padrão dentro de uma VPC padrão recebem uma designação de netblocks /20 dentro do intervalo CIDR da VPC."        
           ]
          },    
          {
           "categoria":"VPC",
           "pergunta":"Qual tamanho de VPC posso criar?",
           "resposta":[
               "No momento, a Amazon VPC aceita cinco intervalos de endereço IP, um principal e quatro secundários para <strong>IPv4</strong>. Cada um desses intervalos pode ter um tamanho entre /28 (em notação CIDR) e /16. Os intervalos de endereço IP da VPC não devem sobrepor os intervalos de endereço IP da rede atual.",
               "No <strong>IPv6</strong>, a VPC tem um tamanho fixo de /56 (em notação CIDR). Uma VPC pode ter blocos CIDR IPv4 e IPv6 associados a ela."
           ]
          },    
          {
           "categoria":"VPC",
           "pergunta":"Quantas sub-redes posso criar por VPC?",
           "resposta":[
               "No momento, é possível criar 200 sub-redes por VPC."        
           ]
          },    
          {
           "categoria":"VPC",
           "pergunta":"Como protejo as instâncias do Amazon EC2 executadas em uma VPC?",
           "resposta":[
               "Os grupos de segurança do Amazon EC2 podem ser usados para ajudar a proteger instâncias dentro do Amazon VPC. Os <strong>grupos de segurança</strong> em uma VPC permitem que você especifique o tráfego de rede de entrada e de saída permitido de/para cada instância do Amazon EC2. O tráfego que não é explicitamente permitido para ou com base em uma instância é recusado automaticamente."
               ,"Além dos grupos de segurança, o tráfego de rede entrando e saindo de cada sub-rede pode ser permitido ou recusado por meio de<strong> Listas de controle de acesso (ACLs)</strong> da rede."
               ,"<strong>Quer se aprofundar? Acesse:</strong> <a target='__blank' href='https://aws.amazon.com/pt/vpc/faqs/'>https://aws.amazon.com/pt/vpc/faqs/</a>"
               
           ]
          },    
          {
           "categoria":"RDS",
           "pergunta":"O que é o Amazon RDS?",
           "resposta":[
               "O Amazon Relational Database Service (Amazon RDS) é um serviço gerenciado que facilita a configuração, operação o dimensionamento de um <a target='__blank' href='https://aws.amazon.com/dms/'>banco de dados relacional</a> na <a target='__blank' href='https://aws.amazon.com/what-is-cloud-computing/'> Nuvem.</a>"
           ]
          },    
          {
           "categoria":"RDS",
           "pergunta":"Com quais mecanismos o Amazon RDS é compatível?",
           "resposta":[
               "O <strong>Amazon RDS</strong> é compatível com os mecanismos de banco de dados Amazon Aurora, MySQL, MariaDB, Oracle, SQL Server e PostgreSQL."        
           ]
          },    
          {
           "categoria":"RDS",
           "pergunta":"O que é uma instância de banco de dados?",
           "resposta":[
               "Uma instância de banco de dados pode ser considerada como um ambiente de banco de dados na nuvem com os recursos computacionais e de armazenamento que você especificar. É possível criar e excluir instâncias de banco de dados, definir/redefinir atributos de infraestrutura de instâncias de banco de dados, além de controlar acesso e segurança por meio do <a target='__blank' href='https://console.aws.amazon.com/'> Console de Gerenciamento da AWS</a>, das <a target='__blank' href='http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/Welcome.html'>APIs do Amazon RDS</a> e da <a target='__blank' href='http://docs.aws.amazon.com/cli/latest/reference/rds/index.html'>Interface da Linha de Comando da AWS.</a>"        
           ]
          },    
          {
           "categoria":"RDS",
           "pergunta":"Quantas instâncias de banco de dados é possível executar com o Amazon RDS?",
           "resposta":[
               "Por padrão, os clientes podem ter um total de até 40 instâncias de banco de dados do Amazon RDS."        
           ]
          },    
          {
           "categoria":"RDS",
           "pergunta":"Como você é cobrado e faturado pela utilização do Amazon RDS?",
           "resposta":[
                 "Você paga somente pelo que usa, sem taxas mínimas ou de configuração, e a cobrança é com base em:<ul><li>Horas de instância de banco de dados</li><li>Armazenamento (por GB por mês)</li><li>Solicitações de E/S por mês</li><li>IOPS provisionadas por mês</li><li>Armazenamento de backup</li><li>Transferência de dados (da Internet para dentro e para fora da instância de banco de dados)</li></ul>"        
           ]
          },    
          {
           "categoria":"RDS",
           "pergunta":"Serei cobrado por uma instância de banco de dados parada?",
           "resposta":[
               "Enquanto a instância de banco de dados estiver parada, você será cobrado pelo armazenamento provisionado (incluindo IOPS provisionadas) e pelo armazenamento de backup (incluindo snapshots manuais e backups automatizados dentro da janela de retenção especificada), mas não pelas horas de instância de banco de dados."        
           ]
          },    
          {
           "categoria":"RDS",
           "pergunta":"O que o nível de uso gratuito da AWS para o Amazon RDS oferece?",
           "resposta":[
               "A oferta do <a target='__blank' href='https://aws.amazon.com/rds/free/'> nível gratuito da AWS para o Amazon RDS</a> disponibiliza a utilização gratuita de instâncias do tipo micro de banco de dados, Single-AZ executando MySQL, MariaDB, PostgreSQL, Oracle (no modelo de licenciamento “Bring-Your-Own-License” – BYOL) e SQL Server Express Edition."
               ,"O nível de uso gratuito é limitado a 750 horas de instância por mês. Os clientes também recebem gratuitamente 20 GB de armazenamento de banco de dados de uso geral (SSD) e 20 GB por mês de armazenamento de backup."
           ]
          },    
          {
           "categoria":"RDS",
           "pergunta":"Qual é a diferença entre as instâncias reservadas e as instâncias de banco de dados sob demanda?",
           "resposta":[
               "Em termos de funcionalidade, as instâncias reservadas e as instâncias de banco de dados sob demanda são exatamente as mesmas. A única diferença é a forma como a instâncias de banco de dados são faturadas."
               ,"Com instâncias reservadas, você compra uma reserva durante um período de um ou três anos e, em troca, recebe uma taxa reduzida de uso efetivo por hora (em comparação com as instâncias de banco de dados sob demanda) durante o período contratado. A menos que você tenha comprado instâncias reservadas em uma região, todas as instâncias de banco de dados serão cobradas de acordo com as taxas por hora sob demanda."
           ]
          },    
          {
           "categoria":"RDS",
           "pergunta":"Posso mover uma instância reservada de uma região ou zona de disponibilidade para outra?",
           "resposta":[
               "Cada instância reservada está associada <strong>a uma região específica</strong>, que é determinada por toda a duração da reserva e não pode ser alterada. Contudo, cada reserva pode ser usada em qualquer uma das zonas de disponibilidade encontradas dentro da região associada."
           ]    
          },    
          {
           "categoria":"RDS",
           "pergunta":"Qual é a diferença entre backups automáticos e DB snapshots?",
           "resposta":[
               "Enquanto um é realizado de forma automatizada, o outro é iniciado pelo usuário.",
               "<strong>Backup automático:</strong> permite a <strong>recuperação point-in-time</strong> da sua instância de banco de dados. Ao ativá-lo, o Amazon RDS automaticamente realiza um snapshot diário completo dos dados (durante a janela de backup preferencial) e captura os logs de transação (à medida que as instâncias de banco de dados são atualizadas). Ao iniciar a recuperação point-in-time, os logs de transação serão aplicados ao backup diário mais apropriado para restaurar sua instância de banco de dados para o momento específico solicitado.",
               "<strong>Importante:</strong> O Amazon RDS retém backups de uma instância de banco de dados por um período específico definido pelo usuário, chamado de período de retenção que, como <strong>padrão</strong>, é de 07 dias, mas pode ser configurado para até <strong>35 dias</strong>.",
               "<strong>DB snapshots:</strong> são iniciados pelo usuário e permitem fazer o backup da instância de banco de dados em um estado conhecido e com a frequência desejada para depois fazer a recuperação para o estado específico mencionado a qualquer momento.",
               "<strong>Quer se aprofundar? Acesse:</strong> <a target='__blank' href='https://aws.amazon.com/pt/rds/faqs/'>https://aws.amazon.com/pt/rds/faqs/</a>"
           ]    
          }
       
       ]
      res.status(200).json(dados)
    }
    