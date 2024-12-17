from typing_extensions import TypedDict
from fastapi import FastAPI
from datriever.smart_app import portfolio
from sqlmodel import SQLModel, create_engine, select, Session

class Source(SQLModel):
  name: str
  cost: float

engine = create_engine('sqlite:///db.sqlite')

app = FastAPI(generate_unique_id_function=lambda route: route.name)

class OptimizeParams(TypedDict):
  sources: list[portfolio.Source]
  goals: portfolio.Goals
  constraints: portfolio.Constraints

@app.post('/tools/optimize')
def optimize_portfolio(params: OptimizeParams) -> list[float] | None:
  return portfolio.optimize(**params)


@app.post('/data/source')
def create_source(source: Source):
  


if __name__ == '__main__':
  
  from argparse import ArgumentParser

  parser = ArgumentParser()
  parser.add_argument('-p', '--port', type=int, default=8000)
  parser.add_argument('--host', type=str, default='0.0.0.0')
  parser.add_argument('--cors', type=str, default='*')

  parser.add_argument('-g', '--clientgen', action='store_true')
  parser.add_argument('--output', type=str, default=None)

  args = parser.parse_args()

  # GENERATE TYPESCRIPT CLIENT
  if args.clientgen:
    output_path = args.output
    if output_path is None:
      import os
      path = os.path.dirname(__file__)
      output_path = os.path.join(path, '..', 'app', 'src', 'lib', 'client')

    print(f'Generating client at {output_path}...')
    import sys
    from openapi_ts import generate_client
    generate_client(app.openapi(), output_path, logstream=sys.stdout)

  # RUN SERVER
  else:
    from fastapi.middleware.cors import CORSMiddleware
    import uvicorn

    app.add_middleware(CORSMiddleware, allow_origins=[args.cors], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])
    uvicorn.run(app, host=args.host, port=args.port)
